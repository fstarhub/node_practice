/*
 * @Description: 商品模块
 * @Autor: fengshuai
 * @Date: 2021-10-14 09:16:09
 * @LastEditors: fengshuai
 * @LastEditTime: 2021-12-01 17:22:10
 */
const path = require('path')

const { createGoods, updateGoods, removeGoods, shelvesGoods, findGoods, forceRemoveGoods } = require('../service/goods.service')

const { fileUploadError, unSupportFileType, createGoodsError, invalidGoodsId } = require('../constant/err.types') 
class GoodsController {
  async upload (ctx, next) {
    // console.log(ctx.request.files.file)

    const { file } = ctx.request.files
    // console.log(file,'file')
    const fileTypes = ['image/jpeg', 'image/png']
    if (file) {
      if (!fileTypes.includes(file.type)) {
        return ctx.app.emit('error', unSupportFileType, ctx)
      }
      ctx.body = {
        code: 0,
        message: '商品上传成功',
        result: {
          goods_img: path.basename(file.path)
        }
      }
    } else {
      return ctx.app.emit('error', fileUploadError, ctx)
    }

  }

  async create (ctx, next) {
    try {
      // const res = await createGoods(ctx.request.body)
      const { createdAt, updatedAt, ...res} = await createGoods(ctx.request.body)
      ctx.body = {
        code: 0,
        message: '发布商品成功',
        result: res
      }
    } catch (error) {
      console.error('error',error)
      return ctx.app.emit('error', createGoodsError, ctx)
    }
    
  }

  async update (ctx, next) {
    try {
      const res = await updateGoods(ctx.params.id, ctx.request.body)
      if (res) {
        ctx.body = {
          code: 0,
          message: '修改商品成功',
          result: ''
        }
      } else {
        return ctx.app.emit('error', invalidGoodsId, ctx)
      }
    } catch (error) {
      console.error(error)
    }
  }

  async remove (ctx, next) {
    const res = await removeGoods(ctx.params.id)
    try {
      if (res) {
        ctx.body = {
          code: 0,
          message: '删除商品成功',
          result: ''
        }
      } else {
        ctx.body = {
          code: 0,
          message: '商品不存在或已删除',
          result: ''
        }
      }
    } catch (error) {
      
    }
  }

  async ForceRemove (ctx, next) {
    const res = await forceRemoveGoods(ctx.params.id)
    try {
      if (res) {
        ctx.body = {
          code: 0,
          message: '删除商品成功',
          result: ''
        }
      } else {
        ctx.body = {
          code: 0,
          message: '商品不存在或已删除',
          result: ''
        }
      }
    } catch (error) {
      
    }
  }

  async offShelfGoods (ctx, next) {
    const res = await removeGoods(ctx.params.id)
    try {
      if (res) {
        ctx.body = {
          code: 0,
          message: '商品下架成功',
          result: ''
        }
      } else {
        ctx.body = {
          code: 0,
          message: '商品不存在或已删除',
          result: ''
        }
      }
    } catch (error) {
      console.log(error)
      return ctx.app.emit('error', invalidGoodsId, ctx)
    }
  }

  async onShelfGoods (ctx, next) {
    const res = await shelvesGoods(ctx.params.id)
    try {
      if (res) {
        ctx.body = {
          code: 0,
          message: '商品上架成功',
          result: ''
        }
      } else {
        ctx.body = {
          code: 0,
          message: '商品不存在或已删除',
          result: ''
        }
      }
    } catch (error) {
      console.log(error)
      return ctx.app.emit('error', invalidGoodsId, ctx)
    }
  }

  async findAllGoods (ctx, next) {
    // 1.解析pageNum,pageSize
    const { pageNum = 1, pageSize = 10 } = ctx.request.query // 获取get请求参数
    // 2.数据库拿数据
    const res = await findGoods(pageNum, pageSize)
    // 3.返回结果
    ctx.body = {
      code: 0,
      message: 'Success',
      result: res
    }
  }

}

module.exports = new GoodsController()