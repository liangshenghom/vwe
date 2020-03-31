const express=require("express");
const app=express();

const formidableMiddleware = require('express-formidable');
const userRouter=require("./api/user");
const fankuiRouter=require("./api/fankui");
//const socketRouter=require("./tcpserver/serverSocket");


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
  

  app.use("/user",userRouter);
  app.use("/fankui",fankuiRouter);
  //app.use("/online",socketRouter);
 

 

  app.listen("3000");

