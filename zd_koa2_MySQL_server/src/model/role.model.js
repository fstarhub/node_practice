const seq = require('../db/seq')
const { DataTypes} = require('sequelize')

const Role = seq.define('zd_role', {
  role_id: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '用户角色id'
  },
  role_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '用户角色名称'
  },
  role_menus: {
    type: DataTypes.STRING,
    allowNull: true,
    get() {
      return this.getDataValue('role_menus').split(',')
    },
    set(val) {
      return this.setDataValue('role_menus', val.join(','))
    },
    comment: '角色菜单权限'
  }
})

// Role.sync({force: true}) // 强制同步数据库（删除再新增）

module.exports = Role
