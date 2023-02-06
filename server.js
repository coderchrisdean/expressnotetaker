// dependencies
const express = require("express");

const app = express();

// set up routes

const htmlRoutes = require('./routes/htmlRoutes'); //uses htmlRoutes.js
const apiRoutes = require('./routes/apiRoutes'); //uses apiRoutes.js
// set up port
const PORT = process.env.PORT || 6002;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


// start server

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
