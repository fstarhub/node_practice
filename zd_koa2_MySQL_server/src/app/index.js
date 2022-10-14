const Koa = require('koa')

const KoaBody = require('koa-body')

const bodyParser = require('koa-bodyparser')

const path = require('path')

const KoaStatic = require('koa-static')

const parameter = require('koa-parameter')

// const userRouter = require('../router/user.route')
// const goodsRouter = require('../router/goods.route')
const router = require('../router')

const errHandler = require('./errHandler')

const app = new Koa()

// app.use(KoaBody())
app.use(KoaBody({
  multipart: true,
  formidable: {
    // options里的相对路径不是相对的当前路径，相对process.cwd()
    // uploadDir: '../upload', // 不推荐使用相对路径
    // uploadDir: './src/upload',
    uploadDir: path.join(__dirname, '../upload'),
    keepExtensions: true,
  },
  /**
   * GET, HEAD, and DELETE requests have no defined semantics for the request body, but this doesn't mean they may not be valid in certain use cases.
   *  koa-body is strict by default, parsing only POST, PUT, and PATCH requests
   */
  parsedMethods: ['POST', 'PUT', 'PATCH', 'DELETE'], // koaBody默认只将get, post, patch挂载到ctx.request.body
  formLimit: '10mb', // 扩大请求体
  jsonLimit: '10mb', // 扩大请求体
}))

app.use(bodyParser({
  formLimit: '10mb', // 扩大请求体
  jsonLimit: '10mb', // 扩大请求体
}))

app.use(KoaStatic(path.join(__dirname, '../upload')))

app.use(parameter(app))

// app.use(userRouter.routes())
// app.use(goodsRouter.routes())
app.use(router.routes()).use(router.allowedMethods())
// app.use(router.allowedMethods())

// 统一错误处理
app.on('error', errHandler)

module.exports = app