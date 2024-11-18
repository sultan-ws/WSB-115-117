const express = require('express');
const multer = require('multer');

const {
    createParentCategory,
    readParentCategory,
    updateParentCategoryStatus,
    deleteParentCategory,
    multiDeleteParentCategory,
    parentCategoryById,
    updateParentCategory,
    deletedParentCategory,
    restoreParentCategory,
    activeParentCategories,
    serachParentCategory
} = require('../../controllers/controller');

const parentCategoryRouter = express.Router();

parentCategoryRouter.use(multer().none());

parentCategoryRouter.post('/create-category', createParentCategory);
parentCategoryRouter.get('/read-category', readParentCategory);
parentCategoryRouter.put('/update-status/:_id', updateParentCategoryStatus);
parentCategoryRouter.put('/delete-category/:_id', deleteParentCategory);
parentCategoryRouter.put('/delete-multiple-categories', multiDeleteParentCategory);
parentCategoryRouter.get('/read-category/:_id', parentCategoryById);
parentCategoryRouter.put('/update-category/:_id', updateParentCategory);
parentCategoryRouter.get('/deleted-categories', deletedParentCategory);
parentCategoryRouter.put('/restore-category/:_id', restoreParentCategory);
parentCategoryRouter.get('/active-categories', activeParentCategories);
parentCategoryRouter.get('/search-category/:query', serachParentCategory);

module.exports = parentCategoryRouter;