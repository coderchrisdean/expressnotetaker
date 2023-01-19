// dependencies
const express = require('express');
const app = express();
const db = require('./db/db.json');
const fs = require('fs');
// const api = require('./routes/api');
// const html = require('./routes/html');
// set up port
const PORT = process.env.PORT || 6002;


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// html
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET request for ALL notes
app.get('/api/notes', (req, res) => {
    // Log our request to the terminal
    console.info(`${req.method} request received to get notes`);
  
    // Sending all reviews to the client
    return res.status(200).json(db);
  });

  // POST ROUTE for a new note
app.post("/api/notes", (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to add a note`);

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
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            } else {
                //parse JSON string to object
                const parsedNotes = JSON.parse(data);

                //add new note to existing notes
                parsedNotes.push(newNote);

                //write updated notes back to db.json
                fs.writeFile('./db/db.json', JSON.stringify(parsedNotes, null, 4), (err) =>
                    err ? console.error(err) : console.info('Successfully updated notes!')
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
});





// start server


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});








