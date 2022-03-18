const express = require('express');
const { usersIndex } = require('../controller/userController');

const userRoutes = express.Router();

userRoutes.get('/users', usersIndex);

module.exports = userRoutes;
