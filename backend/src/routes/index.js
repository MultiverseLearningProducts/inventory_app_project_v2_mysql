const express = require('express');
const debug = require('debug')('app:routes');
const sequelize = require('../db');
const router = express.Router();
const User = require('../models/User')

const {
    getAllUsers,
    getUserById,
    createUser,
    deleteUserById
} = require('../controllers/index')

router.get('/users/', getAllUsers)
router.get('/users/:id', getUserById)
router.post('/users/', createUser)
router.delete('/users/:id', deleteUserById)

module.exports = router