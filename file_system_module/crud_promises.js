
import fs from "fs/promises";
async function readFileContent(filename){
    const data=await fs.readFile(filename,"utf8");
    console.log(data);
}
readFileContent("notes.txt")
async function readFileContent(filename){
    const data=await fs.readFile(filename,"utf8");
    console.log(data);
}

async function writeFileMethod(filename, content){
    await fs.writeFile(filename, content);
    
}
writeFileMethod("notes.txt","hello world")
