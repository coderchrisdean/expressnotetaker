//moved from server.js

// ** BONUS **
// DELETE ROUTE for a note /api/notes/:id should receive a query containing the id of a note to delete.
// require router
const router = require("express").Router();
const fs = require('fs');



router.delete("/api/notes/:id", (req, res) => {
    // Log that a DELETE request was received
    console.info(`${req.method} request received to delete a note`);

    // Reading notes from db.json
    const db = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    // Deleting note with given id
    const deleteNotes = db.filter(note => note.id !== req.params.id);
    // Writing updated notes back to db.json
    fs.writeFile("./db/db.json", JSON.stringify(deleteNotes), (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Failed to delete note" });
        } else {
            console.info("Successfully deleted note and updated database!");
            res.json(deleteNotes);
        }
    });
});

module.exports = router;