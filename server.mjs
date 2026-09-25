import http from 'node:http';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import worker from './dist/server/index.js';
const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || '127.0.0.1';
const env = { FOOTBALL_API_KEY: process.env.FOOTBALL_API_KEY, FOOTBALL_SEASON: process.env.FOOTBALL_SEASON };
const context = { waitUntil(promise) { Promise.resolve(promise).catch(() => {}); } };
const server = http.createServer(async (incoming, outgoing) => {
  try {
    // Never forward request bodies: the local Worker exposes only GET and HEAD.
    const url = new URL('http://localhost');
    const raw = incoming.url || '/';
    const queryAt = raw.indexOf('?');
    url.pathname = queryAt < 0 ? raw : raw.slice(0, queryAt);
    url.search = queryAt < 0 ? '' : raw.slice(queryAt);
    const headers = new Headers();
    for (const [name, value] of Object.entries(incoming.headers)) {
      if (value !== undefined) headers.set(name, Array.isArray(value) ? value.join(', ') : value);
    }
    const request = new Request(url, { method: incoming.method, headers });
    const response = await worker.fetch(request, env, context);
    outgoing.writeHead(response.status, Object.fromEntries(response.headers));
    if (incoming.method === 'HEAD' || !response.body) outgoing.end();
    else await pipeline(Readable.fromWeb(response.body), outgoing);
  } catch (error) {
    console.error('HTTP request failed:', error.name);
    if (!outgoing.headersSent) outgoing.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    outgoing.end('Serviço temporariamente indisponível.');
  }
});
server.requestTimeout = 30000;
server.listen(port, host, () => console.log(`Clube FM listening on ${host}:${server.address().port}`));
for (const signal of ['SIGTERM', 'SIGINT']) process.on(signal, () => {
  server.close(() => process.exit(0));
  setTimeout(() => process.exit(1), 10000).unref();
});
