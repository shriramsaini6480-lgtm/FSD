import fs from "fs";
fs.symlink("notes.txt","link.txt",(err)=>{
    if(err){
        console.log("error occurred");
    }
})