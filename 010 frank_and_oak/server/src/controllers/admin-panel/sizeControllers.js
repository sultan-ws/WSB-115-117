const Size = require("../../models/size");

const createSize = async (req, res) => {
    try {
        const dataTosave = new Size(req.body);
        const data = await dataTosave.save();
        res.status(200).json({message: 'success', data})

    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'internal server error' });
    }
};

const activeSizes = async (req, res) => {
    try{
        const data = await Size.find({status: true, deleted_at: null});
        res.status(200).json({message: 'success', data});
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'internal server error' });
    }
}

module.exports = {
    createSize,
    activeSizes
};
