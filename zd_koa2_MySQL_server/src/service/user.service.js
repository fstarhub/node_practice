const { Sequelize } = require('sequelize')
const User = require('../model/user.model')
const Role = require('../model/role.model')
class UserService {
  async createUser(user_name, password, visiblePassword) {
    // 写入数据库
    // User.create({
    //   user_name: user_name,
    //   password: password,
    // })

    const res = await User.create({ // 简写
      user_name,
      password,
      visiblePassword,
    })
    // console.log(res, 'res')
    return res
  }

  async getUserInfo({ id, user_name, password, is_admin }) {
    const whereOpt = {}
    id && Object.assign(whereOpt, { id })
    user_name && Object.assign(whereOpt, { user_name })
    password && Object.assign(whereOpt, { password })
    is_admin && Object.assign(whereOpt, { is_admin })

    const res = await User.findOne({
      attributes: ['id', 'user_name', 'password', 'is_admin'],
      where: whereOpt
    })
    // console.log(res, typeof(res), 'userinfores')
    return res ? res.dataValues : null
  }

  async updateById ({ id, user_name, password, is_admin, visiblePassword }) {
    const whereOpt = { id }
    const newUser = {}
    user_name && Object.assign(newUser, {user_name})
    password && Object.assign(newUser, {password})
    is_admin && Object.assign(newUser, {is_admin})
    visiblePassword && Object.assign(newUser, {visiblePassword})

    const res = await User.update(newUser, {
      where: whereOpt
    })
    // console.log(res, 'update')
    return res[0] > 0 ? true : fasle
  }

  async findUsers() {
    return await User.findAll({
      // attributes: ['user_name', 'is_admin', 'user_plone', 'user_mailbox', 'createdAt'],
      attributes: ['user_name', 'is_admin', 'user_plone', 'user_mailbox', 'createdAt', Sequelize.col('role.role_name')],
      include: {
        model: Role,
        as: 'role',
        attributes: [],
      },
      raw: true
    })
  }

}

module.exports = new UserService()