const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    title: {type: String, required:true , unique:true} ,
    description: String,
    price: {type: Number , min:[0,'Wrong Price']},
    discountPercentage: {type: Number , min:[0,'Wrong Discount'] , max:[50,'Wrong Discount']},
    rating: {type: Number , min:[0,'Wrong Rating'] , max:[5,'Wrong Rating']},
    stock: Number,
    brand: {type: String, required:true},
    category: {type: String, required:true},
    thumbnail: {type: String, required:true},
    images: [ String ]
  });
  
  exports.Product = mongoose.model('Product', productSchema);

  