<!--
 * @Description: 服务介绍与说明
 * @Autor: fengshuai
 * @Date: 2022-01-13 10:09:00
 * @LastEditors: fengshuai
 * @LastEditTime: 2022-01-13 10:23:05
-->
## 服务使用说明：
当前服务使用koa2 + Mysql + sequelize驱动程序驱动MySQL数据库，简单模拟购物商城后台管理系统

  1.  进去到文件根目录：`cd zd_koa2_MySQL_server`
  2. 下载所有依赖：`npm install`
  3. 启动服务：`nodemon start`

**注意:** 
1. 首次使用项目请先进入src>model文件下，打开`model.sync({force:true})`注释，使用node命令执行各个model文件，进行数据库表的初始化，然后再注释掉。
2. 需自行修改使用的数据库的地址与密码，可在.env文件中修改。

  