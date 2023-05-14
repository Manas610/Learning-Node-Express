require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const server = express();
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')

//db connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log('database connected')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const productSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  brand: String,
  category: String,
  thumbnail: String,
  images: [ String ]
});

const Product = mongoose.model('Product', productSchema);



//body pareser
server.use(express.json());
server.use(express.static(process.env.PUBLIC_DIR));
server.use('/products',productRouter.router)
server.use('/users',userRouter.router)

// console.log('env',process.env.DB_PASSWORD)

server.listen(process.env.PORT, () => {
  console.log("server started");
});
