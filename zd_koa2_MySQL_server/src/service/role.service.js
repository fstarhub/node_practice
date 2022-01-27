const Role = require('../model/role.model')

class RoleService {
  // 增加角色
  async addOne(param) {
    return await Role.create(param)
  }

  async getAllRole() {
    return await Role.findAll({
      attributes: ['role_id', 'role_name', 'createdAt', 'updatedAt']
    })
  }
}

module.exports = new RoleService()