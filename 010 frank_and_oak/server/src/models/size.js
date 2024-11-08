const mongoose = require('mongoose');

const sizeSchema = new mongoose.Schema({
    name: String,
    order:Number,
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

sizeSchema.pre('insertOne', function(){
    this.created_at = new Date();
});

sizeSchema.pre('save', function(){
    this.created_at = new Date();
});

const Size = mongoose.model('sizes', sizeSchema);

module.exports = Size;