const express = require('express');
const { createProductCategory } = require('../../controllers/controller');
const fileHandle = require('../../middlewares/multer');


const productCategoryRouter = express.Router();

productCategoryRouter.post('/create-category', fileHandle('product-category') ,createProductCategory);

module.exports = productCategoryRouter;