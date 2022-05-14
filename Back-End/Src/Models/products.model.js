const mongoose  = require('mongoose');

const ProductSchema=new mongoose.Schema({
    title:{type:String,required:true},
    brand:{type:String,required:true},
    price:{type:Number},
    mrpPrice:{type:Number},
    type:{type:String},
    category:{type:String},
    title:{type:String,},
    size:{type:String},
    title:{type:String},
    country:{type:String},
    discount:{type:Number},
    rating:{type:String},
    url:{type:String,required:true},
    url1:{type:String},
    url2:{type:String},
    url3:{type:String},
    url4:{type:String},
});


module.exports=mongoose.model('products',ProductSchema);