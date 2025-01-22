const fs = require('fs');
fs.copyFile('studentDetails.txt','copyFile.txt',(err)=>
{
    if(err)
    {
        console.log("Error:",err)
    }
    else
    {
        console.log("File copied successfully");
    }
});