// Dependencies
const router = require("express").Router();
const store = require("../helpers/store");

// retrieve notes from db.json and display them on the page
router.get("/notes", (req, res) => {
    store.getNotes()
        .then((notes) => res.json(notes))
        .catch((err) => res.status(500).json(err));
})

// add a new note to db.json
router.post("/notes", (req, res) => {
    store.addNote()
        .then((note) => res.json(note))
        .catch((err) => res.status(500).json(err));
})

// delete a note from db.json
router.delete("/notes/:id", (req, res) => {
    store.removeNote()
        .then(() => res.json({ ok: true }))
        .catch((err) => res.status(500).json(err));
})


    module.exports = router;
    
