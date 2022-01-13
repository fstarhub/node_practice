const { createAddress, findUserAddres, updateUserAddres, removeUserAddres, setUserAddres } = require('../service/address.service')

class AddressController {

  async create(ctx, next) {
    const user_id = ctx.state.user.id
    const { consignee, phone, address } = ctx.request.body
    const res = await createAddress({ user_id,consignee, phone, address })
    ctx.body = {
      code: 0,
      message: '添加地址成功',
      result: res
    }
  }

  async findAddress(ctx, next) {
    const id = ctx.request.params.id
    const res = await findUserAddres(id)
    ctx.body = {
      code: 0,
      message: 'Success',
      result: res
    }
  }

  async updateAddress(ctx, next) {
    const id = ctx.request.params.id
    // const { consignee, phone, address } = ctx.request.body
    const res = await updateUserAddres(id, ctx.request.body)
    ctx.body = {
      code: 0,
      message: 'Success',
      result: res
    }
  }

  async removeAddress(ctx, next) {
    const id = ctx.request.params.id
    // const { consignee, phone, address } = ctx.request.body
    const res = await removeUserAddres(id)
    ctx.body = {
      code: 0,
      message: 'Success',
      result: res
    }
  }

  async setDefaultAddress(ctx, next) {
    const id = ctx.request.params.id
    const user_id = ctx.state.user.id
    // const { consignee, phone, address } = ctx.request.body
    const res = await setUserAddres(user_id, id)
    ctx.body = {
      code: 0,
      message: 'Success',
      result: res
    }
  }

}

module.exports = new AddressController()