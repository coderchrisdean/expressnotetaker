// api route

const app = require('express').Router();
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

 //save note to db.json file


    
//GET `/api/notes` - Should read the db.json file and return all saved notes as JSON.
app.get ('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
});

//POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
app.post ('/api/notes', (req, res) => {
    let db = fs.readFileSync('../db/db.json', 'utf8');
    db = JSON.parse(db);
    res.json(db);
    // create a new note
    let userNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuid(),
    };
    // push new note to db.json
    db.push(userNote);
    // write new note to db.json
    fs.writeFile('../db/db.json', JSON.stringify(db));
    // return new note to client
    res.json(userNote);
    // log new note to console
    console.log(userNote);
    // log db.json to console
    console.log(db);

});

//DELETE /api/notes/:id - receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

app.delete ('/api/notes/:id', (req, res) => {
    // read db.json file
    let db = json.parse(fs.readFileSync('../db/db.json', 'utf8'));
    // filter out note with matching id
    db = db.filter(note => note.id !== req.params.id);
    // write new db.json file
    fs.writeFile('../db/db.json', JSON.stringify(db));
    // return new db.json file

    res.json(deleteNotes);

});



module.exports = app
