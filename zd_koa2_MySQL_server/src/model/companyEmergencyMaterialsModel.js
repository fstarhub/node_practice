/*
 * @Description: 企业应急材料
 * @Autor: fengshuai
 * @Date: 2022-10-15 14:35:41
 * @LastEditors: fengshuai
 * @LastEditTime: 2022-10-16 22:13:52
 */
const seq = require('../db/seq')
const { DataTypes } = require('sequelize')

const CompanyEmergencyMaterials = seq.define('company_emergency_materials', {
  suppliesName: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '应急物资名称'
  },
  companyId: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '企业id'
  },
  suppliesId: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '应急物资对应编码'
  },
  suppliesType: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '所属类型'
  },
  suppliesCount: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '数量'
  },
  suppliesPlace: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '存放位置'
  },
  cbk: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '是否有应急物资储备库'
  },
}, {
  timestamps: false,  //去除createAt updateAt
  tableName: 'company_mergency_aterials'
})

// CompanyEmergencyMaterials.sync({force: true})

module.exports = CompanyEmergencyMaterials