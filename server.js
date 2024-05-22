const express = require('express');

const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

config = require('./config');

const db = require('./config/database');

app.listen(
  config.port,
  console.log('Server has started on port http://localhost:%s', config.port)
);
