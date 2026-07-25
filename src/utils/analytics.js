const allowedEvents = new Set([
  'case_study_view',
  'project_exit',
  'resume_download',
  'contact_success',
  'contact_failure',
]);

function sameOriginEndpoint(value) {
  if (!value) return null;
  try {
    const url = new URL(value, window.location.origin);
    return url.origin === window.location.origin ? url.toString() : null;
  } catch {
    return null;
  }
}

export function trackEvent(name, properties = {}) {
  if (!allowedEvents.has(name) || navigator.globalPrivacyControl) return;
  const endpoint = sameOriginEndpoint(process.env.REACT_APP_ANALYTICS_ENDPOINT);
  if (!endpoint) return;
  const safeProperties = Object.fromEntries(
    Object.entries(properties)
      .filter(([key, value]) => /^[a-z_]+$/.test(key) && ['string', 'number', 'boolean'].includes(typeof value))
      .slice(0, 8)
  );
  const payload = JSON.stringify({ name, properties: safeProperties, path: window.location.pathname, timestamp: Date.now() });
  if (navigator.sendBeacon) navigator.sendBeacon(endpoint, new Blob([payload], { type: 'application/json' }));
  else fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: payload, keepalive: true }).catch(() => {});
}

export function reportVital(metric) {
  const endpoint = sameOriginEndpoint(process.env.REACT_APP_WEB_VITALS_ENDPOINT);
  if (!endpoint || navigator.globalPrivacyControl) return;
  const payload = JSON.stringify({
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    id: metric.id,
    path: window.location.pathname,
  });
  if (navigator.sendBeacon) navigator.sendBeacon(endpoint, new Blob([payload], { type: 'application/json' }));
}
