const express = require('express');
const debug = require('debug')('app:routes');
const sequelize = require('../db');

const router = express.Router();


const {
    getAllProducts,
    getProductById,
} = require('../controllers/index');

router.get('*/products', getAllProducts);
router.get('/products/:id', getProductById);