// Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it using http core module.

const http = require('http')
const fs = require('fs')


const serv = http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url=='/')
    {
         fs.readFile('about.txt','utf-8',(err,data)=>
        {
            if(err){
                throw err;
            }
            res.end(data) 
        })  
           
    }
    if(req.url=='/contact')
        {
             fs.readFile('contact.txt','utf-8',(err,data)=>
            {
                if(err){
                    throw err;
                }
                res.end(data) 
            })  
               
        }
})

port = 3000
serv.listen(port,()=>
{
    console.log(`Server is running at http://localhost:${port}`);
})