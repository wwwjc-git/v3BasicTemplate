import { createRouter, createWebHashHistory } from "vue-router";
import { constantRouterMap } from './router-map'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRouterMap
})

const whiteList = ['/login', '/home'] // no redirect whitelist

router.beforeEach((to, from, next) => {
  console.log(`before: from:${from.path}, to:${to.path}`)
  NProgress.start()
  if (to.matched.length === 0) { // 当前没有匹配到路由 进入404页面
    next('/404')
  } else {
    if (getToken()) {
      if (to.path === '/login') {
        NProgress.done()
        next()
      } else {
        // if (store.getters.roles.length === 0) {
        //   store.dispatch(userTypes.GET_USER_INFO).then(user => { // 拉取user_info
        //     const roles = [user.role]
        //     // 根据roles权限生成可访问的路由表
        //     store.dispatch(permTypes.GEN_ROUTES, { roles }).then(() => {
        //       router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
        //       next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
        //     })
        //   }).catch((err) => {
        //     console.log(err)
        //     store.dispatch(userTypes.LOGOUT).then(() => {
        //       Message.error('请重新登录')
        //       next({ path: '/login' })
        //     })
        //   })
        // }
        next()
      }
    } else {
      if (whiteList.indexOf(to.path) !== -1) {
        next()
      } else {
        next({ path: '/login' })
      }
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router