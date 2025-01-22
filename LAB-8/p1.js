// Demonstrate the use of middleware in Express.

const express = require("express");
const app = express();

app.all("/student", (req,res,next)=>{
    console.log("Middleware called....");
    next();
});

app.get("/student",(req,res)=>{
    res.send("Hello Student..");
});

app.get("/api/student",(req,res)=>{
    res.send("Hello Student API")
});

app.get("/student/api",(req,res)=>{
    res.send("Hello Student API")
});

app.get("/student/id",(req,res)=>{
    res.send(req.params.id);
});

app.listen(7000,()=>{
    console.log("Server Started...")
})