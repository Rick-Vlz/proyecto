const express = require("express");
const productRoute = express.Router();
const AsynHandler = require("express-async-handler");
const Product = require("../models/Product");

productRoute.get("/", AsynHandler(async(req,res)=>{
    const products = await Product.find({});
    res.json(products);
}));

productRoute.get("/:id", AsynHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if(product){
        res.json(product);
    }else{
        res.status(404);
        throw new Error("NOT FOUND");
    }
}));

module.exports = productRoute;