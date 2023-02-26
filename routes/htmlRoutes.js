const path = require("path");
const router = require("express").Router();

// html

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// notes should return the notes.html file.
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// wildcard route
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});


   

module.exports = router;
