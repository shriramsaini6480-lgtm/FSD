/*import fs from"fs"
//crete a directory
fs.mkdir("./myfolder1/myfolder2/myfolder3",(err)=>{
    if(err){
        console.log("Error occurred while creating directory");
        return;
    }
    console.log("Directory created successfully");
});
//crete a file inside the directory
fs.writeFile("./myfolder1/script.js","hello ",(err)=>{
    if(err){
        console.log("Error occurred while creating file");
        return;
    }
    console.log("File created successfully");
});
fs.readdir("./myfolder1/",(err,data)=>{
    if(err){
        console.log("Error ");
        return;
    }
    console.log("File read successfully :",data);
    
});*/

import fs from "fs";

// Create directories
fs.mkdir("./myfolder1/myfolder2/myfolder3", { recursive: true }, (err) => {

    if (err) {
        console.log("Error occurred while creating directory");
        return;
    }

    console.log("Directory created successfully");

    // Create a file inside myfolder1
    fs.writeFile("./myfolder1/script.js", "hello", (err) => {

        if (err) {
            console.log("Error occurred while creating file");
            return;
        }

        console.log("File created successfully");

        // Read directory
        fs.readdir("./myfolder1", (err, data) => {

            if (err) {
                console.log("Error occurred while reading directory");
                return;
            }

            console.log("Files inside myfolder1:", data);
        });
    });
});

