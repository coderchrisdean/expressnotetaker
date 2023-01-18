// dependencies
const express = require('express');
const app = express();
const api = require('./routes/api');
const html = require('./routes/html');




// set up port
const PORT = process.env.PORT || 6002;


// set up middleware
// Middleware for parsing JSON and urlencoded form data
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// get requests

app.use('/api', api);
app.use('/', html);




// start server


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});








