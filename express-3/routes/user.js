const express = require('express');

const router = express.Router()

const userController = require('../controller/user')


// CREATE POST /products     C R U D
router
.post("/", userController.createUser)
// READ GET /product
.get("/", userController.getAllUsers)
// READ GET /product/:id
.get("/:id", userController.getUser)
// UPDATE PUT /product/:id
.put("/:id", userController.replaceUser)
// UPDATE PATCH /product/:id
.patch("/:id", userController.updateUser)
// DELETE DELETE /product/:id
.delete("/:id", userController.deleteUser)

exports.router = router;