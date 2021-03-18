require('dotenv').config();
const express = require('express');
const mysql = require('mysql');

const router = express.Router();

// Creates a connection to a specified MySQL database with a limit of ten users able to connect.
const db = mysql.createPool({
  connectionLimit: 10,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

// Error handling for any pooling issues.
db.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.');
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.');
    }
  }
  if (connection) connection.release();
});

// Insert employee data route.
router.post('/create', (req, res) => {
  const { name, age, address, position, wage } = req.body;
  const sqlInsert =
    'INSERT INTO employees (name, age, address, position, wage) VALUES (?,?,?,?,?)';

  db.query(sqlInsert, [name, age, address, position, wage], (err, result) => {
    if (err) throw err.message;
    res.send('Employee data added...');
  });
});

router.get('/employees', (req, res) => {
  const sqlSelect = 'SELECT * FROM employees';

  db.query(sqlSelect, (err, result) => {
    if (err) throw err.message;
    res.send(result);
  });
});

module.exports = router;
