const express = require("express");

const app =express();

const notes=[];// this is bad 

//POST CREATE A NOTES - eventually we will learn about databases
app.post("/notes", function(req,res){
    const notes = req.body.note;
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

app.listen(3000);