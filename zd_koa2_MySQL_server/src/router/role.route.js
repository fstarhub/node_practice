const Router = require('koa-router')
const router = new Router({ prefix: '/role' })

const { auth, hadAdminPermission } = require('../middleware/auth.middleware')
const { addOneRole, findAllRole } = require('../controller/role.controller')

router.get('/', ctx => {
  ctx.body = '角色基础路由'
})

// 增加角色
router.post('/add', auth, hadAdminPermission, addOneRole)

// 查询所有角色
router.post('/', auth, hadAdminPermission, findAllRole)

module.exports = router