var express = require("express");
var http = require("http");

var app = express();
var server = http.createServer(app);

var io = require("socket.io")(server);

server.listen("8088", function () {

    console.log("服务器在端口8088监听");
});

//监听socket连接
io.on("connection", function (socket) {
    console.log("有客户端连接！");

  
   
    
    //接收客户端发送的数据
    socket.on("login",function(obj){
      console.log(obj);
    //用户连接上，打招呼！（单个）发送数据给客户端
   // socket.emit("msg","登录成功！");

    //广播消息
    socket.broadcast.emit("msg","服务器在广播消息");


    })
   


});
