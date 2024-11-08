const express = require('express');
const parentCategoryRouter = require('./admin-panel/parentCategory');
const colorRouter = require('./admin-panel/color');
const productCategoryRouter = require('./admin-panel/productCategory');
const adminRouter = require('./admin-panel/admin');
const sizeRouter = require('./admin-panel/size');

const adminPanelRouter = express.Router();
const websiteRouter = express.Router();
const appRouter = express.Router();

adminPanelRouter.use('/parent-category', parentCategoryRouter);
adminPanelRouter.use('/color', colorRouter);
adminPanelRouter.use('/product-category', productCategoryRouter);
adminPanelRouter.use('/admin', adminRouter);
adminPanelRouter.use('/size', sizeRouter);

module.exports = {
    adminPanelRouter,
    websiteRouter,
    appRouter
}

