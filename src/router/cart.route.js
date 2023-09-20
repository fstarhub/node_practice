const Router = require('koa-router')
const router = new Router({ prefix: '/carts' })

const { auth } = require('../middleware/auth.middleware')
const { validatorGoods, validateGoodsId } = require('../middleware/cart.middleware')

const cartController = require('../controller/cart.controller')

router.get('/', (ctx, next) => {
  ctx.body = '购物车基础路由'
})

// 将物品添加到购物车
router.post('/addGoods', auth, validatorGoods({ goods_id: 'number' }), validateGoodsId, cartController.add)

// 查询购物车信息
router.post('/findGoods', auth, cartController.findCarts)

// 更新购物车
router.patch('/:id',
  auth,
  validatorGoods({
    number: { type: 'number', required: false },
    selected: { type: 'bool', required: false }
  }),
  cartController.update
)

// 删除购物车商品
router.delete('/removeCart', auth, validatorGoods({ ids: 'array' }), cartController.remove)

// 全选购物车商品
router.post('/selectedCart', auth, cartController.select)
// 全不选购物车商品
router.post('/unselectedCart', auth, cartController.unselect)

module.exports = router