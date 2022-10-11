const seq = require('../db/seq')
const { DataTypes } = require('sequelize')

const CompanyBaseInfo = seq.define('companyBaseInfos', {
  companyName: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '企业名称'
  },
  companyId: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '企业编号'
  },
  cProvince: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '省'
  },
  cCity: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '市'
  },
  cArea: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '区'
  },
  socialCreditCode: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '统一社会信用代码'
  },
  socialCreditCodeBsm: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '统一社会信用代码标识码'
  },
  detailLocation: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '详细地址'
  },
  cLad: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '中心经度（度）'
  },
  cLaf: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '中心经度（分）'
  },
  cLas: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '中心经度（秒）'
  },
  cLod: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '中心维度（度）'
  },
  cLof: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '中心维度（分）'
  },
  cLos: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '中心维度（秒）'
  },
  fddbr: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '法定代表人'
  },
  phone: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '联系电话'
  },
  fax: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '传真'
  },
  emailc: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '电子邮箱'
  },
  riskLevel: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '企业风险等级（1 一般，2 较大， 3 重大）'
  },
  industryCategoryText: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '企业行业类别'
  },
  industryCategory: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '企业行业类别编码'
  },
  emergencyLagoon: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '是否有应急池（1 有，0没有）'
  },
  lagoonCapacity: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '应急池容量'
  },
  drainOutlet: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '排口-污水（1市政管网，2其他）'
  },
  yspk: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '排口-雨水排口（1有，0无）'
  },
  gf: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '排口-固废（1有暂存场所，0无暂存场所）'
  },
  wkkyuan: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '企业是否含尾矿库预案（0 没有，1有）'
  },
  isReport: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '是否仅需上报尾矿库预案（1是，2否）'
  },
  planname: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '预案名称'
  },
  issuedate: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '预案签署发布日期'
  },
  fileNameBack0: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '应急监测方案'
  },
  isAssessment: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '是否开展过环境风险评估工作（1 是，null不展示）'
  },
  isFocus: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '是否属于重点环境监管尾矿库（1是，null不展示）'
  },
  isPlan: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '是否编制突发环境事件应急预案（1是，null不展示）'
  },
  wkkplanname: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '尾矿库预案名称'
  },
  wkkissuedate: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '尾矿库预案签署发布日期'
  },
  fileNameBack10: {
    type:DataTypes.STRING,
    allowNull: true,
    comment: '尾矿库企业应急预案相关文件'
  },

}, {
  timestamps: false,  //去除createAt updateAt
  // freezeTableName: true,  // 使用自定义表名
  tableName: 'companyBaseInfos',
  // 如果需要sequelize帮你维护createdAt,updatedAt和deletedAt必须先启用timestamps功能
  // 将createdAt对应到数据库的created_at字段
  // createdAt: 'created_at',
  // 将updatedAt对应到数据库的updated_at字段
  // updatedAt: 'updated_at',
  //And deletedAt to be called destroyTime (remember to enable paranoid for this to work)
  // deletedAt: false, //'deleted_at',
  //删除数据时不删除数据，而是更新deleteAt字段 如果需要设置为true，则上面的deleteAt字段不能为false，也就是说必须启用
  // paranoid: false
})

// CompanyBaseInfo.sync({ force: true })

module.exports = CompanyBaseInfo