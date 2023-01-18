// api route

const app = require('express').Router();
const fs = require('fs');
const path = require('path');

 //save note to db.json file


    
//GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
app.get ('/api/notes', (req, res) => {
    fs.readFile('../db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
    res.sendFile(path.join(__dirname, '../db/db.json'));
});

//POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
app.post ('/api/notes', (req, res) => {
    fs.readFile('../db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
    fs.appendFile('../db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
    res.sendFile(path.join(__dirname, '../db/db.json'));
    
});

//DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

app.delete ('/api/notes/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
});



module.exports = app
