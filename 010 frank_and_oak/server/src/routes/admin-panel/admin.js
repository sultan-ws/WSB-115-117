const express = require('express');
const { adminLogin, updateAdmin, genrateOtp, updateAdminEmail } = require('../../controllers/controller');
const multer = require('multer');
const fileHandle = require('../../middlewares/multer');

const adminRouter = express.Router();

adminRouter.post('/login', multer().none(), adminLogin);
adminRouter.put('/update-admin/:_id',fileHandle('admin'), updateAdmin);
adminRouter.post('/genrate-otp', genrateOtp);
adminRouter.put('/update-email', updateAdminEmail);

module.exports = adminRouter;