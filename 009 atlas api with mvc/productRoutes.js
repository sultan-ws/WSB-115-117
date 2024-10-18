const express = require('express');
const upload = require('./multer');
const {createProduct, readProducts, updateProduct, deleteProduct} = require('./productController');

const productRoutes = express.Router();

productRoutes.post('/insert-data', upload('products'), createProduct);
productRoutes.get('/read-products', readProducts);
productRoutes.put('/update-products/:_id',upload('products'), updateProduct);
productRoutes.delete('/delete-product/:_id', deleteProduct);

module.exports = productRoutes;