const { Op } = require('sequelize')
const CompanyBaseInfo = require('../model/companyBaseInfoModel')

class CompanyBaseInfoService {
  // 插入数据
  async doInsert(param) {
    const res = await CompanyBaseInfo.create(param)
    return
  }

  // 获取企业ID集合
  async getCompanyId() {
    const res = await CompanyBaseInfo.findAll({
      attributes: ['companyId']
    })
    return res
  }
}

module.exports = new CompanyBaseInfoService()