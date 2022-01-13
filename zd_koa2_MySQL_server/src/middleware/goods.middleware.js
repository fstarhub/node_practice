/*
 * @Description: 发布商品校验数据
 * @Autor: fengshuai
 * @Date: 2021-10-15 15:22:37
 * @LastEditors: fengshuai
 * @LastEditTime: 2021-12-01 14:58:02
 */
const { goodsFormatError, validateIsPublishError } = require('../constant/err.types')

const { getPublishInfo } = require('../service/goods.service')

const validator = async (ctx, next) => {
  try {
    ctx.verifyParams({
      goods_name: { type: 'string', required: true },
      goods_price: { type: 'number', required: true },
      goods_num: { type: 'number', required: true },
      goods_img: { type: 'string', required: true },
    })
  } catch (error) {
    console.error('error', ctx.request.body)
    goodsFormatError.result = error
    return ctx.app.emit('error', goodsFormatError, ctx)
  }
  await next()
}

const validateIsPublish = async (ctx, next) => {

  const { goods_name, goods_img } = ctx.request.body
  const res = await getPublishInfo({ goods_name, goods_img })
  try {
    if (res.length > 0) {
      ctx.body = {
        code: 0,
        message: '商品已经发布，请勿重复发布',
        result: ''
      }
    } else {
      await next()
    }
  } catch (error) {
    console.error('error', ctx.request.body)
    return ctx.app.emit('error', validateIsPublishError, ctx)
  }
}


module.exports = { validator, validateIsPublish }