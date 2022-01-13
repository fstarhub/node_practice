/*
 * @Description: 商品service
 * @Autor: fengshuai
 * @Date: 2021-10-15 16:28:06
 * @LastEditors: fengshuai
 * @LastEditTime: 2021-12-01 17:18:19
 */
const { Op } = require('sequelize')
const Goods = require('../model/goods.model')
class GoodsService {
  async createGoods (goods) {
    const res = await Goods.create(goods)
    // console.log('res,', res)
    return res.dataValues
  }

  async getPublishInfo ({ goods_name, goods_img }) {
    const res = await Goods.findAll({
      // attributes: ['id', 'gooods_name', 'goods_num', 'goods_img'],
      where: { goods_name: goods_name, goods_img: goods_img }
    })
    // console.log('3333333333333',res, 'eeeeeeeeeeeee')
    return res
  }

  async updateGoods(id, goods) {
    const res = await Goods.update(goods, { where: { id }})
    // console.log('resss', res,)
    return res[0] > 0 ? true : false
  }

  async removeGoods(id) {
    const res = await Goods.destroy({ where: {id}})
    // console.log('res', res)
    return res > 0 ? true : false
  }

  async shelvesGoods(id) {
    const res = await Goods.restore({ where: {id}})
    // console.log('res', res)
    return res > 0 ? true : false
  }

  async findGoods (pageNum, pageSize) { // sql中的怕个Size需要是一个字符串形式
    // // 1.获取总数
    // const count = await Goods.count()
    // // 2.获取分页数据
    // const offset = (pageNum - 1) * pageSize
    // const rows = await Goods.findAll({ offset: offset, limit: pageSize })

    const offset = (pageNum - 1) * pageSize
    const { count, rows } = await Goods.findAndCountAll({
      offset: offset,
      limit: pageSize * 1 ,
      paranoid: false // 可查询到软删除的记录
    })
    // console.log('list', rows)
    return {
      pageNum,
      pageSize,
      total: count,
      list: rows
    }
  }

  async getGoodsId (goods_id) {
    const res = await Goods.findOne({
      where: {
        id: {
          [Op.eq]: goods_id
        }
      }
    })
    // console.log('id', res, 'id')
    return res ? true : false
  }

}

module.exports = new GoodsService()