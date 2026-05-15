import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve } from 'node:path';

const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || '127.0.0.1';
const ROOT = resolve('.');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.json': 'application/json; charset=utf-8'
};

function resolveRequestPath(url) {
  const pathname = decodeURIComponent(new URL(url, `http://localhost:${PORT}`).pathname);
  const safePath = normalize(pathname).replace(/^(\.\.[/\\])+/, '');
  const requestedPath = resolve(join(ROOT, safePath));

  if (!requestedPath.startsWith(ROOT)) {
    return null;
  }

  return requestedPath;
}

async function sendFile(req, res, filePath) {
  let fileStats = await stat(filePath);

  if (fileStats.isDirectory()) {
    filePath = join(filePath, 'index.html');
    fileStats = await stat(filePath);
  }

  if (!fileStats.isFile()) {
    throw Object.assign(new Error('Not a file'), { code: 'ENOENT' });
  }

  res.writeHead(200, {
    'Content-Type': MIME_TYPES[extname(filePath)] || 'application/octet-stream',
    'Content-Length': fileStats.size
  });

  if (req.method === 'HEAD') {
    res.end();
    return;
  }

  createReadStream(filePath).pipe(res);
}

const server = createServer(async (req, res) => {
  if (!['GET', 'HEAD'].includes(req.method)) {
    res.writeHead(405, { Allow: 'GET, HEAD' });
    res.end('Method Not Allowed');
    return;
  }

  const requestPath = resolveRequestPath(req.url);

  if (!requestPath) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  const filePath = requestPath.endsWith('/') ? join(requestPath, 'index.html') : requestPath;

  try {
    await sendFile(req, res, filePath);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not Found');
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Gator Path running at http://${HOST}:${PORT}`);
});
