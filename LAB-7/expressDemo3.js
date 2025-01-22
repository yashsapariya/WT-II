const express = require('express');
const fs = require('fs');
const aboutusdata = fs.readFileSync("about.txt","utf-8");
const registration = fs.readFileSync("f1.html","utf-8");
const homedata = fs.readFileSync("home.txt","utf-8");

const app = express();
app.get('/aboutus',(req,res)=>
{
    res.statusCode=200; 
    res.statusMessage="aboutusdata"
    res.send(aboutusdata);
});

app.get('/registration',(req,res)=>
{
    res.statusCode=200; 
    res.statusMessage="registration"
    res.send(registration);
});

app.get('/registration/studentregistration',(req,res)=>
{
    res.statusCode=200; 
    res.statusMessage="studentregistration"
    res.send(registration);
});
app.get('/',(req,res)=>
{
    res.statusCode=200; 
    res.statusMessage="homedata"
    res.send(homedata);
});
app.listen(3000,(req,res)=>
{
    console.log("Server Started At Port 3000")
})