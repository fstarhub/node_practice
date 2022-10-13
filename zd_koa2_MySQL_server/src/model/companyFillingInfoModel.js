const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

const CompanyFillingInfo = seq.define('company_filling_info', {
  areaName: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '行政区划'
  },
  c_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '企业名称'
  },
  enterprise_id: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '企业id'
  },
  userAccount: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '企业账号'
  },
  detailLocation: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '详细地址'
  },
  riskLevel: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '风险等级 1一般，2较大，3重大'
  },
  report_uploadtime: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '上报时间'
  },
  report_ischeck: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '核对状态 0未上报，1，已上报，2核对通过'
  }

}, {
  timestamps: false,  //去除createAt updateAt
})

// CompanyFillingInfo.sync({ force: true })

module.exports = CompanyFillingInfo