const express = require('express')
const router = express.Router()
const {productRoutes} = require ("../routes/productRoutes")
const {userRoutes} = require ("../routes/userRoutes")


router.use("/products", productRoutes

    /*
    #swagger.tags = ['PRODUCT']
    #swagger.security = [{
    "bearerAuth":[]
    }]
    */
)
router.use("/users", userRoutes
    
    /*
    #swagger.tags = ['USER']
    */
)



module.exports = router