const express = require("express");
const route = express.Router();

route.get("/", function (req, res) {

    res.send("退出登录路由");
});

module.exports = route;