import http from 'http'
import fs from 'fs'
const data = fs.readFileSync("./page_not_found.html")

/*const server = http.createServer((req,res)=>{
    res.end("Welcome from server")
})

server.listen(3000,()=>{
    console.log("Sever is running.....");
})*/
const server = http.createServer((req,res)=>{
    //res.end("Welcome from the server")
    if(req.url==="/"){
        res.end("home page")
    }else if(req.url==="/contact"){
        res.end("contact page")
    }else if(req.url==="/projects"){
        res.writeHead(200,{"content-type":"text/html"})
        res.end(config)
    }else{
        res.writeHead(404,{"content-type":"text/html"})
        res.end(data)
    }
})

server.listen(3000,()=>{
    console.log("Sever is running.....");
});