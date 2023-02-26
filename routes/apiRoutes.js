const router = require("express").Router();
const store = require("../db/store");

// Retrieve notes from db.json and display them on the page
router.get("/notes", (req, res) => {
  store.getNotes()
    .then((notes) => {
      res.json(notes);
    })
    .catch((err) => {
      res.status(500).send("Error retrieving notes: " + err);
    });
});

// Add a new note to db.json
router.post("/notes", (req, res) => {
  const newNote = req.body;
  store.addNote(newNote)
    .then(() => {
      res.status(201).send("Note added successfully");
    })
    .catch((err) => {
      res.status(500).send("Error adding note: " + err);
    });
});



module.exports = router;