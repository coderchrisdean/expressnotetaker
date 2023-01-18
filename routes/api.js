// api route

const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const uuid = require('../helpers/uuid');

 //save note to db.json file


    
//GET `/api/notes` - Should read the db.json file and return all saved notes as JSON.

    router.get('/api/notes', (req, res) => {
        fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
            if (err) throw err;
            res.json(JSON.parse(data));
        });
    });




//POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
router.post('/api/notes', (req, res) => {
    // read db.json file
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        if (err) throw err;
        let db = JSON.parse(data);
        // add new note to db.json file
        let userNote = db.push(req.body);
        // add unique id to note
        userNote.id = uuid();

        // write new db.json file
        db.push(userNote);
        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(db), (err) => {
            if (err) throw err;
            // return new db.json file
            res.json(db);
        });
    });
});


// ** BONUS **

router.delete ('/api/notes/:id', (req, res) => {
//read db.json file by id
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        if (err) throw err;
        let db = JSON.parse(data);
        //filter out the note with the id
        let noteIndex = db.findIndex(note => note.id === req.params.id);   
        //remove the note from the array
        db.splice(noteIndex, 1);
        //write new db.json file
        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(db), (err) => {
            if (err) throw err;
            //return new db.json file
            res.json(db);
        });
    });
});



module.exports = router
