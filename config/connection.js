//import the sequelize constructor from the library
const PORT = process.env.PORT || 3001;
const Sequalize = require('sequelize');

require('dotenv').config();
// create connction to our db
const sequelize = new Sequalize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

module.exports = sequelize;