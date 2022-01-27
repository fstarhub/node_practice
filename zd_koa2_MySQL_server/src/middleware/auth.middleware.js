/*
 * @Description: 用户中间件
 * @Autor: fengshuai
 * @Date: 2021-10-13 09:35:57
 * @LastEditors: fengshuai
 * @LastEditTime: 2021-11-30 16:49:42
 */
const jwt = require('jsonwebtoken')

const { JWT_SECRET } = require('../config/config.default')

const { tokenExpiredError, jsonWebTokenError, hasNotAdminPermission } = require('../constant/err.types')

const auth = async (ctx, next) => {
  const { authorization = '' } = ctx.request.header
  const token = authorization.replace('Bearer ', '')
  // console.log(token, 'token')
  // ctx.body = {
  //   code: 0,
  //   message: '修改密码',
  //   result: ''
  // }
  try {
    // user中包含了payload的信息(id, user_name, is_admin)
    const user = jwt.verify(token, JWT_SECRET)
    ctx.state.user = user
    // console.log(user,'user',ctx)
  } catch (err) {
    switch (err.name) { // jwt的错误提示
      case 'TokenExpiredError':
        console.log('token已过期',err)
        return ctx.app.emit('error', tokenExpiredError, ctx) // 自己封装的通用错误提示
      case 'JsonWebTokenError':
        console.log('无效的token', err)
        return ctx.app.emit('error', jsonWebTokenError, ctx)
    }
  }
  await next()
}

const hadAdminPermission = async (ctx, next) => {
  const { is_admin } = ctx.state.user
  console.log('登录用户是', ctx.state.user)
  // console.log(is_admin, 'admin')
  if (!is_admin) {
    console.error('该用户没有管理员权限', ctx.request.body)
    return  ctx.app.emit('error', hasNotAdminPermission, ctx)
  }

  await next()
}

module.exports = { auth, hadAdminPermission }