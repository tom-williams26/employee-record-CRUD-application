require('dotenv').config();
const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.API_PORT, () => {
  console.log(
    '\x1b[35m',
    `Server running at: http://localhost:${process.env.API_PORT}/`,
    '\x1b[37m'
  );
});
