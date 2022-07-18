const { Sequelize } = require('sequelize');
const path = require('path');
const debug = require('debug')('app:sequelize'); //debug package

const sequelize = new Sequelize('sneakers', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
