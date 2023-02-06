
// Dependencies
const path = require("path");
const fs = require("fs");
const db = require("../db/db.json");
const uuid = require("../helpers/uuid");
const router = require("express").Router();


// GET request for ALL notes
router.get("/api/notes", (req, res) => {
    // Log our request to the terminal
    console.info(`${req.method} request received to get notes`);
 
  
       //obtain existing notes
       fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) {
          console.error(err);
        } else {
            
          //parse JSON string to object
          const parsedNotes = JSON.parse(data);
  
          //add new note to existing notes
          parsedNotes.push(newNote);
  
          //write updated notes back to db.json
          fs.writeFile(
            "./db/db.json",
            JSON.stringify(parsedNotes, null, 4),
            (err) =>
              err
                ? console.error(err)
                : console.info("Successfully updated notes!")
          );
        }
             // Read the db.json file
      return res.status(200).json(db);
  });
});
  
  // POST ROUTE for a new note
router.post("/api/notes", (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to add a note`);
    console.log(req.body);
  
    // If all the required properties are present
    if (req.body.title && req.body.text) {
      // Variable for the object we will save
      const { title, text } = req.body;
  
      // Variable for the object we will save
      const newNote = {
        title,
        text,
        note_id: uuid(),
      };
  
      //obtain existing notes
      fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) {
          console.error(err);
        } else {

          //parse JSON string to object
          const parsedNotes = JSON.parse(data);
  
          //add new note to existing notes
          parsedNotes.push(newNote);
  
          //write updated notes back to db.json
          fs.writeFile(
            "./db/db.json",
            JSON.stringify(parsedNotes, null, 4),
            (err) =>
              err
                ? console.error(err)
                : console.info("Successfully updated notes!")
          );
        }
      
        
        
      });
     // send response back to client
      // console.log(response);
      res.status(201).json("Note added.")
    } else {
      res.status(500).json("Error in posting note");
  
  
   
    }
  
    
    
  });
  
  //** BONUS **
  // DELETE ROUTE for a note
router.delete("/api/notes/:id", (req, res) => {
    // Log that a DELETE request was received
    console.info(`${req.method} request received to delete a note`);
  
    //obtain existing notes from db.json
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error reading notes from file" });
      }
      //parse JSON string to object
      let parsedNotes = JSON.parse(data);
  
      // loop through the notes to find the one to delete
      for (let i = 0; i < parsedNotes.length; i++) {
        if (parsedNotes[i].id === req.params.id) {
          parsedNotes.splice(i, 1);
          console.log(parsedNotes);
          break;
        }
  
        //delete note with given id
        parsedNotes = parsedNotes.filter(
          (note) => note.note_id !== req.params.id
        );
        
      }
      //write updated notes back to db.json
      fs.writeFile(
        "./db/db.json",
        JSON.stringify(parsedNotes, null, 4),
        (err) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: "Error writing notes to file" });
          }
          console.info("Successfully updated notes.");
          return res.status(200).json({ message: "Note deleted successfully" });
        }
      );
    });
  });

module.exports = router;
  

// module.exports = (app) => {
//   // get /api/notes should read the db.json file and return all saved notes as JSON
//   app.get("/api/notes", (req, res) => {
//     // Log our request to the terminal
//     console.info(`${req.method} request received to get notes`);
//   });

//   // Sending all notes to the client
//   res.sendFile(path.join(__dirname, db));

//   // post /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client
//   app.post("/api/notes", (req, res) => {
//     // Log that a POST request was received
//     console.info(`${req.method} request received to add a note`);

//     // If all the required properties are present
//     if (req.body.title && req.body.text) {
//       // Variable for the object we will save
//       const { title, text } = req.body;

//       // Variable for the object we will save
//       const newNote = {
//         title,
//         text,
//         note_id: uuid(),
//       };

//       //obtain existing notes
//       fs.readFile("../db/db.json", "utf8", (err, data) => {
//         if (err) {
//           console.error(err);
//         } else {
//           //parse JSON string to object
//           let parsedNotes = JSON.parse(data);

//           //add new note to existing notes
//           parsedNotes.push(newNote);

//           //write updated notes back to db.json
//           fs.writeFile(
//             "../db/db.json",
//             JSON.stringify(parsedNotes, null, 4),
//             (err) => {
//               if (err) {
//                 console.error(err);
//               } else {
//                 res.json(newNote);
//               }
//             }
//           );
//         }
//       });
//     } else {
//       // Send an error if required properties are not present
//       res.status(400).json({ error: "title and text are required" });
//     }
//   });
// };
