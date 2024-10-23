const express = require('express');
const { createColor } = require('../../controllers/controller');

const colorRouter = express.Router();

colorRouter.post('/create-color', createColor);

module.exports = colorRouter;