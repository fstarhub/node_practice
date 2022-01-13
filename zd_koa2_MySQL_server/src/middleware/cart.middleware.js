
const { invalidGoodsId, cartFormatError } = require('../constant/err.types')

const { getGoodsId } = require('../service/goods.service')
// const validatorGoods = async (ctx, next) => {
//   try {
//     ctx.verifyParams({
//       goods_id: 'number',
//     })
//   } catch (error) {
//     console.log(error)
//     invalidGoodsId.message = error
//     return ctx.app.emit('error', invalidGoodsId, ctx )
//   }
//   await next()
// }

const validatorGoods = (rules) => {
  // console.log('rules', rules)
  return async (ctx, next) => {
    try {
      ctx.verifyParams(rules)
    } catch (error) {
      console.log(error)
      cartFormatError.message = error
      return ctx.app.emit('error', cartFormatError, ctx )
    }
    await next()
  }
}

const validateGoodsId = async (ctx, next) => {
  try { 
    const res = await getGoodsId(ctx.request.body.goods_id)
    if (res) {
      await next()
    } else {
      ctx.body = {
        code: 0,
        message: '不存在的商品id',
        result: ''
      }
    }
  } catch (error) {
    console.log(error)
    return ctx.app.emit('error', invalidGoodsId, ctx)
    
  }
}

module.exports = { validatorGoods, validateGoodsId }