const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description:String,
    short_description:String,
    thumbnail:String,
    animate_thumbnail:String,
    gallery:Object,
    price:Number,
    mrp:Number,
    parent_category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'parent_categories'
    },
    product_category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product_categories'
    },
    stock:{
        type:Boolean,
        default:true
    },
    brand:String,
    sizes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'sizes'
    }],
    colors:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'colors'
    }],
    status:{
        type:Boolean,
        default:true
    },
    created_at:{
        type:Date,
    },
    updated_at:{
        type:Date,
        default:Date.now
    },
    deleted_at:{
        type:Date,
        default:null
    }
});

productSchema.pre('save', function(){
    this.created_at = Date.now();
});

productSchema.pre('insertOne', function(){
    this.created_at = Date.now();
});

productSchema.pre('insertMany', function(){
    this.created_at = Date.now();
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;