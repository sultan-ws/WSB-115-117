const express = require('express');
const { createProduct } = require('../../controllers/controller');
const fileHandle = require('../../middlewares/multer');

const productRouter = express.Router();

productRouter.post('/add-product', fileHandle('products') ,createProduct);

module.exports = productRouter;