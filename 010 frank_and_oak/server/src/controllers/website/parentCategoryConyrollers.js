const ProductCatgory = require('../../models/productCategory');
const ParentCategory = require('./../../models/parentCategory');

const activeParentCategoriesWeb = async (req, res) => {
    try{
        const response = await ParentCategory.find({deleted_at: null, status: true});

        const data = await Promise.all(
            response.map(async (category) => {
                const productCategories = await ProductCatgory.find({parent_category: category._id});
                // console.log(productCategories);
                // category['subCategories'] = productCategories;
                return {...category._doc, subCategories : productCategories};
            })
        );
        
        console.log(data);

        res.status(200).json({message: 'success', data});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'internal server error'});
    }
};

module.exports = {
    activeParentCategoriesWeb
}