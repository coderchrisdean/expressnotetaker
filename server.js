// dependencies
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const htmlRoutes = require("./routes/apiRoutes"); //uses htmlRoutes.js
const apiRoutes = require("./routes/htmlRoutes"); //uses apiRoutes.js

// set up port
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// use routes
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

// start server

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
