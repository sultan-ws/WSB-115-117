const mongoose = require('mongoose');

const url = 'mongodb+srv://sultankhan:sj1XtNfoMKK1If1T@sultan.luvya.mongodb.net/test_117_115?retryWrites=true&w=majority&appName=sultan';

mongoose.connect(url)
.then(()=>{
    console.log('connected to database');
})
.catch((err)=>{
    console.log(err);
});