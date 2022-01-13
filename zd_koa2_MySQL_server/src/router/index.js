/*
 * @Description: 路由入口
 * @Autor: fengshuai
 * @Date: 2021-10-14 14:10:06
 * @LastEditors: fengshuai
 * @LastEditTime: 2021-12-01 16:21:30
 */
const fs = require('fs')

const Router = require('koa-router')

const router = new Router()

fs.readdirSync(__dirname).forEach(file => {
  // console.log(file, 'file')

  if (file !== 'index.js') {
    let r = require('./' + file)
    router.use(r.routes())
  }
})

module.exports = router