const express = require('express');
const debug = require('debug')('app:routes');
const sequelize = require('../db');
const Cat = require('../models/Cat');

const router = express.Router();


const {
    getAllCats,
    getCatsById,
    updateCatById,
    deleteCatsById,
    createCat
} = require('../controllers/index');

router.get('*/cats', getAllCats);
router.get('/cats/:id', getCatsById);
router.post('*/cats', createCat);
router.put('/cats/:id', updateCatById);
router.delete('/cats/:id', deleteCatsById);

module.exports = router;