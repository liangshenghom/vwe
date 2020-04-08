const session = require("express-session");
const express = require("express");
const route = express.Router();

const userDao = require("../dao/userDao");
const sql = require("../sql/userSql");


route.post("/", function (req, res) {


    var username = req.fields.username;
    var password = req.fields.password;

    userDao.query(sql.select, [username], function (result) {

        if (result.length) {

            var s_password = result[0].password;

            if (s_password == password) {

                //console.log("用户名跟密码都相同");
                req.session.name = username;
                res.send(true)


            }
            else {
                res.send(false)
            }
        }
        else {
            res.send(false)
        }
    });

});


module.exports = route;