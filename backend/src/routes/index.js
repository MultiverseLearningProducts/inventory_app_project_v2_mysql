const express = require('express');
const debug = require('debug')('app:routes');
const sequelize = require('../db');
const Cat = require('../models/Cat');

const router = express.Router();


const {
    getAllCats,
    getCatsById,
} = require('../controllers/index');

router.get('*/cats', getAllCats);
router.get('/cats/:id', getCatsById);

module.exports = router;