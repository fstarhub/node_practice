const seq = require('../db/seq')
const { DataTypes } = require('sequelize')

const CompanyRiskSource = seq.define('company_risk_source', {
  companygoodsname: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '原(辅)料名称'
  },
  cId: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '企业id'
  },
  chemName: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '化学品名称'
  },
  chemId: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '化学品id'
  },
  chemCas: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'CAS号'
  },
  phystatusName: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '物理状态'
  },
  phystatusId: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '物理状态id'
  },
  wzflTypeName: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '物质分类'
  },
  wzfltypeId: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '物资分类id'
  },
  savemaxS: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '设计贮存量(t)'
  },
  saveOneYearMaxS: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '近一年最大贮存量(t)'
  }
}, {
  timestamps: false,  //去除createAt updateAt
  tableName: 'company_risk_sources'
})

// CompanyRiskSource.sync({force: true})

module.exports = CompanyRiskSource