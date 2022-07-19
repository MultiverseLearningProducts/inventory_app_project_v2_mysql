const sequelize = require('../db');
const debug = require('debug')('app:controllers');
const { validationResult } = require('express-validator');
const User = require('../models/User')

exports.getAllUsers = async (request, response) => {
    const users = await User.findAll();
    response.json(users)

}