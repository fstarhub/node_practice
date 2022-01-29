const Role = require('../model/role.model')

class RoleService {
  // 增加角色
  async addOne(param) {
    return await Role.create(param)
  }

  // 插叙所有角色
  async getAllRole() {
    return await Role.findAll({
      attributes: ['role_id', 'role_name', 'createdAt', 'updatedAt']
    })
  }

  // 删除角色
  async delOne(role_id) {
    const res = await Role.destroy({
      where: {
        role_id
      }
    })
    return res > 0 ? true : false
  }
}

module.exports = new RoleService()