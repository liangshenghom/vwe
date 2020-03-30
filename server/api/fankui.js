const express=require("express");
const route=express.Router();
//const fankuiDao=require("../dao/fankuiDao");
//const sql=require("../sql/fankuiSql");


route.post("/",function(req,res,next){

    console.log(req.params);

    /* fankuiDao.query(sql.insert,[],function(err,rows){

        res.send(rows);

    });
     */


});

module.exports=route;