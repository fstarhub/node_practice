const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/config.default')
const { createUser, getUserInfo, updateById, findUsers, addUser, updateUser, delUser } = require('../service/user.service')
class UserContraller {
  // static registerTest(ctx, next) {
  //   console.log('jajjaajj')
  //   return 'fangfadiaoyang'
  // }

  /**
   * 1.获取数据
   * 2.操作数据库
   * 3.返回结果
   */
  async register(ctx, next) {
    // 1.获取数据
    console.log(ctx.request.body)
    const { user_name, password, visiblePassword } = ctx.request.body

    // 合法性
    // if (!user_name || !password) {
    //   console.error('用户名或密码为空', ctx.request.body)
    //   ctx.status = 400
    //   ctx.body = {
    //     code: '10001',
    //     message: '用户名或密码为空',
    //     return: ''
    //   }
    // }

    // 合理性
    // if (getUserInfo({ user_name })) {
    //   ctx.status = 409
    //   ctx.body = {
    //     code: '10002',
    //     message: '用户已经存在',
    //     result: ''
    //   }
    //   return
    // }

    // 2.操作数据库
    const res = await createUser(user_name, password, visiblePassword)
    console.log(res)
    // 3.返回结果
    ctx.body = {
      code: 0,
      message: '用户创建成功',
      result: {
        id: res.id,
        user_name: res.user_name
      }
    }
  }

  async login(ctx, next) {
    const { user_name } = ctx.request.body

    // 1.获取用户信息（token的payload中）
    try {
      // 返回结果对象中剔除password属性，剩余的属性放到res对象
      const { password, ...res} = await getUserInfo({ user_name })
      // console.log(res, '...res')
      ctx.body = {
        code: 0,
        message: '用户登录成功',
        result: {
          token: jwt.sign(res, JWT_SECRET, { expiresIn: '1d' }),
          userInfo: res
        }
      }
    } catch (err) {
      console.err('登陆失败',err)
    }

    // ctx.body = `欢迎回来${user_name}`
  }

  async changePassword (ctx, next) {
    // 1.获取数据
    // console.log(ctx, 'ctx')
    const id = ctx.state.user.id
    const password = ctx.request.body.password
    const visiblePassword = ctx.request.body.visiblePassword
    // console.log(id, password)
    // 2.操作数据库
    const res = await updateById({ id, password, visiblePassword })
    // console.log(res, 'res')
    // 3.返回结果
    if (res) {
      ctx.body = {
        code: 0,
        message: '修改密码成功',
        result: ''
      }
    } else {
      ctx.body = {
        code: 0,
        message: '修改密码失败',
        result: ''
      }
    }
  }

  async findAllUser(ctx) {
    const res = await findUsers()
    ctx.body = {
      code: 0,
      message: 'Success',
      result: res
    }
  }

  async addOne(ctx) {
    // console.log(ctx.request.body, 'body')
    const res = await addUser(ctx.request.body)
    ctx.body = {
      code: 0,
      message: 'Success',
      result: res
    }
  }

  async editUser(ctx) {
    console.log(ctx.request.body, 'body')
    const { user_name } = ctx.request.body
    const res = await updateUser(ctx.request.body, user_name)
    if (res) {
      ctx.body = {
        code: 0,
        message: 'Success',
        result: ''
      }
    } else {
      ctx.body = {
        code: 0,
        message: '更新信息失败',
        result: ''
      }
    }
  }

  async delOne(ctx) {
    // console.log(ctx.request.body, 'body')
    const res = await delUser(ctx.request.body)
    ctx.body = {
      code: 0,
      message: 'Success',
      result: res
    }
  }
}

module.exports = new UserContraller()