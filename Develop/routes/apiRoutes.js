// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var notes = require("../db/notes.json");
const fs = require("fs");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  //--------------------------------------------------------------------------

  app.get("/api/notes", (req, res) => {
    //res.send('Get api notes called');
    //Return notes
    res.json(notes);
  });

  app.get("/api/notes/:id", (req, res) => {
      //Find the note to get
      const note = notes.find(c => c.id === parseInt(req.params.id));
      //404 for no note found
      if (!note) return res.status(404).send('This note was not found');
      
  });

  app.post('/api/notes', (req, res) => {
      console.log(notes.length);
      if (!req.body.title) res.status(404).send(`A new note is required`)
      const note = {
          id: notes.length + 1,
          title: req.body.title,
          text: req.body.text
      };
      //console.log(note);
      notes.push(note);
      //console.log(notes.length);
      fs.writeFile("./db/notes.json", JSON.stringify(notes), function (err) {
        if (err) throw err;
        console.log("Writing to json file");
        
      });
      res.send(note);
  });
  app.delete("/api/notes/:id", (req, res) => {
    //console.log("hello");
    //console.log(notes);
    //Find the note to delete
    var note = notes.find(c => c.id === parseInt(req.params.id));
    //404 for no note found
    //console.log(note);
   
    console.log(note);
    if (!note) return res.status(404).send('This note was not found');
    console.log(note);
    const index = notes.indexOf(note);
    console.log(index);
    //Remove note from selected index
    notes.splice(index,1);
    //Write to json file updated list of notes
    fs.writeFile("./db/notes.json", JSON.stringify(notes), function (err) {
        if (err) throw err;
        console.log("Deleting note from json file");
        res.end();
      });
    res.send(note);
        
});

};
