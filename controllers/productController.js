const Product=require('../models/product');

exports.addProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    if (!name || !description || !price) {
      return res.status(400).json({
        success: false,
        error: 'Please provide all the fields',
      });
    }

    const userId = req.user.id; // Extract the user ID from the request
    const product = await Product.create({ name, description, price, userId });

    res.status(201).json({
      success: true,
      product: product,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getProducts=async(req,res)=>{
    try{
        const products=await Product.findAll({
            where:{
                userId:req.user.id,
            }
        });
        res.status(200).json({
            success:true,
            count:products.length,
            products
        })
    }catch(error){
        res.status(400).json({
            success:false,
            error:error.message
        })
    }
}
exports.updateProduct=async(req,res)=>{
    try{
        const {name,description,price}=req.body;
        const product=await Product.findByIdAndUpdate(req.params.id,{name,description,price},{new:true,runValidators:true});
        res.status(200).json({
            success:true,
            product
        })
    }catch(error){
        res.status(400).json({
            success:false,
            error:error.message
        })
    }
}

exports.deleteProduct=async(req,res)=>{
    try{
        const product=await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success:true,
            product
        })
    }catch(error){   
        res.status(400).json({
            success:false,
            error:error.message
        })
    }

}

exports.getProductById=async(req,res)=>{
    try {
        
        const product  = await Product.findByPk(req.params.id);
        res.status(200).send({product})
    } catch (error) {
        console.log(error);
        
    }

}