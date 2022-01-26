/*
 * @Description: 商品路由
 * @Autor: fengshuai
 * @Date: 2021-10-14 09:10:07
 * @LastEditors: fengshuai
 * @LastEditTime: 2021-12-01 16:14:06
 */
const Router = require('koa-router')

const router = new Router({ prefix: '/goods' })

const { upload, create, update, remove, offShelfGoods, onShelfGoods, findAllGoods, ForceRemove } = require('../controller/goods.controller')

const { auth, hadAdminPermission } = require('../middleware/auth.middleware')
const { validator, validateIsPublish } = require('../middleware/goods.middleware')

router.get('/', (ctx, next) => {
  ctx.body = {
    code: 0,
    message: 'goods基础路由',
    result: ''
  }
})

// 商品图片上传接口
// router.post('/upload', auth, hadAdminPermission, upload)
router.post('/upload', upload)

// 发布商品接口
router.post('/', auth, hadAdminPermission, validateIsPublish, validator, create)

// 修改商品
router.put('/:id', auth, hadAdminPermission, validator, update)

// 删除商品
router.delete('/:id', auth, hadAdminPermission, remove)

// 删除商品(硬)
router.delete('/:id/delete', auth, hadAdminPermission, ForceRemove)

// 商品下架
router.post('/:id/off', auth, hadAdminPermission, offShelfGoods)

// 商品上架
router.post('/:id/on', auth, hadAdminPermission, onShelfGoods)

// 获取商品列表
router.get('/findAllGoods', findAllGoods)

module.exports = router