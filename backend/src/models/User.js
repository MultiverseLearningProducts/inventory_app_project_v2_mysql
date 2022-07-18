const sequelize = require('../db');
const { Sequelize } = require('sequelize');

const User = sequelize.define('user', {}); //Complete this!

module.exports = User;
