// This file handles the routing for the html pages
//dependencies

const app = require('express').Router();
const path = require('path');

//GET notes.html file

app.get ('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

//wildcard route to serve index.html
app.get ('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

//export app
module.exports = app;