const express = require('express');
const { createColor, trueColors } = require('../../controllers/controller');

const colorRouter = express.Router();

colorRouter.post('/create-color', createColor);
colorRouter.get('/active-colors', trueColors);

module.exports = colorRouter;