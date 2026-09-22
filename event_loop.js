import fs from 'fs';
setTimeout(()=>{
    console.log("setTimeout");
})
fs.readFile("into.txt", "utf-8", (err, data) => {
    setTimeout(()=>{
       console.log("setTimeout inside fs"); 
    },0)
    
    setImmediate(()=>{
    console.log("setImmediate");
})
console.log("file data read completely");
})
setInterval(()=>{   
     console.log("setInterval");
}, 1000)

