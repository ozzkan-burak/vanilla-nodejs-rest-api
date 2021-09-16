const http = require("http");
const products = require("./data/products");

const server = http.createServer((req, res)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Hello world</h1>');
  res.end();
});

PORT = process.env.PORT || 5000

server.listen(PORT, ()=>{
  console.log(`Server port üzerinde çalışıyor ${PORT}`);
});