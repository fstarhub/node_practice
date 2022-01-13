// 1.连接数据库
const seq = require('../db/seq')
const { DataTypes } = require('sequelize')

const Goods = require('../model/goods.model')

// 2.定义数据模型
const Cart = seq.define('Carts', {
  goods_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    require: true,
    comment: '商品编号'
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '用户id'
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
    comment: '数量'
  },
  selected: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    comment: '是否选中'
  }
},{
  tableName: 'zd_carts'
})

// Cart.sync({ force: true })

Cart.belongsTo(Goods, { foreignKey: 'goods_id', as: 'goods_info'})

module.exports = Cart