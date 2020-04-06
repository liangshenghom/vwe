const express=require("express");
const app=express();
const path=require("path");

const formidableMiddleware = require('express-formidable');
const userRouter=require("./api/user");
const fankuiRouter=require("./api/fankui");
//const socketRouter=require("./tcpserver/serverSocket");
//解决页面刷新 页面挂掉问题
var history = require('connect-history-api-fallback')
 


// 跨域支持
app.all('*', (req, res, next) => {
    const origin = req.headers.origin;
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
  
    next();
  });

  
  app.use(formidableMiddleware());
  
  app.use('/',history());
  app.use("/user",userRouter);
  app.use("/fankui",fankuiRouter);
  //app.use("/online",socketRouter);
  app.use(express.static(path.join(__dirname, '../dist')))

 

  app.listen("3000");

