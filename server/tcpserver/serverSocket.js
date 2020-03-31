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

    //用户连接上，打招呼！

    sendToSingle(socket, { event: "来自服务器", data: "你好" });

    //广播消息，通知其他用户某某某连接上聊天室

    //监听用户发的聊天内容

    //监听socket连接断开


});

//单独给用户发送消息
function sendToSingle(socket, msg){
  socket.emit("single msg",msg);
}
