const path = require('path');
const fs = require('fs');
const util = require('util');
const db = './db/db.json';




module.exports = (app) => {
    // get /api/notes should read the db.json file and return all saved notes as JSON
    app.get('/api/notes', (req, res) => {
        // Log our request to the terminal
        console.info(`${req.method} request received to get notes`);

        // Sending all notes to the client
        res.sendFile(path.join(__dirname, db));
    });
    // post /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client
    app.post'/api/notes', (req, res) => {
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
            fs.readFile(db, 'utf8', (err, data) => {
                if (err) {
                    console.error(err);
                } else {
                    //parse JSON string to object
                    const parsedNotes = JSON.parse(data);

                    //add new note to existing notes
                    parsedNotes.push(newNote);

                    //write updated notes back to db.json
                    fs.writeFile(db, JSON.stringify(parsedNotes, null, 4), (err) =>
                        err ? console.error(err) : console.info('Successfully updated notes!')
                    );
                }
            });
        
    }
}
}

