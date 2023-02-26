
const router = require("express").Router();
const uuid = require("../../helpers/uuid");
const fs = require("fs");
const db = require("../../db/db.json");

// read notes
router.get("/notes", (req, res) => {
  res.json(db);
});

// add notes
router.post("/notes", (req, res) => {
  const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuid(),
  };
  db.push(newNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(db));
  res.json(newNote);
});

module.exports = router;
