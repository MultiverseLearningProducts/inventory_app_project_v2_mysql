const sequelize = require('../db');
const { Sequelize } = require('sequelize');

const User = sequelize.define('user', {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    job_title: Sequelize.STRING,
    profile_pic: Sequelize.STRING,
    location: Sequelize.STRING,
    avatar: Sequelize.STRING,
}); 

module.exports = User;