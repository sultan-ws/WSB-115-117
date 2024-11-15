const express = require('express');
const { createCart, readCart, updateCart, deleteCart } = require('../../controllers/controller');

const cartRouter = express.Router();
cartRouter.post('/create-cart', createCart);
cartRouter.get('/read-cart/:user', readCart);
cartRouter.put('/update-cart/:_id', updateCart);
cartRouter.delete('/delete-cart/:_id', deleteCart)

module.exports = cartRouter;