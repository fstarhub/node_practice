const Router = require('koa-router')
const UserContraller = require('../controller/user.controller')
// const {register, login} = require('../controller/user.controller') // 使用结构赋值获取user.controller类中的方法

const { userValidator, verifyUser, ctyptPassword, verifyLogin} = require('../middleware/user.middleware')

const { auth, hadAdminPermission } = require('../middleware/auth.middleware')

// const router = new Router()
const router = new Router({ prefix: '/users'}) // 访问user路由下的'/'路由时，会和'/users'进行拼接，'/users/'

// get '/users/
router.get('/', (ctx, next) => {
  ctx.body = 'users/基础路由'
})

// 注册接口
// router.post('/register', userValidator, verifyUser, ctyptPassword, register)
router.post('/register', userValidator, verifyUser, ctyptPassword, UserContraller.register)
router.post('/login', userValidator, verifyLogin, UserContraller.login)

router.patch('/', auth, ctyptPassword, UserContraller.changePassword)

// 查询所有用户
router.post('/findAll', auth, hadAdminPermission, UserContraller.findAllUser)

module.exports = router