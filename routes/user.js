const path = require("path");
const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();

router.post("/add-user", userController.postAddUser);

router.post("/login", userController.postLogin);
module.exports = router;
