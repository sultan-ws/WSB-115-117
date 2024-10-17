const express = require('express');
const upload = require('./multer');
const {createProduct, readProducts} = require('./productController');

const productRoutes = express.Router();

productRoutes.post('/insert-data', upload('products'), createProduct);
productRoutes.get('/read-products', readProducts);

module.exports = productRoutes;