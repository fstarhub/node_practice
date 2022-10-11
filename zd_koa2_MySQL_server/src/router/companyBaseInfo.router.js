const Router = require('koa-router')

const router = new Router({ prefix: '/companyBaseInfo' })

const { insertData } = require('../controller/companyBaseInfo.controller')


router.get('/', ctx => {
  ctx.body = '企业基本信息'
})

// 插入数据
router.post('/insertCompanyInfo', insertData)

module.exports = router