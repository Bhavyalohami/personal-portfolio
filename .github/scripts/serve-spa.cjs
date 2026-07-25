"use strict";

const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");

const buildRoot = path.resolve(__dirname, "../../build");
const port = Number(process.env.PORT || 4173);
const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp4": "video/mp4",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webm": "video/webm",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8"
};

function safePublicPath(requestUrl) {
  const pathname = decodeURIComponent(new URL(requestUrl, "http://127.0.0.1").pathname);
  const candidate = path.resolve(buildRoot, "." + pathname);
  return candidate.startsWith(buildRoot + path.sep) || candidate === buildRoot ? candidate : null;
}

const server = http.createServer((request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end();
    return;
  }

  let requestedPath;
  try {
    requestedPath = safePublicPath(request.url || "/");
  } catch (error) {
    response.writeHead(400);
    response.end("Bad request");
    return;
  }

  if (!requestedPath) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  let filePath = requestedPath;
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) filePath = path.join(filePath, "index.html");
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) filePath = path.join(buildRoot, "index.html");

  const contentType = mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream";
  response.writeHead(200, {
    "Content-Type": contentType,
    "Cache-Control": filePath.endsWith("index.html") ? "no-cache" : "public, max-age=3600"
  });

  if (request.method === "HEAD") {
    response.end();
    return;
  }

  fs.createReadStream(filePath).pipe(response);
});

server.listen(port, "127.0.0.1", () => {
  console.log("SPA server listening on http://127.0.0.1:" + port);
});
