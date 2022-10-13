const Router = require('koa-router')

const router = new Router({ prefix: '/companyBaseInfo' })

const { insertData, getRiskSource } = require('../controller/companyBaseInfo.controller')


router.get('/', ctx => {
  ctx.body = '企业基本信息'
})

// 插入企业基本信息数据
router.post('/insertCompanyInfo', insertData)
router.post('/getCompanyRiskSource', getRiskSource)

module.exports = router