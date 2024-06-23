const express = require("express");
const router = express.Router();
const { createUser,loginUser, getUsers, getProfile } = require("../controllers/userController");
const auth = require("../middlewares/auth");

router.post("/create",createUser); 
router.post("/login", loginUser); 
router.get("/all",getUsers);
router.get("/profile",auth,getProfile)


module.exports.userRoutes = router;