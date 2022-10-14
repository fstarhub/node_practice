const Router = require('koa-router')

const router = new Router({ prefix: '/company' })

const { insertBaseData, getRiskSource, insertFillingData, insertManageData, insertRiskData, insertMaterialsData, insertSensitiveData } = require('../controller/companyInfos.controller')


router.get('/', ctx => {
  ctx.body = '企业基本信息'
})

// 插入企业填报信息
router.post('/insertCompanyFIllinfInfo', insertFillingData)
// 插入企业基本信息数据
router.post('/insertCompanyBaseInfo', insertBaseData)
// 插入企业应急管理人员数据
router.post('/insertCompanyManageInfo', insertManageData)
// 插入企业风险源数据
router.post('/insertCompanyRiskInfo', insertRiskData)
// 插入企业应急物资数据
router.post('/insertCompanyMaterialsInfo', insertMaterialsData)
// 插入企业敏感目标数据
router.post('/insertCompanySensitiveInfo', insertSensitiveData)

// 爬虫-获取企业相关数据
router.post('/getCompanyRiskSource', getRiskSource)

module.exports = router