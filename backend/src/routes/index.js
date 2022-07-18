const express = require('express');
const debug = require('debug')('app:routes');
const sequelize = require('../db');
const router = express.Router();