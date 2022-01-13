const { orderFormatError } = require('../constant/err.types')
const validator = (rules) => {
  return async (ctx, next) => {
    try {
      ctx.verifyParams(rules)
    } catch (error) {
      console.log(error)
      orderFormatError.message = error
      return ctx.app.emit('error', orderFormatError, ctx)
    }
    await next()
  }
}

module.exports = { validator }