// GET request for ALL notes
const router = require("express").Router();
const fs = require("fs");
const db = require("../db/db.json");
const uuid = require("../helpers/uuid");


router.get("/api/notes", (req, res) => {
    // Log our request to the terminal
    console.info(`${req.method} request received to get notes`);
  
    // Sending all notes to the client
    return res.status(200).json(db);
  });
  
  // POST ROUTE for a new note
  router.post("/api/notes", (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to add a note`);
  
    // If all the required properties are present
    if (req.body.title && req.body.text) {
      // Variable for the object we will save
      const { title, text } = req.body;
  
      // Variable for the object we will save
      const newNote = {
        note_id: uuid(),
        title,
        text,
      };
  
      //obtain existing notes
        fs.readFile(db, "utf8", (err, data) => {
     if (err) {
          console.error(err);
        } else {
          //parse JSON string to object
          const parsedNotes = JSON.parse(data);
  
          //add new note to existing notes
          parsedNotes.push(newNote);
  
          //write updated notes back to db.json
          fs.writeFile(
            db,
            JSON.stringify(parsedNotes, null, 4),
            (err) =>
              err
                ? console.error(err)
                : console.info("Successfully updated notes.")
          );
        }
      });
  
      // readAndAppend(newNote, db);
  
      const response = {
        status: "success",
        body: newNote,
      };
  
      console.log(response);
      res.json(response);
    }
  
    // display saved notes
    router.get("/api/notes", (req, res) => {
      // Log our request to the terminal
      console.info(`${req.method} request received to get notes`);
  
      // load notes from db.json
      let db = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
      // Sending all notes to load on the page
      return res.status(200).json(db);
    });
  });
  module.exports = router;
