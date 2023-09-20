const Router = require('koa-router')

const router = new Router({ prefix: '/order' })

const { auth } = require('../middleware/auth.middleware')
const { validator } = require('../middleware/order.middleware')
const { create, findOrder, updateOrder } = require('../controller/order.controller')

router.get('/', ctx => {
  ctx.body = '订单基础路由'
})

// 提交订单
router.post('/submitOrder',
  auth,
  validator({
    address_id: 'int',
    goods_info: 'string',
    total: 'number'
  }),
  create
)

// 查询订单列表
router.post('/getOrder', auth, findOrder)

// 修改订单
router.patch('/modifyOrder/:orderId', auth, validator({ status: 'number' }), updateOrder)

module.exports = router