const Product = require("../../models/product");

const readProductsByParentCategoryWeb = async (req, res) => {
    try{
        const data = await Product.find({parent_category: req.params.id, deleted_at:null, status: true})
        .populate('parent_category')
        .populate('product_category')
        .populate('colors')
        .populate('sizes');

        const filepath = `${req.protocol}://${req.get('host')}/frank-and-oak-files/products/`;
        res.status(200).json({message:'success', data, filepath});

    }
    catch(error){
        console.error(error);
        res.status(500).json({message: "Internal Server Error"});
    }
};

const readProductsWeb = async (req, res) => {
    try{
        const data = await Product.find({deleted_at:null, status: true})
        .populate('parent_category')
        .populate('product_category')
        .populate('colors')
        .populate('sizes');

        const filepath = `${req.protocol}://${req.get('host')}/frank-and-oak-files/products/`;
        res.status(200).json({message:'success', data, filepath});
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: "Internal Server Error"});
    }
}

module.exports = {
    readProductsByParentCategoryWeb
}