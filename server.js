// dependencies
const express = require('express');
const path = require('path');
const app = express();



// set up port
const PORT = process.env.PORT || 6001;

// get requests
// * 
// GET `/notes` - Should return the `notes.html` file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// ↓ need help from cody not working ↓
// ** ask cody about proper set up for file directories
// ** ask cody about why notes.html is not loading on click
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
// start server


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});








