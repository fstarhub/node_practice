
const { nanoid } = require('nanoid')
const { addOne,getAllRole } = require('../service/role.service')

class RoleController {

  async addOneRole(ctx, next) {
    try {
      const { role_name } = ctx.request.body
      const res = await addOne({role_id: nanoid(), role_name})
      if (res.dataValues) {
        ctx.body = {
          code: 0,
          message: '添加角色成功',
          result: res.dataValues
        }
      } else {
        ctx.body = {
          code: 0,
          message: '添加失败',
          result: ''
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  async findAllRole(ctx, next) {
    const res = await getAllRole()
    ctx.body = {
      code: 0,
      message: 'Success',
      return: res
    }
  }
}

module.exports = new RoleController()