const express = require('express');
const parentCategoryRouter = require('./admin-panel/parentCategory');
const colorRouter = require('./admin-panel/color');

const adminPanelRouter = express.Router();
const websiteRouter = express.Router();
const appRouter = express.Router();

adminPanelRouter.use('/parent-category', parentCategoryRouter);
adminPanelRouter.use('/color', colorRouter);

module.exports = {
    adminPanelRouter,
    websiteRouter,
    appRouter
}

