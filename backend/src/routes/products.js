const express = require('express');
const {Product} = require("../models/Products")
const sequelize = require("../db");


const { validationResult } = require('express-validator');
const { check } = require('express-validator');

const router = express.Router();
const {
    getProductByID,
     updateProduct,
    deleteProductById,
} = require("../controllers/products");

router.get("/product/:id", getProductByID);
router.put("/product/update/:id", [
    check("title").not().isEmpty().trim(),
    check("price").not().isEmpty().trim(),
    check("description").not().isEmpty().trim(),
    check("category").not().isEmpty().trim(),
    check("image").not().isEmpty().trim(),
],updateProduct );
router.delete("/product/delete/:id",deleteProductById);

module.exports = router;