const Color = require("../../models/color");

const createColor = async (req, res) =>{
    try{
        const data = new Color(req.body);
        const response = await data.save();
        res.status(200).json({message: 'success', data: response});
    }
    catch(error){
        console.log(error)
        res.status(500).json({message: 'internal server error'});
    }
};

const trueColors = async (req, res) => {
    try{
        const data = await Color.find({deleted_at: null, status: true});
        res.status(200).json({message: 'success', data});
    }
    catch(error){
        console.log(error)
        res.status(500).json({message: 'internal server error'});
    }
}

module.exports ={
    createColor,
    trueColors
}