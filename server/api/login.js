const session = require("express-session");
const express = require("express");
const route = express.Router();

const userDao = require("../dao/userDao");
const sql = require("../sql/userSql");


route.post("/", function (req, res) {

     var res_msg=[{code:"",name:""}];
    var username = req.fields.username;
    var password = req.fields.password;

    userDao.query(sql.select, [username], function (result) {

        if (result.length) {

            var s_password = result[0].password;

            if (s_password == password) {

                //console.log("用户名跟密码都相同");
                req.session.name = username;
                res_msg[0].code=1;
                res_msg[0].name=username;
                res.send(res_msg)


            }
            else {
                res_msg[0].code=0;
                res.send(res_msg)
            }
        }
        else {
            res_msg[0].code=0;
            res.send(res_msg)
        }
    });

});


module.exports = route;