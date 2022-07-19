const sequelize = require('../db');
const { Sequelize } = require('sequelize');

const Product = sequelize.define('product', {
  title: Sequelize.STRING,
  price: Sequelize.DECIMAL,
  description: Sequelize.TEXT('long'),
  category: Sequelize.STRING,
  image: Sequelize.STRING,
});

module.exports = Product;