
const app = require('./app/index')
// const Router = require('koa-router')

const { APP_PORT } = require('./config/config.default')

// const router = new Router()

// app.use(async ctx => {
//   ctx.body = 'hello world'
// })
// app.use(router.routes())
// router.get('/', (ctx, next) => {
//   ctx.body = 'hello'
// })

// router.get('/good', (ctx, next) => {
//   ctx.body = 'good'
// })

app.listen(APP_PORT, () => {
  console.log(`Server is running at http://localhost:${APP_PORT}`)
})

