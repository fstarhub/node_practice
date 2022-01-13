const { Op } = require('sequelize')
const Address = require('../model/address.model')


class AddressService {

  async createAddress(param) {
    return await Address.create(param)
  }

  async findUserAddres(user_id) {
    return await Address.findAll({
      where: {
        user_id: {
          [Op.eq]: user_id
        }
      }
    })
  }

  async updateUserAddres(id, address) {
    return await Address.update(address, {
      where: {
        id: {
          [Op.eq]: id
        }
      }
    })
  }

  async removeUserAddres(id) {
    return await Address.destroy({
      where: {
        id: {
          [Op.eq]: id
        }
      }
    })
  }

  async setUserAddres(user_id, id) {
    await Address.update({ is_default: false }, { where: { user_id }} )
    return await Address.update({ is_default: true }, {
      where: {
        id: {
          [Op.eq]: id
        }
      }
    })
  }

}

module.exports = new AddressService()