const { DataTypes } = require('sequelize');

const seq = require('../db/seq')
const Role = require('./role.model')

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
  },
  user_plone: {
    type: DataTypes.BIGINT,
    allowNull: true,
    // defaultValue: 17344554455,
    comment: '用户联系电话'
  },
  user_mailbox: {
    type: DataTypes.STRING,
    allowNull: true,
    // defaultValue: '',
    comment: '用户邮箱'
  },
})

// User.sync({force: true}) // 强制同步数据库（删除再新增）

// Role.belongsTo(User, {foreignKey: 'role_id', as: 'role'})   不可这样写，单独这样写表之间关联不上
User.hasOne(Role, {foreignKey: 'role_id', as: 'role', sourceKey: 'role_id'})
// Role.belongsTo(User, {foreignKey: 'role_id', as: 'role'})
module.exports= User