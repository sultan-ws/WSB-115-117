const nodemailer = require('nodemailer');
const User = require('../../models/user');

const otpStore = new Map();

const genrateOtpWeb = async (req, res) => {
    try{

        const otp = Math.floor(Math.random() * 1000000);

        console.log(otp);

        otpStore.set(req.body.email, otp);

        setTimeout(()=>{
            otpStore.delete(req.body.email);
        }, 120000);

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.APP_EMAIL,
                pass: process.env.APP_PASSWORD
            }
        });

        const options = {
            from: 'no-reply@gmail.com',
            to: req.body.email,
            subject: 'OTP',
            text: `Your OTP to update email is ${otp}`
        }

        transport.sendMail(options, (error, success)=>{
            if(error) return res.status(501).json({message: 'try after some time'});

            res.status(200).json({message: 'success'});
        })

       
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'internal server error'});
    }
};

const registerUser = async (req, res) => {
    try{
       const sentOtp = otpStore.get(req.body.email);

       if(!sentOtp) return res.status(403).json({message: 'otp expired'});
       if(sentOtp !== Number(req.body.otp)) return res.status(401).json({message: 'invalid otp'});

       const dataToSave = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
       });

       const data = await dataToSave.save();

        res.status(200).json({message: 'success', data});
    }
    catch(error){
        console.log(error);
        res.status(500).json({messsage: 'internal server error'});
    }
}


module.exports = {
    genrateOtpWeb,
    registerUser
}