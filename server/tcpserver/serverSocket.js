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
  console.log("有客户端连接！", socket.id);

  //接收客户端发送的数据,并发送欢迎消息！
  socket.on("hello", function (obj) {
    console.log(obj);
    //用户连接上，打招呼！（单个）发送数据给客户端
    switch (obj) {
      case "1":
        socket.emit("welcome", "1234567890");
        break;
      case "A":
        socket.emit("welcome", "ABCDEFG");
        break;
      default:

        socket.emit("welcome", "欢迎！");

    }


    //广播消息
    //socket.broadcast.emit("data", "服务器在广播消息");

    //用户断开连接
    socket.on("disconnect", function () {
      console.log("用户断开连接", socket.id);
    });



  })


});
