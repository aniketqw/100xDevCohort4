const express = require("express");
const path = require("path");

const app = express();
const notes = [];// - eventually we will learn about databases

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

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

app.listen(3000, function () {
  console.log("Notes app running at http://localhost:3000");
});