const { Op } = require('sequelize')
const CompanyBaseInfo = require('../model/companyBaseInfoModel')

class CompanyBaseInfoService {
  async doInsert(param) {
    const res = await CompanyBaseInfo.create(param)
    return
  }
}

module.exports = new CompanyBaseInfoService()