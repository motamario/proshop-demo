
import express from "express";
const router = express.Router();
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

router.get('/', asyncHandler(async (req, res) =>{
    const products = await Product.find({})
    res.json(products);
}))

//route for a single product
//find goes through the products, and if the product id matchces the id in the url, then it returns that product.
router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if(product){
        return res.json(product);
    }
    res.status(404).json({ message: 'Product not found' })
}));

export default router; 