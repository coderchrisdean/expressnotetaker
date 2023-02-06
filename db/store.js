//* My tutor Cody told me to copy and paste this code into this file. I did not write it.

const util = require("util");
const fs = require("fs");
const uuid = require("../helpers/uuid");
const path = require("path");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
  read() {
    return readFileAsync(path.join(__dirname, "./db.json"), "utf8");
  }
  write(note) {
    return writeFileAsync(
      path.join(__dirname, "./db.json"),
      JSON.stringify(note)
    );
  }

  addNote(note) {
    const { title, text } = note;

    if (!title || !text) {
      throw new Error("You must enter a title and text for your note.");
    }

    const newNote = { title, text, id: uuid() };

    return this.getNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => this.newNote);
  }

  getNotes() {
    return this.read().then((notes) => {
      return JSON.parse(notes) || [];
    });
  }
  removeNote() {
    let parsedNotes = JSON.parse(data);

    // loop through the notes to find the one to delete
    for (let i = 0; i < parsedNotes.length; i++) {
      if (parsedNotes[i].id === req.params.id) {
        parsedNotes.splice(i, 1);
        console.log(parsedNotes);
        break;
      }
    }
    notes = notes.filter((note) => note.id !== id);
    if (err) throw err;
    res.json(notes);
  }
}

module.exports = new Store();
