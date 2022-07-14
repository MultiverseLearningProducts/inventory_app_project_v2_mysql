const sequelize = require('../db');
const Product = require('../models/Product');
const debug = require('debug')('app:controllers');
const { validationResult } = require('express-validator');

/**
 * @desc Gets all products
 * @route GET /api/products
 * @access Public
 */
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();

    if (!products) {
      res.status(400).json({
        success: false,
        message: 'No products found',
      });
    } else {
      res
        .status(200)
        .json({ products, success: true, message: 'All products returned' });
    }
  } catch (error) {
    debug(error);
    res
      .status(400)
      .json({ success: false, message: ` - Error: ${error.message}` });
  }
};

/**
 * @desc Get single product by id
 * @route GET api/products/:id
 * @access Public
 */
exports.getProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findByPk(productId);

    if (!product) {
      res.status(400).json({
        success: false,
        message: 'Product not found - check the product ID',
      });
    } else {
      res.status(200).json({
        product,
        success: true,
        message: 'Product returned successfully',
      });
    }
  } catch (error) {
    debug(error);
    res.status(400).json({
      success: false,
      message: `Product not found - Error: ${error.message}`,
    });
  }
};

/**
 * @desc Delete single product by id
 * @route DELETE api/products/delete/:id
 * @access Private
 */
exports.deleteProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    const productToDelete = await Product.findByPk(productId);
    const deletedProduct = await productToDelete.destroy();

    res.status(200).json({
      deletedProduct,
      success: true,
      message: 'Product successfully deleted',
    });
  } catch (error) {
    debug('Error: ', error);
    res.status(400).json({
      success: false,
      message: `Unable to delete - Error: ${error.message}`,
    });
  }
};

/**
 * @desc Create single product
 * @route POST api/products/create
 * @access Private
 */
exports.createProduct = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ success: false, error: errors.array() });
  } else {
    try {
      const newProduct = req.body;
      const createdProduct = await Product.create(newProduct); //added to db
      res.status(200).json({
        createdProduct,
        success: true,
        message: 'Product successfully created',
      });
    } catch (error) {
      debug(error);
      res.status(400).json({
        success: false,
        message: `Product not created - Error: ${error.message}`,
      });
    }
  }
};

/**
 * @desc Update single product by ID
 * @route PUT api/products/update/:id
 * @access Private
 */
exports.updateProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ success: false, error: errors.array() });
  } else {
    const productId = req.params.id;
    const updates = req.body;

    try {
      const productToUpdate = await Product.findByPk(productId); //getting product to update

      const updatedProduct = await productToUpdate.update(updates);

      res.status(200).json({
        updatedProduct,
        success: true,
        message: 'Product updated successfully!',
      });
    } catch (error) {
      debug(error);
      res.status(400).json({
        success: false,
        message: `Unable to update - Error: ${error.message}`,
      });
    }
  }
};

/**
 * @desc Search for text in all product titles
 * @route GET api/products/search/
 * @access Private
 */

exports.searchForTitle = async (req, res) => {
  try {
    const allProducts = await Product.findAll();

    if (!allProducts || !req.query.title) {
      res.status(400).json({
        success: false,
        message: `Unable to find product title from input`,
      });
    } else {
      const titleSearched = req.query.title.toLowerCase();
      const productsFound = allProducts.filter((product) =>
        product.title.toLowerCase().includes(titleSearched)
      );

      res.status(200).json({
        success: true,
        productsFound,
        message:
          productsFound.length > 0
            ? `Product with title of '${titleSearched}' found`
            : 'No title matches',
      });
    }
  } catch (error) {
    debug(error);
    res.status(400).json({
      success: false,
      message: `Unable to search - Error: ${error.message}`,
    });
  }
};
