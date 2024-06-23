const express = require("express");
const router = express.Router();

const{addProduct,getProducts: getProduct,updateProduct,deleteProduct,getProductById} = require("../controllers/productController");
const auth = require("../middlewares/auth");
router.post("/",auth,addProduct)
router.put("/:id",auth,updateProduct)
router.get("/",auth,getProduct)
router.delete("/:id",auth,deleteProduct)
router.get("/:id",auth,getProductById)

module.exports.productRoutes = router;