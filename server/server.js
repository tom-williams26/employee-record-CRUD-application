require('dotenv').config();
const express = require('express');
const cors = require('cors');
const database = require('./routes/database');

// Variables
const app = express();
const port = process.env.API_PORT || 5000;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// For all of the routes, use the routes specified in the routes module

app.use('/database', database);

app.get('/', (req, res) => {
  // Handle root...
});
// Server listening...
app.listen(port, () => {
  console.log(
    '\x1b[35m',
    `Server running at: http://localhost:${process.env.API_PORT}/`,
    '\x1b[37m'
  );
});
