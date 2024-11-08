const express = require('express');
const {
    createProductCategory,
    readProductCategory
} = require('../../controllers/controller');
const fileHandle = require('../../middlewares/multer');
const { activeProductCategoryByParent } = require('../../controllers/admin-panel/productCategoryController');


const productCategoryRouter = express.Router();

productCategoryRouter.post('/create-category', fileHandle('product-category'), createProductCategory);
productCategoryRouter.get('/read-categories', readProductCategory);
productCategoryRouter.get('/true-categories-by-parent/:id', activeProductCategoryByParent);

module.exports = productCategoryRouter;