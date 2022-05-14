const express=require('express');
const router=express.Router();
const Product=require('../Models/products.model');

router.post('/',async(req,res)=>{
    try {
        const product=await Product.create(req.body);
        console.log(product);
        return res.status(200).send(product);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.get('/',async(req,res)=>{
    if(req.query.category)
    req.query.category=req.query.category.split(",");
    try {
         let products;
         let filters={};
         if(req.query.type!="")
         filters.type=req.query.type;
         if(req.query.country!="")
         filters.country=req.query.country;
         if(req.query.size!="")
         filters.size=req.query.size;
         if(req.query.category.length!=0)
         filters.category=req.query.category;
         console.log("123",filters);
         products=await Product.find(filters).lean().exec();
          

        return res.status(201).send(products);
    } catch (error) {
        return res.status(501).send(error.message);
    }
});

router.get('/:id',async(req,res)=>{
    try {
        const product=await Product.find({_id:req.params.id}).lean().exec();
        return res.status(202).send(product);
    } catch (error) {
        return res.status(502).send(error.message);
    }
});

module.exports=router;