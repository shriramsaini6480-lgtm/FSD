const fs=require("fs");
//1.create a file
fs.writeFile("notes.txt","FS module started",(err)=>{
    if(err){
        console.error("Error occurred while creating file");
        return;
    }
        console.log("File created successfully");
    
});
//2.read a file
fs.readFile("notes.txt",(err,data)=>{
    if(err){
        console.log("Error occurred while reading file");
        return;
    }
    console.log("File content:", data);
});
//3.update content of a file
fs.appendFile("notes.txt"," hello ECE-2",(err)=>{
    if(err){
        console.log("Error occurred while updating file");
        return;
    }
    console.log("File updated successfully");
});
//4.delete a file
//fs.rm("notes.txt",(err)=>{
    //if(err){
    //    console.log("Error occurred while deleting file");
    //    return;
    //}
    //console.log("File deleted successfully");
//});