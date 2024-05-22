const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const config = require('./config');
const db = require('./config/database');

const app = express();
app.use(cors());

app.use(express.json());

app.get('/some-endpoint', async (req, res) => {
  try {
    const connection = await db;
    const [rows] = await connection.query('SELECT * FROM some_table');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.listen(config.port, () =>
  console.log('Server has started on http://localhost:%s', config.port)
);
