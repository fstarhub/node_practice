const { addressFormatError } = require('../constant/err.types')

const validator = (rules) => {
  return async (ctx, next) => {
    try {
      ctx.verifyParams(rules)
    } catch (error) {
      console.log(error)
      addressFormatError.message = error
      return ctx.app.emit('error', addressFormatError, ctx)
      
    }
    await next()
  }
}

module.exports = { validator }