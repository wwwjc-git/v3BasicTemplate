/**
 * 注意：当前注释说明供学习框架使用，实际开发建议删除
 * utils/request对axios进行了封装，在当前模块进行引入使用
 * 当前页面提供了get/post/delete三种请求方式的示例供参考
 */

import request from '@/utils/request'

export default {
  /**
   * 登陆接口，等待store/user模块promise调用
   * @param params 入参：{name: '小汪', password: 'xw12345'}
   * @returns {*} promise对象
   */
  login (params) {
    return request.post('/auth/credentials', {
      params
    })
  },
  /**
   * 获取用户信息接口，等待store/user模块promise调用
   * @returns {*}
   * @param params 入参：{userId: 'ABCHSKAHKHCHJSHHA05'}
   */
  getUserInfo (params) {
    return request.get('/account/user', {
      params: {
        ...params
      }
    })
  },
  /**
   * 登出接口，等待store/user模块promise调用
   * @returns {*}
   */
  logout () {
    return request.post('/auth/logout')
  },
  /**
   * 将当前用户从系统中删除接口，等待store/user模块promise调用
   * @param userId
   * @returns {*}
   */
  deleteUser (userId) {
    return request.delete('/account/user', {
      data: { userId }
    })
  }
}
