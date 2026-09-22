const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.method==="GET" && req.url==="/"){
        res.end("home page")
    }
    else if(req.method==="GET" && req.url==="/contact"){
        res.end("contact page")
    }
    else{
        res.writeHead(404,{"content-type":"text/html"})
        res.end("Page not found")
    }
})
server.listen(3000,()=>{
    console.log("Sever is running.....");
}) 