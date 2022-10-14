const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

const CompanyManageUser = seq.define('company_manage_user', {
  managerName: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '管理人姓名'
  },
  managerId: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '管理人id'
  },
  companyId: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '企业id'
  },
  managerPhone: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '管理人电话'
  }
}, {
  timestamps: false,  //去除createAt updateAt
})

// CompanyManageUser.sync({ force: true })

module.exports = CompanyManageUser