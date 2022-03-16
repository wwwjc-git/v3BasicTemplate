import Layout from '../views/layout/index.vue'

const _import = (file) => import(`../views/${file}.vue`)

/**
  * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
  * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
  *                                if not set alwaysShow, only more than one route under the children
  *                                it will becomes nested mode, otherwise not show the root menu
  * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
  * name:'router-name'             the name is used by <keep-alive> (must set!!!)
  * meta : {
      roles: ['admin','editor']     will control the page roles (you can set multiple roles)
      title: 'title'               the name show in submenu and breadcrumb (recommend set)
      icon: 'svg-name'             the icon show in the sidebar,
      noCache: true                if true ,the page will no be cached(default is false)
    }
 */
export const constantRouterMap = [ // 静态路由配置
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('error/404'), hidden: true },
  { path: '/401', component: _import('error/401'), hidden: true },
  {
    hidden: true,
    path: '',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: '/home',
        component: _import('home/index'),
        name: 'home',
        meta: { title: '首页', icon: 'fa-home', noCache: true }
      }
    ]
  }
]

export const asyncRouterMap = [ // 动态路由配置
  // {
  //   path: '/district',
  //   component: AdminLayout,
  //   meta: { title: '行政区划' },
  //   redirct: '/district/index',
  //   children: [{
  //     path: 'index',
  //     component: _import('district/index'),
  //     name: 'district',
  //     meta: {
  //       title: '行政区划',
  //       icon: 'fa-chart-area',
  //       roles: ['admin']
  //     }
  //   }]
  // },

  { path: '*', redirect: '/404', hidden: true }
]
