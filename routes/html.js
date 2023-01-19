//moved from server.js
const path = require("path");
const router = require("express").Router();


    // HTML GET Requests
    //  the user is shown an HTML page of content
    
    router.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // Wildcard route
    router.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

   

    module.exports = router;
