const express = require('express')
const db = require('../src/db')
const User = require('../src/models/User');

const router = express.Router();

router.get('/inventory', (req, res) => {
    res.send('Good Job.')
})
/*
exports.getAllProducts = async (req, res) => {
    const products = await User.findAll;
    res.status(200).json({products, success: true, message: "All producrs returned"})
} */
module.exports = router