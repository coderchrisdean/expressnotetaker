//require the express module
const express = require('express');
// assign app to express
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <form method="POST" action="/api/notes">
        <input name="text" name="noteTitle" placeholder="Note Title" required>
        <textarea name="noteText" placeholder="Note Text" required></textarea>
        <button type="submit">Save Note</button>
    </form>
    `);
});

// require the fs module
const fs = require('fs');
app.post('/notes', (req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk;
    });
    req.on('end', () => {
        const data = JSON.parse(body);
        fs.writeFile('notes.txt', `Title: ${data.noteTitle}\nText: ${data.noteText}`, (err) => {
          if (err) throw err;
          res.send('Note Saved');
        });
      });
    });

// start app on port 3000
app.listen(3000, () => {
    console.log('App listening on PORT 3000');
});

module.exports = app;