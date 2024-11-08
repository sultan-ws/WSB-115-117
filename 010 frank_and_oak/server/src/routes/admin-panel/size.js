const express = require('express');
const { activeSizes } = require('../../controllers/controller');

const sizeRouter = express.Router();

sizeRouter.get('/active-sizes', activeSizes);

module.exports = sizeRouter;