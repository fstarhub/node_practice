const { doInsert } = require('../service/companyBaseInfoService')

class CompanyBaseInfoController {
  async insertData(ctx, next) {
    // console.log(ctx.request.body)
    let paramData = ctx.request.body
    let paramLength = ctx.request.body.length
    try {
      for (let index = 0; index < paramLength; index++) {
        const res = await doInsert(paramData[index])
      }
      ctx.body = {
        code: 0,
        message: '插入数据成功',
        result: ''
      }
    } catch (error) {
      ctx.body = {
        code: 1,
        message: '插入数据出错',
        result: ''
      }
    }
  }
}

module.exports = new CompanyBaseInfoController()