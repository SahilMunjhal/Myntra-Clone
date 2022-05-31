const express=require('express');
const app=express();
app.use(express.json());
const cors = require('cors')
app.use(cors());
const connect=require('./Configs/db');

const {logIn,register}=require("./Controllers/user.controller");

const PORT=2345;

const ProductController=require('./Controllers/products.controller');


app.use("/products",ProductController);
app.post("/signup",register);
app.post("/logIn",logIn)

app.listen(PORT,async(req,res)=>{
    try {
        await connect();
        console.log(`Listening on Port ${PORT}`);      
    } catch (error) {
        console.log(error.message);
    }
});




