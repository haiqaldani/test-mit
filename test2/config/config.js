const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  development: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: process.env.TYPE_DATABASE,
    // port: process.env.PORT,
    // "dialectModule": tedious
  },
  test: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: process.env.TYPE_DATABASE,
    connectionTimeout: 60000,
    // port: process.env.PORT,
    // "dialectModule": tedious
  },
  production: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: process.env.TYPE_DATABASE,
    connectionTimeout: 60000,
    // port: process.env.PORT,
    // "dialectModule": tedious
  },
};
