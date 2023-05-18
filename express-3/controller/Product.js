const fs = require("fs");
const model = require('../model/product')
const Product = model.Product;
const ejs = require('ejs')
const path = require('path')
 
//View

exports.getAllProductsSSR = async (req, res) => {
  const products = await Product.find();
  ejs.renderFile(path.resolve(__dirname,'../pages/index.ejs'), {product:products[0]}, function(err, str){
    res.send(ejs);
});
  
}


// CREATE
  exports.createProduct = (req, res) => {
    const product = new Product(req.body);
    product.save()
    res.json(req.body);
  }
  
  exports.getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
  }
  
  exports.getProduct = async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.json(product);
  }
  exports.replaceProduct = async (req, res) => {
    const id = req.params.id;
    try{
      const doc = await Product.findOneAndReplace({_id:id},req.body)
      res.status(201).json(doc);
    } catch(err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
  exports.updateProduct = async (req, res) => {
    const id = req.params.id;
    try{
      const doc = await Product.findOneAndUpdate({_id:id},req.body)
      res.status(201).json(doc);
    } catch(err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
  exports.deleteProduct = async (req, res) => {
    const id = req.params.id;
    try{
      const doc = await Product.findOneAndDelete({_id:id})
      res.status(201).json(doc);
    } catch(err) {
      console.log(err);
      res.status(400).json(err);
    }
  }