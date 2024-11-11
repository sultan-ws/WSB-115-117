const express = require('express');
const { activeParentCategoriesWeb } = require('../../controllers/controller');

const parentCategoryRouterWeb = express.Router();

parentCategoryRouterWeb.get('/active-category', activeParentCategoriesWeb);

module.exports = {
    parentCategoryRouterWeb
}