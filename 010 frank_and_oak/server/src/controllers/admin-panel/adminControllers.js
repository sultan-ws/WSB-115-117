const Admin = require("../../models/admin");

const registerAdmin = async () => {
    try {
        const ifAdmin = await Admin.find();


        if (ifAdmin.length !== 0) return console.log(ifAdmin[0]);

        const newAdmin = new Admin({
            email: process.env.ADMIN_EMAIL,
            password: process.env.ADMIN_PASSWORD
        });

        const data = await newAdmin.save();

        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
};

const adminLogin = async (req, res) => {
    try {
        const ifAdmin = await Admin.findOne({ email: req.body.email });

        if (!ifAdmin) return res.status(403).json({ message: 'invalid email' });

        if (ifAdmin.password !== req.body.password) return res.status(401).json({ message: 'invalid password' });

        const { password, ...data } = ifAdmin._doc;

        const filepath = `${req.protocol}://${req.get('host')}/admin-panel-files/`

        res.status(200).json({ message: 'admin logged in', data, filepath });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'inyternal server error' });

    }
}

const updateAdmin = async (req, res) => {
    try {
        const data = req.body;

        if (req.files) {
            if (req.files.logo) data.logo = req.files.logo[0].filename;
            if (req.files.thumbnail) data.thumbnail = req.files.thumbnail[0].filename;
            if (req.files.favicon) data.favicon = req.files.favicon[0].filename;
            if (req.files.footer_logo) data.footer_logo = req.files.footer_logo[0].filename;
        }


        const response = await Admin.updateOne(
            req.params,
            {
                $set: data
            }
        );

        console.log(response, data);

        res.status(200).json({ message: 'success', data: response });

    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' });
    }
}

module.exports = {
    registerAdmin,
    adminLogin,
    updateAdmin
}