/*
 * @Description: 错误类型
 * @Autor: fengshuai
 * @Date: 2021-10-11 10:38:52
 * @LastEditors: fengshuai
 * @LastEditTime: 2021-12-01 17:16:38
 */
module.exports = {
  userFormatError: {
    code: '10001',
    message: '用户名或密码为空',
    result: ''
  },
  userAlreadyExisted: {
    code: '10002',
    message: '用户名已存在',
    result: ''
  },
  userDoesNotExist: {
    code: '10003',
    message: '用户名不存在',
    result: ''
  },
  userLoginError: {
    code: '10005',
    message: '用户登录失败',
    result: ''
  },
  userInvalidPassword: {
    code: '10006',
    message: '密码不匹配',
    result: ''
  },
  tokenExpiredError: {
    code: '10101',
    message: 'token已过期',
    result: ''
  },
  jsonWebTokenError: {
    code: '10102',
    message: '无效的token',
    result: ''
  },
  hasNotAdminPermission: {
    code: '10103',
    message: '没有管理员的权限',
    result: ''
  },
  fileUploadError: {
    code: '10201',
    message: '商品上传失败',
    result: ''
  },
  unSupportFileType: {
    code: '10202',
    message: '不支持的图片格式',
    result: ''
  },
  goodsFormatError: {
    code: '10203',
    message: '商品参数格式错误',
    result: ''
  },
  createGoodsError: {
    code: '10204',
    message: '发布商品失败',
    result: ''
  },
  validateIsPublishError: {
    code: '10205',
    message: '商品重复发布',
    result: ''
  },
  invalidGoodsId: {
    code: '10206',
    message: '无效的商品ID',
    result: ''
  },
  cartFormatError: {
    code: '10301',
    message: '购物车格式错误',
    result: ''
  },
  addressFormatError: {
    code: '10401',
    message: '地址格式错误',
    result: ''
  },
  orderFormatError: {
    code: '10401',
    message: '订单格式错误',
    result: ''
  }
}