const express = require("express");
const path = require("path");

const app = express();
const notes = [];// - eventually we will learn about databases


//POST CREATE A NOTES 
app.post("/notes", function(req,res){

    const note = req.body.note;

    
    notes.push(note);

    res.json({
        message:"Done!"
    })
});


// GET - all of the notes
app.get("/notes", function(req,res){
    res.json(
        {
            notes
        })
})

app.get("/",function(req,res){// frontend endpoint server the html at port 3000
    res.sendFile("/Users/aniketsaxena/Documents/p/p0/dump/webDev/100xDevCohort4/WebDev/9/project/classNoteMaking/frontend/index.html");
});

app.listen(3000, function () {
  console.log("Notes app running at http://localhost:3000");
});

