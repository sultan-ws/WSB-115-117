// *****admin-panel*****

// parent category controllres
const {
    createParentCategory,
    readParentCategory,
    updateParentCategoryStatus
} = require("./admin-panel/parentCategoryControllers");

module.exports = {
    createParentCategory,
    readParentCategory,
    updateParentCategoryStatus
}