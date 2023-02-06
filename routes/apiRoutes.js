// Dependencies
const router = require("express").Router();
const store = require("../db/store");

// retrieve notes from db.json and display them on the page
router.get("/notes", (req, res) => {
    try {
        store.getNotes().then((notes) => res.json(notes));
        } catch (err) {
        res.status(500).json(err);
        console.log("Error retrieving notes.");
        }
});

// add a new note to db.json
router.post("/notes/:id", (req, res) => {
  try {
    store.addNote(req.body);
    res.json({ ok: true });
    }
    catch (err) {
    res.status(500).json(err);
    console.log("Error adding note.");
    }

});

//delete note
router.delete("/api/notes/:id", (req, res) => {
 store.removeNote(req.params.id)
 .then(() => res.json({ ok: true, message: "Note deleted" }))
    .catch((err) => res.status(500).json(err));
});


module.exports = router;
