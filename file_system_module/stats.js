
/*import fs from 'fs'

fs.stat("notes.txt", (err,stats)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("Information of [notes.txt]",stats);
    console.log("Size:",stats.size);
    console.log("created time:",stats.birthtime.toISOString().split("T"));
    console.log("last modified time:",stats.mtime.toISOString());
    console.log("access time:",stats.atime.toISOString());
    console.log("change time:",stats.ctime.toISOString());

    console.log("Is this is a file:",stats.isFile());
     console.log("Is this is a directory:",stats.isDirectory());
    

});*/

/*import fs from 'fs';
function size (filename){
    const stats = fs.statSync(filename);
    const limit=2*1024*1024;
    if(stats.size>limit){
        console.log("File size is greater than 2MB");
    }
    else{
        console.log("File size is less than 2MB");
    }
   
}
size ("architecture_udaipur.txt");*/