// dependencies
const express = require('express');
const path = require('path');
const app = express();


// set up port
const PORT = process.env.PORT || 6002;

// get requests
// * 
// GET `/notes` - Should return the `notes.html` file.

// ↓ need help from cody not working ↓
// ** from cody: look into router to see if possible fix
// ** ask cody about heroku
app.get ('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// routes
app.get ('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'));
});
app.post ('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'));
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});


// start server


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});








