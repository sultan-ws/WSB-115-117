const express = require('express');
const {
    createProductCategory,
    readProductCategory
} = require('../../controllers/controller');
const fileHandle = require('../../middlewares/multer');


const productCategoryRouter = express.Router();

productCategoryRouter.post('/create-category', fileHandle('product-category'), createProductCategory);
productCategoryRouter.get('/read-categories', readProductCategory);

module.exports = productCategoryRouter;