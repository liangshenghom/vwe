const mysql = require("mysql");
const dbconfig = require("../dbconfig/mysql.db.config");
//根据mysql配置创建mysql数据库连接池
var pool = mysql.createPool(dbconfig.mysql);
//console.log(pool);
//查询函数
function query(sql, values, callback) {

    pool.getConnection(function (err, con) {
        con.query(sql, values, function (err, results, fields) {

            //console.log(results);

            //每次查询都会回调
            callback(err, results);

            //只是释放连接 在缓存池中，没有被销毁
            con.release();

            if (err) throw error;




        });

    });


}

exports.query=query


