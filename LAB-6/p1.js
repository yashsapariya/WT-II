// Create a hello world webapp using “http” core module in NodeJS.

const http = require('http');

const port = 3000;


const server = http.createServer((req, res) =>{

  res.writeHead(200, { 'Content-Type': 'text/plain' });


  res.end('Hello, World!');
});


server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
