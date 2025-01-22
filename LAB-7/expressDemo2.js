const express = require('express');
const app = express();
app.get('/home',(req,res)=>{
    res.send("Welcome To Home Page")
});
app.get('/about',(req,res)=>{
    res.send("Welcome To About us Page")
});
app.get('/contact',(req,res)=>{
    res.send("Welcome To Contact us Page")
});
app.get('/',(req,res)=>{
    res.send("Hello World From My Own Server")
});
app.get('',(req,res)=>{
    res.send("Invalid URL!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
});
app.listen(3000,(req,res)=>
{
    console.log("Server Started At Port 3000")
});