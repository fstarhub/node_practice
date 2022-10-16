/*
 * @Description: 企业敏感目标
 * @Autor: fengshuai
 * @Date: 2022-10-15 14:35:41
 * @LastEditors: fengshuai
 * @LastEditTime: 2022-10-16 22:15:01
 */
const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

const CompanySensitiveTarget = seq.define('company_sensitive_target', {
  companyId: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '企业id'
  },
  targetName: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '目标名称'
  },
  sensitivityId: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '目标名称id'
  },
  centerLongitude: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '目标名称中心经度'
  },
  centerLatitudes: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '目标名称中心维度'
  },
  mglx: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '敏感目标类型'
  }
}, {
  timestamps: false,  //去除createAt updateAt
})

// CompanySensitiveTarget.sync({ force: true })

module.exports = CompanySensitiveTarget