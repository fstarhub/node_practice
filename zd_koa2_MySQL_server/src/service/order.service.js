const Order = require('../model/order.model')

class OrderService {
  async createOrder(param) {
    return await Order.create(param)
  }

  async findAllOrder(pageNum, pageSize, status) {
    const offset = (pageNum - 1) * pageSize
    const { count, rows } = await Order.findAndCountAll({
      offset,
      limit: pageSize,
      attributes: ['goods_info', 'total', 'order_number', 'status'],
      where: {
        status
      },
    })

    return {
      pageNum: pageNum,
      pageSize,
      total: count,
      list: rows
    }
  }

  async modifyOrderStatus(id, status) {
    return await Order.update({ status },{
      where: {
        id
      },
    })
  }

}

module.exports = new OrderService()