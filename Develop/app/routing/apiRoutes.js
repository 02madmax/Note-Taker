const fs = require("fs");

module.exports = function (app) {
  // Get notes
  app.get("/api/notes", function (req, res) {
    let data = fs.readFileSync("./db/db.json", "utf8");
    res.json(JSON.parse(data));
  });

  // Create a new note
  app.post("/api/notes", function (req, res) {
    const newNote = req.body;
    let data = fs.readFileSync("./db/db.json", "utf8");
    const notesJSON = JSON.parse(data);
    notesJSON.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(notesJSON));
    res.json(notesJSON);
  });

  // Delete a note by ID
  app.delete("/api/notes/:id", function (req, res) {
    let data = fs.readFileSync("./db/db.json", "utf8");
    const notesJSON = JSON.parse(data);
    const notes = notesJSON.filter(note => note.id != req.params.id);
    fs.writeFileSync("./db/db.json", JSON.stringify(notesJSON));
    res.json(notes);
  });
};
