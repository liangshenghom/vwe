const express=require("express");
const route=express.Router();

const articleDao=require("../dao/articleDao");
const sql=require("../sql/articleSql");


route.get("/",function(req,res){

 
    articleDao.query(sql.select,[],function(err,results){
      
      //console.log(results);
      res.send(JSON.stringify(results));
    
       


    });
    


});

module.exports=route;