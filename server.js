// dependencies
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const htmlRoutes = require("./routes/htmlRoutes"); //uses htmlRoutes.js
const apiRoutes = require("./routes/api/apiRoutes"); //uses apiRoutes.js
const path = require("path");
// set up port
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


// wildcard route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// start server

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
