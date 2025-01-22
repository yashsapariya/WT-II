// Create a webapp with 5 pages like about, contact etc.. using “http” core module in NodeJS.

const http = require('http');
const { Body } = require('p2');

const port = 3000;


const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  if(req.url == '/')
    {
        res.end("This is Home page");
    }
  else if(req.url == '/about')
    {
        res.end("This is About page");
    }
  else if(req.url == '/contact')
    {
        res.end("This is Contact page");
    }
  else if(req.url == '/services')
    {
        res.end("This is Services page");
    }
  else if(req.url == '/portfolio')
    {
        res.end("This is Portfolio page");
    }
  else if(req.url == '/blog')
    {
        res.end("This is Blog page");
    }
  else
  {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
