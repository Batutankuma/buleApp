const sequelize = require('sequelize');

const database = new sequelize('boule','root','',{
    dialect:'mysql'
});

module.exports = database;