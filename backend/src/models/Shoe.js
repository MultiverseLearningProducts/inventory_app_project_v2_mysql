const sequelize = require('../db');
const { Sequelize } = require('sequelize');

const Shoe = sequelize.define('shoe', {
    brand_name: Sequelize.STRING,
    grid_picture_url: Sequelize.STRING,
    id: Sequelize.NUMBER,
    name: Sequelize.STRING,
    release_date: Sequelize.STRING,
    release_price_cents: Sequelize.STRING,
    silhouette: Sequelize.STRING,
    story_html: Sequelize.STRING,
});

module.exports = Shoe;