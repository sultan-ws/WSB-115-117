const ProductCatgory = require("../../models/productCategory");

const createProductCategory = async (req, res) => {
    try{
        const data = req.body;

        if(req.files){
            if(req.files.thumbnail) data.thumbnail = req.files.thumbnail[0].filename;
        }

        const dataToSave = new ProductCatgory(data);

        const response = dataToSave.save();

        res.status(200).json({message: 'success', data: response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'error'});
    }
};

module.exports = {
    createProductCategory
}