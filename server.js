const http = require("http");
const {getProducts} = require("./controllers/productController");


const server = http.createServer((req, res)=>{
  if(req.url === '/api/products' && req.method === 'GET'){
    getProducts(req, res);
  } else {
    res.writeHead(404,{"Content-Type": "application/json"});
    res.end(JSON.stringify({"message": "Page not found" }));
  }
});

PORT = process.env.PORT || 5000

server.listen(PORT, ()=>{
  console.log(`Server port üzerinde çalışıyor ${PORT}`);
});