const Router = require('koa-router')

const router = new Router({ prefix: '/company' })

const { insertData, getRiskSource } = require('../controller/companyInfos.controller')


router.get('/', ctx => {
  ctx.body = '企业基本信息'
})

// 插入企业基本信息数据
router.post('/insertCompanyBaseInfo', insertData)
// 爬虫-获取企业相关数据
router.post('/getCompanyRiskSource', getRiskSource)
// 插入企业填报信息
router.post('insertCompanyFIllinfInfo')

module.exports = router