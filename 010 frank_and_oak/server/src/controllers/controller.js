// *****admin-panel*****

// parent category controllres
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
    activeParentCategories
} = require("./admin-panel/parentCategoryControllers");

//color controllers
const {
    createColor,
    trueColors
} = require("./admin-panel/colorControllers");

// product category controllers 
const {
    createProductCategory,
    readProductCategory
} = require("./admin-panel/productCategoryController");

// admin controllers
const {
     registerAdmin,
     adminLogin,
     updateAdmin,
     genrateOtp,
     updateAdminEmail
    } = require("./admin-panel/adminControllers");

const { activeSizes } = require("./admin-panel/sizeControllers");
const { createProduct } = require("./admin-panel/productControllers");

//website controllres

//parent category
const { 
    activeParentCategoriesWeb
 } = require("./website/parentCategoryConyrollers");
const { readProductsByParentCategoryWeb } = require("./website/productControllers");
const { createCart, readCart } = require("./website/cartControllers");
const { genrateOtpWeb, registerUser } = require("./website/userControllers");




module.exports = {
    createParentCategory,
    readParentCategory,
    updateParentCategoryStatus,
    createColor,
    deleteParentCategory,
    multiDeleteParentCategory,
    parentCategoryById,
    updateParentCategory,
    deletedParentCategory,
    restoreParentCategory,
    activeParentCategories,
    createProductCategory,
    readProductCategory,
    registerAdmin,
    adminLogin,
    updateAdmin,
    genrateOtp,
    updateAdminEmail,
    activeSizes,
    trueColors,
    createProduct,
    activeParentCategoriesWeb,
    readProductsByParentCategoryWeb,
    createCart,
    genrateOtpWeb,
    registerUser,
    readCart
}