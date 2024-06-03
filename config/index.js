module.exports = {
  port: process.env.PORT || 3000,
  db_host: process.env.DB_HOST || 'localhost',
  db_user: process.env.DB_USER || 'root',
  db_password: process.env.DB_PASSWORD || '',
  db_name: process.env.DB_NAME || 'instagram-db',
  secret: process.env.SECRET || 'CodingIsCool',
};
