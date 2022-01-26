const { DataTypes } = require('sequelize');

const seq = require('../db/seq')

// 创建模型(model: zd_user->zc_users)
const User = seq.define('zd_user', {
  // ...属性
  // id会被sequelize自动创建
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: "用户名：唯一"
  },
  password: {
    type: DataTypes.CHAR,
    allowNull: false,
    comment: '密码'
  },
  visiblePassword: {
    type: DataTypes.CHAR,
    allowNull: false,
    comment: '加密前的密码'
  },
  is_admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    comment: '0：是普通用户(默认)，1：是管理员'
  },
  role_id: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '账号角色id'
  }
})

// User.sync({force: true}) // 强制同步数据库（删除再新增）

module.exports= User