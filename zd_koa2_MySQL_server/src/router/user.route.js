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
// 新增用户
router.post('/newAdd', auth, hadAdminPermission, verifyUser, ctyptPassword, UserContraller.addOne)
// 修改用户
router.post('/editOne', auth, hadAdminPermission, UserContraller.editUser)
// 删除用户
router.post('/delOne', auth, hadAdminPermission, UserContraller.delOne)
// 查询当前登录用户信息
router.get('/findCurrent', auth, UserContraller.findCurrentUser)

// 字典接口
router.post('/getOptions', (ctx) => {
  // console.log(ctx.request.body.typeId, 'getOptions-request')
  switch(ctx.request.body.typeId) {
    case 'zhonglei':
      ctx.body = {
        message: 'success',
        data: [
          {
            value: '1',
            label: '黄金糕'
          }, {
            value: '2',
            label: '双皮奶'
          }, {
            value: '3',
            label: '蚵仔煎'
          }, {
            value: '4',
            label: '龙须面'
          }, {
            value: '5',
            label: '北京烤鸭'
          }
        ]
      }
      break;
    case 'dengji':
      ctx.body = {
        message: 'success',
        data: [
          {
            value: '6',
            label: '一级风险'
          }, {
            value: '7',
            label: '二级风险'
          }, {
            value: '8',
            label: '三级风险'
          }, {
            value: '9',
            label: '四级风险'
          }, {
            value: '10',
            label: '五级风险'
          }
        ]
      }
      break;
    case 'chengdu':
      ctx.body = {
        message: 'success',
        data: [
          {
            value: '11',
            label: '了解'
          }, {
            value: '12',
            label: '熟悉'
          }, {
            value: '13',
            label: '精通'
          }, {
            value: '14',
            label: '底层'
          }, {
            value: '15',
            label: '掌握'
          }
        ]
      }
      break;
    default:
      ctx.body = {
        message: '暂无数据'
      }
  }
})

// 测试接口
router.post('/test', (ctx) => {
  console.log('test接口被请求了')
  ctx.body = {
    data: '接口请求成功'
  }
})

module.exports = router