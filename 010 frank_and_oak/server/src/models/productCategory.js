const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    thumbnail:String,
    description:String,
    parent_category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'parent_categories'
    },
    status:{
        type:Boolean,
        default:true
    },
    slug:{
        type:String,
    },
    featured:{
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

categorySchema.pre('insertOne', function(){
    this.created_at = new Date();
});

categorySchema.pre('save', function(){
    this.created_at = new Date();
});

const ProductCatgory = mongoose.model('product_categories', categorySchema);

module.exports = ProductCatgory;