const express=require("express");
const route=express.Router();

route.get("/",function(req,res,next){
    
    res.send("0000");

});

module.exports=route;