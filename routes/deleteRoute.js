const router = require("express").Router();
//delete note
router.delete("/notes/:id", (req, res) => {
removeNote(req, res); {
  store
    .getNotes()
    .then((notes) => {
      const filteredNotes = notes.filter((note) => note.id !== req.params.id);
      store.write(filteredNotes);
      res.json(filteredNotes);
    })
    .catch((err) => {
      res.status(500).send("Error deleting note: " + err);
    });
  }
});
  module.exports = router;