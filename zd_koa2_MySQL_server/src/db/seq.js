const { Sequelize } = require('sequelize') // sequelize数据库驱动程序

const { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PWD, MYSQL_DB } = require('../config/config.default')

// 方法 3: 分别传递参数 (其它数据库)
const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
  dialect: 'mysql' /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
});

// seq.authenticate().then(() => {
//   console.log('连接成功')
// }).catch((err) => {
//   console.log(err, 'eeee')
// })

module.exports = seq