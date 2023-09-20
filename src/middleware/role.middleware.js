const { findRoleOne } = require('../service/role.service')
const { roleIsExit } = require('../constant/err.types')

// 验证角色类别不重复
const verifyRoleExit = async(ctx, next) => {
  const res = await findRoleOne(ctx.request.body)
  if (res === null) {
    await next()
  } else {
    return ctx.app.emit('error', roleIsExit, ctx)
  }
}


module.exports = { verifyRoleExit }