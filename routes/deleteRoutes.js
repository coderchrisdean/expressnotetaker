
const router = require("express").Router();
const fs = require("fs");


router.delete("/notes/:id", (req, res) => {
  const notes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
  const filteredNotes = notes.filter((note) => note.id !== Number(req.params.id));
  fs.writeFileSync("./db/db.json", JSON.stringify(filteredNotes));
  res.json(filteredNotes);
});


module.exports = router;