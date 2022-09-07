const Router = require('koa-router')
const router = new Router({ prefix: '/dataStatistics'})

router.post('/getDataStatistics', ctx => {
  ctx.body = {
    code: '000000',
    mesg: '处理成功',
    time: new Date(),
    data: {
      fengxianyuan: {
        gongyeyuan: 20,
        weikuangku: 43,
        jiayouzhan: 81,
        weihuapin:7,
        feishuipaikou: 46,
        feiqipaikou: 0
      },
      minfanmubiao: {
        shui: 1800,
        ziran: 230,
        heliu: 12,
        yiyuan: 130,
        xuexiao: 302
      }
    }
  }
})

module.exports = router