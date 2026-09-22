const fs = require('fs');
// implement crud operation using node.js 'fs' module
//1.create a file
fs.writeFileSync("notes.txt","hello node.js")
//2.read a file
const data=fs.readFileSync("notes.txt")
console.log(data);
//3.update content of a file
fs.appendFileSync("notes.txt", " hello ECE-2")
//4.delete a file
fs.rmSync("notes.txt")
