const Router = require('koa-router')

const router = new Router({ prefix: '/address' })

const { auth } = require('../middleware/auth.middleware')
const { validator } = require('../middleware/address.middleware')
const { create, findAddress, updateAddress, removeAddress, setDefaultAddress } = require('../controller/address.controller')

router.get('/', ctx => {
  ctx.body = '地址基础路由'
})

// 新增收货地址
router.post('/add',
  auth,
  validator({
    consignee: 'string',
    phone: { type: 'string', format: /^[1]([3-9])[0-9]{9}$/ },
    address: 'string'
  }),
  create
)

// 查询收获地址
router.post('/getAddresses', auth, findAddress)
// 更新收获地址
router.put('/getAddresses/:id',
  auth,
  validator({
    consignee: 'string',
    phone: { type: 'string', format: /^[1]([3-9])[0-9]{9}$/ },
    address: 'string'
  }),
  updateAddress
)

// 删除地址
router.delete('/delAddress/:id', auth, removeAddress)

// 设置默认地址
router.patch('/setAddress/:id', auth, setDefaultAddress)

module.exports = router