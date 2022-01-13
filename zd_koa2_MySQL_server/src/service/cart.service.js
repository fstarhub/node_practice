const { Op } = require('sequelize')
const Cart = require('../model/cart.model')
// const { findByPk } = require('../model/goods.model')

const Goods = require('../model/goods.model')

class CartsService {
  async creatOrUpdate(user_id, goods_id) {
    const res = await Cart.findOne({
      where: {
        [Op.and]: {
          user_id,
          goods_id
        }
      }
    })
    // console.log('aaa', res, 'res')
    if (res) {
      // 存在记录，将number + 1
      await res.increment('number')
      return await res.reload()
    } else {
      // 不存在记录，创建一条新纪录
      return await Cart.create({
        user_id,
        goods_id
      })
    }
  }

  async queryGoods(user_id, pageNum, pageSize) {
    const offset = ( pageNum - 1 ) * pageSize
    const { count, rows } = await Cart.findAndCountAll({
      offset: offset,
      limit: pageSize,
      where: {
        user_id: {
          [Op.eq]: user_id
        }
      },
      // attributes: ['id'],
      include: {
        model: Goods,
        as: 'goods_info',
        // attributes: ['id', 'goods_name', 'goods_price']
      }
    })
    return {
      pageNum,
      pageSize,
      total: count,
      list: rows
    }
  }

  async updateCarts(params) {
    const { id, number, selected } = params
    const res = await Cart.findByPk(id)
    if (!res) return ''

    number !== undefined ? (res.number =number) : ''
    if (selected !== undefined) {
      res.selected = selected
    }
    return await res.save()

  }

  async removeCart(params) {
    return await Cart.destroy({
      where: {
        id: {
          [Op.in]: params
        }
      }
    })
  }

  async selectAllCart(user_id) {
    return await Cart.update({ selected: true }, {
      where: {
        user_id: {
          [Op.eq]: user_id
        }
      }
    })
  }

  async unselectAllCart(user_id) {
    return await Cart.update({ selected: false }, {
      where: {
        user_id: {
          [Op.eq]: user_id
        }
      }
    })
  }

}

module.exports = new CartsService()