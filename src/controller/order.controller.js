const { createOrder, findAllOrder, modifyOrderStatus } = require('../service/order.service')
class OrderController {
  async create(ctx, next) {
    const user_id = ctx.state.user.id
    const { address_id, goods_info, total } = ctx.request.body

    const order_number = 'STAR' + Date.now() // 生成订单号
    const res = await createOrder({ user_id, address_id, goods_info, total, order_number })
    ctx.body = {
      code: 0,
      message: 'Success',
      result: res
    }

  }

  async findOrder(ctx, next) {
    const { pageNum = 1, pageSize = 10, status = 0} = ctx.request.body

    const res = await findAllOrder(pageNum, pageSize, status)
    ctx.body = {
      code: 0,
      message: 'Success',
      result: res
    }

  }

  async updateOrder(ctx, next) {
    const id = ctx.request.params.orderId
    const { status } = ctx.request.body

    const res = await modifyOrderStatus(id, status)
    ctx.body = {
      code: 0,
      message: 'Success',
      result: res
    }

  }
}

module.exports = new OrderController()