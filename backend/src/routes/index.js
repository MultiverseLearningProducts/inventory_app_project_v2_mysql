const express = require('express');
const debug = require('debug')('app:routes');
const sequelize = require('../db');
const router = express.Router();
const User = require('../models/User')

const {getAllUsers} = require('../controllers/index')

router.get('/users/', getAllUsers)

module.exports = router