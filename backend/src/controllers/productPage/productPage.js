const sequelize = require("../../db");
const { Product } = require("../../models/Products");
const debug = require("debug")("app:controllers");
const { validationResult } = require("express-validator");

/**
 *
 * @desc Gets Product By id
 * @route GEt api/product/:id
 */


exports.getProductByID = async (req,res) => {
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
 *
 * @desc updates Product By id
 * @route Put api/product/update/:id
 */

exports.updateProduct = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ success: false, error: errors.array() });
    } else {
      const productId = req.params.id;
      const updates = req.body;
  
      try {
        const productToUpdate = await Product.findByPk(productId);
  
        const updatedProduct = await productToUpdate.update(updates);
  
        res.status(200).json({
          updatedProduct,
          success: true,
          message: "Product updated successfully!",
        });
      } catch (error) {
        debug(error);
        res.status(400).json({
          success: false,
          message: `Unable to update product - Error: ${error.message}`,
        });
      }
    }
  };

/**
 * @desc Delete single user by id
 * @route DELETE api/product/delete/:id
 * 
 */

  exports.deleteUsertById = async (req, res) => {
    const productId = req.params.id;
  
    try {
      const productToDelete = await Product.findByPk(productId);
      const deleteProduct = await productToDelete.destroy();
  
      res.status(200).json({
        deleteProduct,
        success: true,
        message: "Product successfully deleted",
      });
    } catch (error) {
      debug("Error: ", error);
      res.status(400).json({
        success: false,
        message: `Unable to delete product - Error: ${error.message}`,
      });
    }
  };