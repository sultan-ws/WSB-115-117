const express = require('express');
const { createCart } = require('../../controllers/controller');

const cartRouter = express.Router();
cartRouter.post('/create-cart', createCart);

module.exports = cartRouter;