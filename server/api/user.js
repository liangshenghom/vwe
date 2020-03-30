const express=require("express");
const route=express.Router();
const userDao=require("../dao/userDao");
const sql=require("../sql/userSql");


route.get("/",function(req,res,next){

    userDao.query(sql.select,[],function(err,rows){

        res.send(rows);

    });
    

});

module.exports=route;