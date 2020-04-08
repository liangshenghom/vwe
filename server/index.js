const session = require("express-session");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const path = require("path");

const formidableMiddleware = require('express-formidable');

const fankuiRouter = require("./api/fankui");
const loginRouter = require("./api/login");
const articleRouter= require("./api/article");
const logoutRouter=require("./api/logout");


//解决页面刷新 页面挂掉问题
var history = require('connect-history-api-fallback')

//初始化配置session cookie
app.use(cookieParser());

app.use(session({
    secret: "123456",
    cookie: { maxAge: 900000 },
    resave: true,
    saveUninitialized: false,
    rolling: true,/*只要页面在操作就不会过期，无操作5秒后过期*/
}));





// 跨域支持
app.all('*', (req, res, next) => {
  const origin = req.headers.origin;
  res.header('Access-Control-Allow-Origin', origin);
 //res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');

  next();
});

app.use(formidableMiddleware());

app.use('/', history());

app.use("/login", loginRouter);
app.use("/fankui", fankuiRouter);
app.use("/article", articleRouter);
app.use("/logout",logoutRouter);

app.use(express.static(path.join(__dirname, '../dist')))



app.listen("3000");

