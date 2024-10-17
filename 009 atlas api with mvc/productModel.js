const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:String,
    thumbnail:String,
    images:Object,
    status:{
        type:Boolean,
        default:true
    }
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;