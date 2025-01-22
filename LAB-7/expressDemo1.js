const express = require('express');
const app = express(); 
app.get('/student',(req,res)=>
{
    res.send("Hello World From Express Server With Get Method");
});
app.post('/student',(req,res)=>
{
        res.send("Hello World From Express Server With Post Method");
});
app.put('/student',(req,res)=>
{
        res.send("Hello World From Express Server With Put Method");
});
app.delete('/student',(req,res)=>
{
        res.send("Hello World From Express Server With Delete Method");
});
app.listen(3000,()=>
{
    console.log("Server Started At Port 3000")
});