const Router = require('koa-router')
const router = new Router({ prefix: '/role' })

const { auth, hadAdminPermission } = require('../middleware/auth.middleware')
const { addOneRole, findAllRole, delRoleByOne } = require('../controller/role.controller')
const { verifyRoleExit } = require('../middleware/role.middleware')

router.get('/', ctx => {
  ctx.body = '角色基础路由'
})

// 增加角色
router.post('/add', auth, hadAdminPermission, verifyRoleExit, addOneRole)

// 查询所有角色
router.post('/', auth, hadAdminPermission, findAllRole)

// 删除角色（单个删除）
router.post('/delRole', auth, hadAdminPermission, delRoleByOne)

module.exports = router