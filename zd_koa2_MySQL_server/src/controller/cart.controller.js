const { creatOrUpdate, queryGoods, updateCarts, removeCart, selectAllCart, unselectAllCart } = require('../service/cart.service')
const { cartFormatError } = require('../constant/err.types')
class CartController {
  async add (ctx, next) {
    const user_id = ctx.state.user.id
    const goods_id = ctx.request.body.goods_id
    let res = await creatOrUpdate(user_id, goods_id)
    ctx.body = {
      code: 0,
      message: '商品添加到购物车成功',
      result: res
    }
  }

  async findCarts (ctx, next) {
    const user_id = ctx.state.user.id
    const { pageNum = 1, pageSize = 10 } = ctx.request.body
    let res = await queryGoods(user_id, pageNum, pageSize)
    ctx.body = {
      code: 0,
      message: '查询购物车成功',
      result: res
    }
  }

  async update(ctx, next) {
    const { id } = ctx.request.params
    const { number, selected } = ctx.request.body
    if (number === undefined && selected === undefined) {
      cartFormatError.message = 'number和selected不能同时为空'
      return ctx.app.emit('error', cartFormatError, ctx)
    }
    const res = await updateCarts({ id, number, selected })
    ctx.body = {
      code: 0,
      message: '更新购物车成功',
      result: res
    }
  }

  async remove(ctx, next) {
    const { ids } = ctx.request.body
    const res = await removeCart(ids)
    ctx.body = {
      code: 0,
      message: '删除购物车物品成功',
      result: ''
    }
  }

  async select(ctx, next) {
    // console.log(ctx.state, 'ewewe')
    const user_id = ctx.state.user.id
    const res = await selectAllCart(user_id)
    ctx.body = {
      code: 0,
      message: '购物车商品全部选中',
      result: res
    }
  }

  async unselect(ctx, next) {
    const user_id = ctx.state.user.id
    const res = await unselectAllCart(user_id)
    ctx.body = {
      code: 0,
      message: '购物车商品全部不选中',
      result: res
    }
  }

}


module.exports = new CartController()