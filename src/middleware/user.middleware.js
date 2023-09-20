const bcrypt = require('bcryptjs')

const { getUserInfo } = require('../service/user.service')
const { userFormatError, userAlreadyExisted, userDoesNotExist, userLoginError, userInvalidPassword } = require('../constant/err.types')

const userValidator = async (ctx, next) => {
  // 合法性
  const { user_name, password } = ctx.request.body
  if (!user_name || !password) {
    console.error('用户名或密码为空', ctx.request.body)
    // ctx.status = 400
    // ctx.body = {
    //   code: '10001',
    //   message: '用户名或密码为空',
    //   return: ''
    // }
    ctx.app.emit('error', userFormatError, ctx)
    return
  }
  return next()

}

const verifyUser = async (ctx, next) => {
  // 合理性
  const { user_name, password } = ctx.request.body
  const isExitsUser = await getUserInfo({user_name})
  // console.log(user_name, isExitsUser)
  if (isExitsUser) {
    // ctx.status = 409
    // ctx.body = {
    //   code: '10002',
    //   message: '用户已经存在',
    //   result: ''
    // }
    ctx.app.emit('error', userAlreadyExisted, ctx)
    return
  }
  await next()
}

const ctyptPassword = async (ctx, next) => {
  const { user_name, password } = ctx.request.body
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt); // hash保存的是密文
  ctx.request.body.password = hash
  ctx.request.body.visiblePassword = password
  await next()
}

const verifyLogin = async (ctx, next) => {
  // 1.判断用户是否存在
  const { user_name, password } = ctx.request.body
  try {
    const res = await getUserInfo({user_name})
    if (!res) {
      console.error('用户不存在', user_name)
      ctx.app.emit('error', userDoesNotExist, ctx)
      return
    }

    // 2.验证密码
    if (!bcrypt.compareSync(password, res.password)) {
      console.error('用户密码错误', user_name)
      ctx.app.emit('error', userInvalidPassword, ctx)
      return
    }
  } catch (err) {
    console.error('用户登录失败', user_name)
    return ctx.app.emit('error', userLoginError, ctx)
  }
  await next()

}
  
module.exports = { userValidator, verifyUser, ctyptPassword, verifyLogin }