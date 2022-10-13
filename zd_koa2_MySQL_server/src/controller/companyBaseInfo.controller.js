const { doInsert, getCompanyId } = require('../service/companyBaseInfoService')
const axios = require('axios')

class CompanyBaseInfoController {
  async insertData(ctx, next) {
    // console.log(ctx.request.body)
    let paramData = ctx.request.body
    let paramLength = ctx.request.body.length
    try {
      for (let index = 0; index < paramLength; index++) {
        const res = await doInsert(paramData[index])
      }
      ctx.body = {
        code: 0,
        message: '插入数据成功',
        result: ''
      }
    } catch (error) {
      ctx.body = {
        code: 1,
        message: '插入数据出错',
        result: ''
      }
    }
  }

  // 模拟爬取公司接口数据-成功
  // async getRiskSource(ctx, next) {
  //   axios.defaults.headers['content-type'] = 'application/json;charset=UTF-8'
  //   axios.defaults.headers['Authorization'] = 'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjoiMiIsInVzZXJfa2V5IjoiZDA1ZWIzM2EtMzZlMy00YzMxLWEyYTYtNTExY2ZhZjllNTBlIiwidXNlcm5hbWUiOiLnrqHnkIblkZgifQ.Ns7GxRFAxScAUyIXihNcHVdd__dONApRjAEiU6KXwbBYTlyl6uEPzTWzIT83VV2kaMZIjuZyYIto3bByr9lQkQ'
  //   axios.defaults.headers["accessToken"] = 'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjoiMiIsInVzZXJfa2V5IjoiZDA1ZWIzM2EtMzZlMy00YzMxLWEyYTYtNTExY2ZhZjllNTBlIiwidXNlcm5hbWUiOiLnrqHnkIblkZgifQ.Ns7GxRFAxScAUyIXihNcHVdd__dONApRjAEiU6KXwbBYTlyl6uEPzTWzIT83VV2kaMZIjuZyYIto3bByr9lQkQ'
  //   let result = await axios({
  //       url:'http://localhost:3100/bdp/yjgl/company-material/getMaterialList',
  //       method: 'post',
  //       data: {"province":"","city":"","area":"","companyName":"","pageSize":10,"pageNum":1}
  //     }).then(response => {
  //       return response.data
  //     })
  //   ctx.body = {
        
  //   }
  // }

    // 爬取企业风险源数据
  // async getRiskSource(ctx, next) {
  //   console.log('进入方法')
  //   // 获取所有企业ID
  //   const companyIdList = await getCompanyId()
  //   // console.log(companyIdList[0].dataValues.companyId)
  //   axios.defaults.headers['content-type'] = 'application/x-www-form-urlencoded'
  //   axios.defaults.headers["Cookie"] = 'SECKEY_ABVK=qDu5Kk5pGIsLesAJfBT9fGl9QydyAyQCa2H6qazuNak%3D; JSESSIONID=37c1ec50-1ef1-435d-a57c-c45ed5ed4ed6; route_nx_net=cca1463e0a79aad56e3d194f2ea9d270; route_cas=cca1463e0a79aad56e3d194f2ea9d270; shiro.sesssion=a3feef9b-95fa-4f1a-8caa-216219762bc9; epf=6f5e9f18d6814351b75ed411ac060fc8; dzba=7ba6e55fcd405a9eae657d0d3e33c7a7'
  //   const searchParam = {
  //     sEcho: 1,
  //     iColumns: 8,
  //     sColumns: null,
  //     iDisplayStart: 0,
  //     iDisplayLength: 50,
  //     mDataProp_0: 'rownum',
  //     mDataProp_1: 'companygoodsname',
  //     mDataProp_2: 'chemName',
  //     mDataProp_3: 'chemCas',
  //     mDataProp_4: 'wlzt',
  //     mDataProp_5: 'wzflTypeName',
  //     mDataProp_6: 'savemaxS',
  //     mDataProp_7: 'saveOneYearMaxS',
  //     sSearch: null,
  //     bRegex: false,
  //     sSearch_0: null,
  //     bRegex_0: false,
  //     bSearchable_0: true,
  //     sSearch_1: null,
  //     bRegex_1: false,
  //     bSearchable_1: true,
  //     sSearch_2: null,
  //     bRegex_2: false,
  //     bSearchable_2: true,
  //     sSearch_3: null,
  //     bRegex_3: false,
  //     bSearchable_3: true,
  //     sSearch_4: null,
  //     bRegex_4: false,
  //     bSearchable_4: true,
  //     sSearch_5: null,
  //     bRegex_5: false,
  //     bSearchable_5: true,
  //     sSearch_6: null,
  //     bRegex_6: false,
  //     bSearchable_6: true,
  //     sSearch_7: null,
  //     bRegex_7: false,
  //     bSearchable_7: true,
  //     iSortCol_0: 1,
  //     sSortDir_0: 'desc',
  //     iSortingCols: 1,
  //     bSortable_0: false,
  //     bSortable_1: false,
  //     bSortable_2: false,
  //     bSortable_3: false,
  //     bSortable_4: false,
  //     bSortable_5: false,
  //     bSortable_6: false,
  //     bSortable_7: false,
  //     companyId: 1635211991841260,
  //     appId: null
  //   }
  //   let max10 = [] // 风险源大于10的企业id
  //   let max20 = [] // 风险源大于20的企业id
  //   let min10 = [] // 风险源小于10的企业id
  //   let thingsList = [] // 风险源集合
  //   for(let i = 0; i < companyIdList.length; i ++) {
  //     if (companyIdList[i].dataValues.companyId) {
  //       console.log(companyIdList[i].dataValues.companyId)
  //       searchParam.companyId = companyIdList[i].dataValues.companyId
  //       let result = await axios({
  //         url:'http://hjyj.mee.gov.cn/SDHJYJ/action/riskSource/riskAllList',
  //         method: 'POST',
  //         data: searchParam
  //       }).then(response => {
  //         // if (response.data.aaData.length >= 11 && response.data.aaData.length <= 20) {
  //         //   // if (response.data.aaData.length >= 20) {
  //         //   //   console.log('->20-' + response.data.aaData[0].cId, i)
  //         //   //   max20.push(companyIdList[i].dataValues.companyId)
  //         //   //   return []
  //         //   // } else {
  //         //   //   console.log('->10-' + response.data.aaData[0].cId, i)
  //         //   //   max10.push(companyIdList[i].dataValues.companyId)
  //         //   //   return response.data.aaData
  //         //   // }
  //         //   console.log('-11-20-' + response.data.aaData[0].cId, i)
  //         //   max10.push(companyIdList[i].dataValues.companyId)
  //         //   return response.data.aaData
  //         // }
  //         //  if (response.data.aaData.length >= 21) {
  //         //   console.log('->20-' + response.data.aaData[0].cId, i)
  //         //   max20.push(companyIdList[i].dataValues.companyId)
  //         //   return []
  //         // } else {
  //         //   min10.push(companyIdList[i].dataValues.companyId)
  //         //   // return []
  //         //   return response.data.aaData
  //         // }
  //         if (response.data.aaData) {
  //           return response.data.aaData
  //         }
  //       })
  //       thingsList.push(...result)
  //     } else {
  //       return
  //     }
  //   }
  //   ctx.body = {
  //     total:thingsList.length,
  //     // max10,
  //     // max10length: max10.length,
  //     // min10,
  //     // min10length: min10.length,
  //     // max20,
  //     // max20length: max20.length,
  //     resultList: thingsList
  //   }

  //   // ctx.body = {
  //   //   result: companyIdList
  //   // }
  // }

  // 爬取企业应急物资数据
  // async getRiskSource(ctx, next) {
  //   console.log('进入方法')
  //   // 获取所有企业ID
  //   const companyIdList = await getCompanyId()
  //   // console.log(companyIdList[0].dataValues.companyId)
  //   axios.defaults.headers['content-type'] = 'application/x-www-form-urlencoded'
  //   axios.defaults.headers["Cookie"] = 'SECKEY_ABVK=qDu5Kk5pGIsLesAJfBT9fGl9QydyAyQCa2H6qazuNak%3D; JSESSIONID=37c1ec50-1ef1-435d-a57c-c45ed5ed4ed6; route_nx_net=cca1463e0a79aad56e3d194f2ea9d270; route_cas=cca1463e0a79aad56e3d194f2ea9d270; shiro.sesssion=a3feef9b-95fa-4f1a-8caa-216219762bc9; epf=6f5e9f18d6814351b75ed411ac060fc8; dzba=7ba6e55fcd405a9eae657d0d3e33c7a7'
  //   const searchParam = {
  //     sEcho: 1,
  //     iColumns: 6,
  //     sColumns: null,
  //     iDisplayStart: 0,
  //     iDisplayLength: 50,
  //     mDataProp_0: 'rownum',
  //     mDataProp_1: 'suppliesName',
  //     mDataProp_2: 'suppliesType',
  //     mDataProp_3: 'suppliesCount',
  //     mDataProp_4: 'suppliesPlace',
  //     mDataProp_5: 'cbk',
  //     sSearch: null,
  //     bRegex: false,
  //     sSearch_0: null,
  //     bRegex_0: false,
  //     bSearchable_0: true,
  //     sSearch_1: null,
  //     bRegex_1: false,
  //     bSearchable_1: true,
  //     sSearch_2: null,
  //     bRegex_2: false,
  //     bSearchable_2: true,
  //     sSearch_3: null,
  //     bRegex_3: false,
  //     bSearchable_3: true,
  //     sSearch_4: null,
  //     bRegex_4: false,
  //     bSearchable_4: true,
  //     sSearch_5: null,
  //     bRegex_5: false,
  //     bSearchable_5: true,
  //     iSortCol_0: 1,
  //     sSortDir_0: 'desc',
  //     iSortingCols: 1,
  //     bSortable_0: false,
  //     bSortable_1: false,
  //     bSortable_2: false,
  //     bSortable_3: false,
  //     bSortable_4: false,
  //     bSortable_5: false,
  //     companyId: 1635211991841260,
  //     appId: null
  //   }
  //   let max50 = [] // 应急物资大于50的企业id
  //   let thingsList = [] // 应急物资集合
  //   for(let i = 0; i < companyIdList.length; i ++) {
  //     if (companyIdList[i].dataValues.companyId) {
  //       console.log(companyIdList[i].dataValues.companyId)
  //       searchParam.companyId = companyIdList[i].dataValues.companyId
  //       let result = await axios({
  //         url:'http://hjyj.mee.gov.cn/SDHJYJ/action/emergencySupplies/getEmergencySupplies',
  //         method: 'POST',
  //         data: searchParam
  //       }).then(response => {
  //         if (response.data.aaData) {
  //           if (response.data.aaData.length > 50) {
  //             console.log(console.log('->50-' + response.data.aaData[0].cId, i))
  //             max50.push(companyIdList[i].dataValues.companyId)
  //           }
  //           return response.data.aaData
  //         }
  //       })
  //       thingsList.push(...result)
  //     } else {
  //       return
  //     }
  //   }
  //   ctx.body = {
  //     max50,
  //     max50length: max50.length,
  //     total:thingsList.length,
  //     resultList: thingsList
  //   }

  //   // ctx.body = {
  //   //   result: companyIdList
  //   // }
  // }

  // 爬取企业敏感目标数据
  async getRiskSource(ctx, next) {
    console.log('进入方法')
    // 获取所有企业ID
    const companyIdList = await getCompanyId()
    // console.log(companyIdList[0].dataValues.companyId)
    axios.defaults.headers['content-type'] = 'application/x-www-form-urlencoded'
    axios.defaults.headers["Cookie"] = 'JSESSIONID=9b0b0840-a298-4596-a157-c800be2e9ed9; SECKEY_ABVK=q8hKoEVB+9lMxRngkGMxk8uq+uZx6wbEfXlZwiTV1Yw%3D; route_nx_net=cca1463e0a79aad56e3d194f2ea9d270; route_cas=cca1463e0a79aad56e3d194f2ea9d270; shiro.sesssion=a3feef9b-95fa-4f1a-8caa-216219762bc9; epf=6f5e9f18d6814351b75ed411ac060fc8; dzba=7ba6e55fcd405a9eae657d0d3e33c7a7'
    const searchParam = {
      sEcho: 1,
      iColumns: 3,
      sColumns: null,
      iDisplayStart: 0,
      iDisplayLength: 10,
      mDataProp_0: 'rownum',
      mDataProp_1: 'targetName',
      mDataProp_2: 'mglx',
      sSearch: null,
      bRegex: false,
      sSearch_0: null,
      bRegex_0: false,
      bSearchable_0: true,
      sSearch_1: null,
      bRegex_1: false,
      bSearchable_1: true,
      sSearch_2: null,
      bRegex_2: false,
      bSearchable_2: true,
      iSortCol_0: 1,
      sSortDir_0: 'desc',
      iSortingCols: 1,
      bSortable_0: false,
      bSortable_1: false,
      bSortable_2: false,
      companyId: 1635211991841260,
      appId: null
    }
    let max10 = [] // 敏感目标大于10的企业id
    let thingsList = [] // 敏感目标集合
    for(let i = 0; i < companyIdList.length; i ++) {
      if (companyIdList[i].dataValues.companyId) {
        console.log(companyIdList[i].dataValues.companyId)
        searchParam.companyId = companyIdList[i].dataValues.companyId
        let result = await axios({
          url:'http://hjyj.mee.gov.cn/SDHJYJ/action/sensitivityTarget/getSensitivityTarget',
          method: 'POST',
          data: searchParam
        }).then(response => {
          if (response.data.aaData) {
            if (response.data.aaData.length >= 11) {
              console.log(console.log('->10-' + response.data.aaData[0].cId, i))
              max10.push(companyIdList[i].dataValues.companyId)
            }
            return response.data.aaData
          }
        })
        thingsList.push(...result)
      } else {
        return
      }
    }
    ctx.body = {
      max10,
      max10length: max10.length,
      total:thingsList.length,
      resultList: thingsList
    }

    // ctx.body = {
    //   result: companyIdList
    // }
  }
}

module.exports = new CompanyBaseInfoController()