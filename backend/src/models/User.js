const sequelize = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    
    name: Sequelize.STRING,
    description: Sequelize.TEXT('long')

}); //Complete this!

module.exports = User;
