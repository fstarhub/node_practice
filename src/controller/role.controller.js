
const { nanoid } = require('nanoid')
const { addOne,getAllRole, delOne } = require('../service/role.service')

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
      result: res
    }
  }

  async delRoleByOne(ctx, next) {
    const { role_id } = ctx.request.body
    const res = await delOne(role_id)
    if (res) {
      ctx.body = {
        code: 0,
        message: 'Success',
        result: res
      }
    } else {
      ctx.body = {
        code: 0,
        message: '删除失败',
        result: res
      }
    }
    
  }

}

module.exports = new RoleController()