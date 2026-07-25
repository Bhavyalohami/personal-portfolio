"use strict";

var MAX_BODY_BYTES = 12 * 1024;
var RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
var RATE_LIMIT_MAX_REQUESTS = 5;
var ALLOWED_FIELDS = new Set([
  "name",
  "email",
  "message",
  "company",
  "projectType",
  "budget",
  "timeline",
  "website"
]);

var rateLimitStore = globalThis.__portfolioContactRateLimit;
if (!rateLimitStore) {
  rateLimitStore = new Map();
  globalThis.__portfolioContactRateLimit = rateLimitStore;
}

function sendJson(response, status, body, extraHeaders) {
  response.statusCode = status;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", "no-store, max-age=0");
  response.setHeader("X-Content-Type-Options", "nosniff");
  Object.entries(extraHeaders || {}).forEach(function setResponseHeader(entry) {
    response.setHeader(entry[0], entry[1]);
  });
  response.end(JSON.stringify(body));
}

function parseRequestBody(request) {
  if (request.body && typeof request.body === "object" && !Buffer.isBuffer(request.body)) {
    return request.body;
  }
  if (typeof request.body === "string" || Buffer.isBuffer(request.body)) {
    return JSON.parse(request.body.toString("utf8"));
  }
  return null;
}

function cleanString(value) {
  return typeof value === "string" ? value.trim().replace(/\r\n?/g, "\n") : "";
}

function hasUnsafeControlCharacters(value) {
  return /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(value);
}

function isEmail(value) {
  return value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function validatePayload(payload) {
  var errors = {};
  if (!payload || Array.isArray(payload) || Object.getPrototypeOf(payload) !== Object.prototype) {
    return { errors: { form: "Send a JSON object." } };
  }

  var unknownFields = Object.keys(payload).filter(function findUnknownField(key) {
    return !ALLOWED_FIELDS.has(key);
  });
  if (unknownFields.length) errors.form = "The request contains unsupported fields.";

  var data = {
    name: cleanString(payload.name),
    email: cleanString(payload.email).toLowerCase(),
    message: cleanString(payload.message),
    company: cleanString(payload.company),
    projectType: cleanString(payload.projectType),
    budget: cleanString(payload.budget),
    timeline: cleanString(payload.timeline),
    website: cleanString(payload.website)
  };

  if (data.website) errors.form = "Submission rejected.";
  if (!data.name || data.name.length > 80 || hasUnsafeControlCharacters(data.name)) {
    errors.name = "Enter a name between 1 and 80 characters.";
  }
  if (!isEmail(data.email) || hasUnsafeControlCharacters(data.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (data.message.length < 10 || data.message.length > 4000 || hasUnsafeControlCharacters(data.message)) {
    errors.message = "Enter a message between 10 and 4,000 characters.";
  }

  [
    ["company", 120],
    ["projectType", 80],
    ["budget", 80],
    ["timeline", 80]
  ].forEach(function validateOptionalField(rule) {
    var field = rule[0];
    var maxLength = rule[1];
    if (data[field].length > maxLength || hasUnsafeControlCharacters(data[field])) {
      errors[field] = "This field is too long or contains unsupported characters.";
    }
  });

  return { data: data, errors: errors };
}

function getClientKey(request) {
  var forwardedFor = request.headers["x-forwarded-for"];
  var firstAddress = Array.isArray(forwardedFor) ? forwardedFor[0] : String(forwardedFor || "").split(",")[0];
  return firstAddress.trim() || String(request.headers["x-real-ip"] || "").trim() || null;
}

function consumeRateLimit(clientKey) {
  if (!clientKey) return { allowed: true, retryAfter: 0 };

  var now = Date.now();
  if (rateLimitStore.size > 1000) {
    rateLimitStore.forEach(function removeExpiredEntry(entry, key) {
      if (now - entry.windowStartedAt >= RATE_LIMIT_WINDOW_MS) rateLimitStore.delete(key);
    });
  }

  var entry = rateLimitStore.get(clientKey);
  if (!entry || now - entry.windowStartedAt >= RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(clientKey, { count: 1, windowStartedAt: now });
    return { allowed: true, retryAfter: 0 };
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfter: Math.max(1, Math.ceil((RATE_LIMIT_WINDOW_MS - (now - entry.windowStartedAt)) / 1000))
    };
  }

  entry.count += 1;
  return { allowed: true, retryAfter: 0 };
}

function configuredRecipients(value) {
  return String(value || "")
    .split(",")
    .map(function trimRecipient(recipient) { return recipient.trim(); })
    .filter(Boolean)
    .slice(0, 3);
}

module.exports = async function contactHandler(request, response) {
  response.setHeader("Allow", "POST, OPTIONS");

  if (request.method === "OPTIONS") {
    response.statusCode = 204;
    response.setHeader("Cache-Control", "no-store");
    response.end();
    return;
  }

  if (request.method !== "POST") {
    sendJson(response, 405, { ok: false, error: "Use POST to send a contact request." });
    return;
  }

  var contentType = String(request.headers["content-type"] || "").toLowerCase();
  if (!contentType.startsWith("application/json")) {
    sendJson(response, 415, { ok: false, error: "Content-Type must be application/json." });
    return;
  }

  var contentLength = Number(request.headers["content-length"] || 0);
  if (contentLength > MAX_BODY_BYTES) {
    sendJson(response, 413, { ok: false, error: "The contact request is too large." });
    return;
  }

  var payload;
  try {
    payload = parseRequestBody(request);
  } catch (error) {
    sendJson(response, 400, { ok: false, error: "The request body is not valid JSON." });
    return;
  }

  if (payload && Buffer.byteLength(JSON.stringify(payload), "utf8") > MAX_BODY_BYTES) {
    sendJson(response, 413, { ok: false, error: "The contact request is too large." });
    return;
  }

  var validation = validatePayload(payload);
  if (Object.keys(validation.errors).length) {
    sendJson(response, 422, { ok: false, error: "Check the highlighted fields.", fields: validation.errors });
    return;
  }

  var rateLimit = consumeRateLimit(getClientKey(request));
  if (!rateLimit.allowed) {
    sendJson(
      response,
      429,
      { ok: false, error: "Too many messages were sent from this connection. Please try again later." },
      { "Retry-After": String(rateLimit.retryAfter) }
    );
    return;
  }

  var apiKey = process.env.RESEND_API_KEY;
  var recipients = configuredRecipients(process.env.CONTACT_TO_EMAIL);
  if (!apiKey || !recipients.length || !recipients.every(isEmail)) {
    sendJson(response, 503, {
      ok: false,
      code: "CONTACT_NOT_CONFIGURED",
      error: "Contact delivery is temporarily unavailable. Please use the email link on the contact page."
    });
    return;
  }

  var data = validation.data;
  var optionalLines = [
    data.company && "Company: " + data.company,
    data.projectType && "Project type: " + data.projectType,
    data.budget && "Budget: " + data.budget,
    data.timeline && "Timeline: " + data.timeline
  ].filter(Boolean);
  var messageText = [
    "New portfolio inquiry",
    "",
    "Name: " + data.name,
    "Email: " + data.email,
    ...optionalLines,
    "",
    "Message:",
    data.message
  ].join("\n");

  var abortController = new AbortController();
  var timeoutId = setTimeout(function abortProviderRequest() { abortController.abort(); }, 8000);

  try {
    var providerResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + apiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Bhavya Lohami Portfolio <onboarding@resend.dev>",
        to: recipients,
        reply_to: data.email,
        subject: "Portfolio inquiry from " + data.name.replace(/[\r\n]/g, " ").slice(0, 80),
        text: messageText
      }),
      signal: abortController.signal
    });

    if (!providerResponse.ok) {
      console.error("[contact] Resend rejected the request with status", providerResponse.status);
      sendJson(response, 502, { ok: false, error: "The message could not be delivered. Please try again or use the email link." });
      return;
    }

    sendJson(response, 200, { ok: true, message: "Thanks - your message was sent." });
  } catch (error) {
    console.error("[contact] Delivery request failed", error && error.name ? error.name : "UnknownError");
    sendJson(response, 502, { ok: false, error: "The message could not be delivered. Please try again or use the email link." });
  } finally {
    clearTimeout(timeoutId);
  }
};
