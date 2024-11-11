const express = require('express');
const { readProductsByParentCategoryWeb } = require('../../controllers/controller');

const productRouterWeb = express.Router();

productRouterWeb.get('/product-by-parent-category/:id', readProductsByParentCategoryWeb);

module.exports = productRouterWeb;