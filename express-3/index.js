require('dotenv').config()
const express = require("express");
const server = express();
const productRouter = express.Router()

server.use(express.json());
server.use(express.static("public"));
server.use('/',productRouter)

const productController = require('./controller/Product')

console.log('env',process.env.DB_PASSWORD)

// CREATE POST /products     C R U D
productRouter
.post("/products", productController.createProducts)
// READ GET /product
.get("/products", productController.getAllProducts)
// READ GET /product/:id
.get("/products/:id", productController.getProduct)
// UPDATE PUT /product/:id
.put("/products/:id", productController.replaceProduct)
// UPDATE PATCH /product/:id
.patch("/products/:id", productController.updateProduct)
// DELETE DELETE /product/:id
.delete("/products/:id", productController.deleteProduct)

server.listen(8080, () => {
  console.log("server started");
});
