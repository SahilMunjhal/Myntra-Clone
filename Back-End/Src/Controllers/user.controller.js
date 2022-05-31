const express=require('express');
const router=express.Router();
const jwt=require("jsonwebtoken");

const User=require("../Models/user.model");

const newtoken=(user)=>{
    return jwt.sign({user},"dummy");
}

const register=async(req,res)=>{
    try {
        let user;
        user=await User.findOne({email:req.body.email}).lean().exec();
    
        if(user){
           return res.status(400).send({status:0});
        }

       user=await User.create(req.body);

        return res.status(200).send({status:1});
       } catch (error) {
          return res.status(502).send({message:error.message});
      }   
}

const logIn=async(req,res)=>{
    try {
        let user;

        user=await User.findOne({email:req.body.email});

        if(!user)
        return res.status(500).send({status:0});
    
       const match=user.checkPassword(req.body.password);
       if(!match)
       return res.status(501).send({status:0});

       const token=newtoken(user);
       return res.status(201).send({user,token});
       } catch (error) {
          return res.status(503).send({message:error.message});
    }  
}
module.exports={register,logIn};