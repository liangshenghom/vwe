# vwe
vue webapck  express 全站项目
npm i i --save-dev (-D)
--save-dev -D一样的效果

本地仓库与github 远程仓库 合并的出现问题的解决办法：

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



#引入scss错误原因是因为 引入的sass-loader 版本太高
npm install node-sass --save-dev 		//安装node-sass 
npm install sass-loader --save-dev 		//安装sass-loader 
npm install style-loader --save-dev 		//安装style-loader
sass-loader改为：
npm install sass-loader@7.3.1 --save-dev

 
