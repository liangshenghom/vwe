const express=require("express");
const route=express.Router();

const fankuiDao=require("../dao/fankuiDao");
const sql=require("../sql/fankuiSql");


route.post("/",function(req,res){

 
    var contact=req.fields.contact;
    var content=req.fields.content;
   // console.log(req.fields);

    fankuiDao.query(sql.insert,[contact,content],function(err,results){
      
      // console.log(results);
    
        if(results.affectedRows){

            res.send("1");
      
        }
        else{
            res.send("0");
        }
     


    });
    


});

module.exports=route;