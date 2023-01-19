// dependencies
const express = require("express");
const db = require("./db/db.json");
const fs = require("fs");
const uuid = require("./helpers/uuid");
const app = express();
const deleteRoute = require('./routes/delete');
const api = require('./routes/api');
const html = require('./routes/html');
// set up port
const PORT = process.env.PORT || 6002;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// route files
app.use(html);
app.use(api);
app.use(deleteRoute);


// start server

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
