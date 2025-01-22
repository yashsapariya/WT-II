const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const faculty_schema = require('./faculty_schema');


const alturl = "mongodb+srv://yashsapariya:yash123@cluster0.n0jwo.mongodb.net/Faculties"

mongoose.connect(alturl).then(
    () => {console.log('connected to DB server');

    const app = express();
    app.use(bodyparser.json());

    //get all
    app.get("/faculty_details",async (req,res)=>{
        const data = await faculty_schema.find();
        res.send(data);
    });

    //insert document
    app.post("/faculty", async (req,res)=>{
        const obj = faculty_schema({
            faculty_name:req.body.faculty_name,
            faculty_phoneno:req.body.faculty_phoneno,
            faculty_city: req.body.faculty_city,
        });
        const data = await obj.save();
        res.send(data);

    });

    //update Document
    app.patch("/faculty/:id", async (req,res)=>{
        let fac = await faculty_schema.findOne({_id:req.params.id});
        fac.faculty_name = req.body.faculty_name;
        fac.faculty_phoneno = req.body.faculty_phoneno;
        fac.faculty_city = req.body.faculty_city;
        const data = await fac.save();
        res.send(data);
    });


    //delete document
    app.delete("/faculty/:id", async (req,res)=>{
        const data = await faculty_schema.deleteOne({_id:req.params.id});
        res.send(data)
    });



    app.listen(5000,() => {
        console.log('server is running mode at 5000 port');
    })

});