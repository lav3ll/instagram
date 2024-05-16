const express = require('express');
const app = express();

config = require('./config');

app.listen(
  config.port,
  console.log('Server has started on port http://localhost:%s', config.port)
);
