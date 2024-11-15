const Cart = require("../../models/cart");

const createCart = async(req, res) => {
    try{

        const olddata = await Cart.findOne({
            user: req.body.user,
            product: req.body.product,
            size: req.body.size,
            color: req.body.color
        });

        if(olddata){
           const data = await Cart.updateOne(
            {_id: olddata._id},
            {
                $set:{
                    quantity : olddata.quantity + 1
                }
            }
           );

           console.log(data);
           res.status(200).json({message:'success', data});
            return;
        }
        const dataToSave = new Cart(req.body);
        const data = await dataToSave.save();
        console.log(data);
        res.status(200).json({message:'success', data});
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:'internal server error'});
    }
};

const readCart = async (req, res) => {
    try{
        const data = await Cart.find(req.params)
        .populate('product')
        .populate('user')
        .populate('size')
        .populate('color');

        const filepath = `${req.protocol}://${req.get('host')}/frank-and-oak-files/products/`;
        res.status(200).json({message:'success', data, filepath});
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: 'internal server error'});
    }
};

const updateCart = async (req, res) => {
    try{
        const data = await Cart.updateOne(
            req.params,
            {
                $set:{
                    quantity : req.body.quantity
                }
            }
        );

        res.status(200).json({message:'success'});
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: 'internal server error'});
    }
}

const deleteCart = async (req, res) => {
    try{
        const data = await Cart.deleteOne(req.params);

        res.status(200).json({message:'success'});
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: 'internal server error'});
    }
}

module.exports = {
    createCart,
    readCart,
    updateCart,
    deleteCart
}