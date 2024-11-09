const Product = require("../../models/product");

const createProduct = async (req, res) => {
    try{
        const data = req.body;

        if(typeof(data.sizes) === 'string') data.sizes = [data.sizes];
        if(typeof(data.colors) === 'string') data.colors = [data.colors];

        if(req.files){
            if(req.files.thumbnail) data.thumbnail = req.files.thumbnail[0].filename;

            if(req.files.animate_thumbnail) data.animate_thumbnail = req.files.animate_thumbnail[0].filename;

            if(req.files.gallery) data.gallery = req.files.gallery.map((img)=> img.filename);
        }

        const dataToSave = new Product(data);
        const response = await dataToSave.save();

        res.status(200).json({message: "success", data: response});
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: "Internal Server Error"});
    }
};

module.exports = {
    createProduct
}