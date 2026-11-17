const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Voting System API is running\n");
    return;
  }

  if (req.url === "/api/health" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(
      JSON.stringify({
        status: "ok",
        service: "voting-system",
        timestamp: new Date().toISOString(),
      })
    );

    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found\n");
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// const http = require('http');
// const dotenv = require('dotenv');

// dotenv.config();

// const PORT = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {

//   if (req.url === '/' && req.method === 'GET') {

//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello, World!\n');

//   } else if (req.url === '/api/health' && req.method === 'GET') {

//     res.writeHead(200, { 'Content-Type': 'application/json' });

//     res.end(JSON.stringify({
//       status: 'ok',
//       time: new Date().toISOString()
//     }));

//   } else if (req.url.startsWith('/api/user')) {

//     // INTENTIONAL VULNERABILITY: XSS testing for CodeQL
//     // User input is inserted into HTML without sanitization.

//     const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);
//     const userInput = parsedUrl.searchParams.get('name') || 'Guest';

//     res.writeHead(200, { 'Content-Type': 'text/html' });

//     // Vulnerable sink: untrusted input is directly inserted into HTML.
//     res.end(`hello message
//       // <html>
//       //   <body>
//       //     <h1>Hello ${userInput}</h1>
//       //   </body>
//       // </html>
//     `);

//   } else {

//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Not Found\n');

//   }
// });

// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
