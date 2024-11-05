const Admin = require("../../models/admin");

const registerAdmin = async ()=>{
    try{
        const ifAdmin = await Admin.find();


        if(ifAdmin.length !== 0) return console.log(ifAdmin[0]);

        const newAdmin = new Admin({
            email: process.env.ADMIN_EMAIL,
            password: process.env.ADMIN_PASSWORD
        });

        const data = await newAdmin.save();

        console.log(data);
    }
    catch(error){
        console.log(error);
    }
};

const adminLogin = async (req, res) => {
    try{
        const ifAdmin = await Admin.findOne({email: req.body.email});

        if(!ifAdmin) return res.status(403).json({message: 'invalid email'});

        if(ifAdmin.password !== req.body.password) return res.status(401).json({message: 'invalid password'});

        const {password, ...data} = ifAdmin._doc;

        res.status(200).json({message: 'admin logged in', data});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'inyternal server error'});

    }
}

module.exports = {
    registerAdmin,
    adminLogin
}