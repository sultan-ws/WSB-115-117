// *****admin-panel*****

// parent category controllres
const {
    createParentCategory,
    readParentCategory,
    updateParentCategoryStatus,
    deleteParentCategory,
    multiDeleteParentCategory
} = require("./admin-panel/parentCategoryControllers");

//color controllers
const { 
    createColor
 } = require("./admin-panel/colorControllers");

module.exports = {
    createParentCategory,
    readParentCategory,
    updateParentCategoryStatus,
    createColor,
    deleteParentCategory,
    multiDeleteParentCategory
}