const HTTP = require("http");

const server = HTTP.createServer((req, res)=>{
 res.end("<h1>Hello World</h1>")
});

server.listen(3000);
