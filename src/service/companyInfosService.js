const { Op } = require('sequelize')
const CompanyBaseInfo = require('../model/companyBaseInfoModel')
const CompanyFillingInfo = require('../model/companyFillingInfoModel')
const CompanyManageInfo = require('../model/companyManageUserModel')
const CompanyRiskInfo = require('../model/companyRiskSourceModel')
const CompanyMaterialsInfo = require('../model/companyEmergencyMaterialsModel')
const CompanySensitiveInfo = require('../model/companySensitiveTargetModel')

class CompanyBaseInfoService {
  // 插入填报数据
  async doInsertFilling(param) {
    const res = await CompanyFillingInfo.create(param)
    return
  }

  // 插入企业基础数据
  async doInsertBase(param) {
    const res = await CompanyBaseInfo.create(param)
    return
  }

  // 插入企业管理人员数据
  async doInsertManage(param) {
    const res = await CompanyManageInfo.create(param)
    return
  }

  // 插入企业风险源数据
  async doInsertRisk(param) {
    const res = await CompanyRiskInfo.create(param)
    return
  }

  // 插入企业应急物资数据
  async doInsertMaterials(param) {
    const res = await CompanyMaterialsInfo.create(param)
    return
  }

  // 插入企业敏感目标数据
  async doInsertSensitive(param) {
    const res = await CompanySensitiveInfo.create(param)
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