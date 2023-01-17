// dependencies
const express = require('express');
const apiRoutes = require('./routes/api');
const htmlRoutes = require('./routes/html');
// set up express package
const app = express();

// set up port
const PORT = process.env.PORT || 6000;

// require db.json
const notes = require('./db/db.json');

// static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// start server


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

app.get('/', (req, res) => res.send(`Visit http://localhost:${PORT}/api`));






