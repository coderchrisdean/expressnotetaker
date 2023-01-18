// dependencies
const express = require('express');
const path = require('path');
const app = express();
const api = require('./routes/api');
const html = require('./routes/html');

const uuid = require('./helpers/uuid');


// set up port
const PORT = process.env.PORT || 6002;


// set up middleware
// Middleware for parsing JSON and urlencoded form data
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// get requests

//get db.json file from db folder through api.js
api(app);
//get notes.html file from public folder through html.js
html(app);



// start server


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});








