const mysql = require('mysql2/promise');
const config = require('./index');

async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: config.db_host,
      user: config.db_user,
      password: config.db_password,
      database: config.db_name,
    });
    console.log('Connected to the MySQL database');
    return connection;
  } catch (err) {
    console.error('An error has occurred', err);
  }
}

const db = connectToDatabase();

module.exports = db;
