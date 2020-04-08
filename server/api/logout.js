const express = require("express");
const route = express.Router();
const session = require("express-session");

route.post("/", function (req, res) {

    req.session.destroy();  
    
    res.send("已退出登录");
});

module.exports = route;