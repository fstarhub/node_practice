

const verifyRoleExit = async(ctx, next) => {
  console.log(ctx.requst.body)
  next()
}


module.exports = { verifyRoleExit }