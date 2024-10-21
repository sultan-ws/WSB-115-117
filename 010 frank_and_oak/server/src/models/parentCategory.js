const  mongoose = require('mongoose');

const parentCategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:String,
    status:{
        type:Boolean,
        default:true
    },
    deleted_at:{
        type:Date,
        default:null
    },
    created_at:Date,
    updated_at:{
        type:Date,
        default:Date.now
    }
});

parentCategorySchema.pre('insertOne', function(){
    this.created_at = new Date();
});

parentCategorySchema.pre('save', function(){
    this.created_at = new Date();
});

const PrentCategory = mongoose.model('parent_categories', parentCategorySchema);

module.exports = PrentCategory;