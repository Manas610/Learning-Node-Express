const express = require('express');

const router = express.Router()

const productController = require('../controller/Product')



// CREATE POST /products     C R U D
router
.post("/", productController.createProduct)
// READ GET /product
.get("/ssr", productController.getAllProductsSSR)
.get("/", productController.getAllProducts)
// READ GET /product/:id
.get("/:id", productController.getProduct)
// UPDATE PUT /product/:id
.put("/:id", productController.replaceProduct)
// UPDATE PATCH /product/:id
.patch("/:id", productController.updateProduct)
// DELETE DELETE /product/:id
.delete("/:id", productController.deleteProduct)


exports.router = router;