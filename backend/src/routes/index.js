const express = require('express');
const debug = require('debug')('app:routes');

const sequelize = require('../db');
const Product = require('../models/Product');

const { check } = require('express-validator');

const router = express.Router();

const {
  getAllProducts,
  getProductById,
  deleteProductById,
  createProduct,
  updateProduct,
  searchForTitle,
} = require('../controllers/index');

router.get('*/products', getAllProducts);
router.get('/products/search', searchForTitle);
router.get('/products/:id', getProductById);
router.delete('/products/:id', deleteProductById);
router.post(
  '/products',
  [
    check('title').not().isEmpty().trim(),
    check('description').not().isEmpty().trim(),
    check('description').not().isEmpty().trim(),
    check('price').custom((value) => value > 0),
    check('image').not().isEmpty().trim(),
  ],
  createProduct
);
router.put(
  '/products/:id',
  [
    check('title').not().isEmpty().trim(),
    check('description').not().isEmpty().trim(),
    check('description').not().isEmpty().trim(),
    check('price').custom((value) => value > 0),
    check('image').not().isEmpty().trim(),
  ],
  updateProduct
);

module.exports = router;
