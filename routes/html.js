//html router
// const express = require('express');
// const path = require('path');
// const router = express.Router();
//
// // GET `/notes` - Should return the `notes.html` file.

const html = require('express').Router();

app.get ('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'));
});
app.post ('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'));
});

module.exports = html;