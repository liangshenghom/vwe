# vwe
vue webapck  express 全站项目
npm i i --save-dev (-D)
--save-dev -D一样的效果

# 本地仓库与github 远程仓库 合并的出现问题的解决办法：

1.本地安装vue  vue-cli
vue init webpack app
安装好vue+webapck 项目后

git init 初始化github本地仓库

git remote add origin "远程仓库地址"  将远程仓库关联到本地origin仓库

git pull origin master 拉去远程仓库origin/master分支合并到本地仓库
(可能用到的命令 git pull --rebase origin master)

最后 git push -u origin master   推送到远程仓库

再最后 添加 git add .  想需要提交的代码到暂存区
提交暂存区代码 正式提交 到本地仓库 git commit -m "描述"

git push 推送到远程GitHub仓库master 分支 成功

可能会提示输入登录名 密码 依次填入



# 引入scss错误原因是因为 引入的sass-loader 版本太高
npm install node-sass --save-dev 		//安装node-sass 
npm install sass-loader --save-dev 		//安装sass-loader 
npm install style-loader --save-dev 		//安装style-loader
sass-loader改为：
npm install sass-loader@7.3.1 --save-dev

# mysql server 出现vsrunrime.dll缺失的情况 用微软常用库 集合 修复
# mysqld -remove mysql  卸载mysql服务


# vue数组赋值
在请求执行成功后执行回调函数中的内容，回调函数处于其它函数的内部this不会与任何对象绑定，为undefined。

解决方案：

一）将指向vue对象的this赋值给外部方法定义的属性，然后在内部方法中使用该属性
 var that=this;
    axios
      .get("http://localhost:3000/user/")
      .then(function(res) {
        console.log(res.data);
        that.articles=res.data
        
      })
      .catch(function(err) {
        console.log(err);
      });
二）使用箭头函数
    axios
      .get("http://localhost:3000/user/")
      .then((res) =>{
        console.log(res.data);
        that.articles=res.data
        
      })
      .catch(function(err) {
        console.log(err);
      });
# nvm 列出所有可安装nodejs 版本
windows ：nvm ls available
其他 nvm ls-remote

 
