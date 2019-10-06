import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import tableRouter from './modules/table'
import orderRouter from './modules/order'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [

  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },

/**
 * 商品
 */
  {
    path: '/goods',
    component: Layout,
    redirect: 'goods',
    meta: { title: '商品管理', icon: 'international' },
    children: [
      {
        path: 'goods',
        component: () => import('@/views/goods/index'),
        name: 'goods',
        meta: { title: '商品管理', icon: 'international' }
      },
      {
        path: 'create',
        component: () => import('@/views/goods/create'),
        name: 'creategoods',
        meta: { title: '添加商品', icon: 'international' }
      },
      {
        path: 'category',
        component: () => import('@/views/goods/category'),
        name: 'category',
        meta: { title: '商品分类', icon: 'international' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/goods/edit'),
        name: 'editgoods',
        hidden: true,
        meta: { title: '编辑商品', icon: 'international' }
      }
    ]
  },
/**
 * 文章
 */
  {
    path: '/article',
    component: Layout,
    redirect: 'article',
    meta: { title: '内容管理', icon: 'international' },
    children: [
      {
        path: 'article',
        component: () => import('@/views/article/index'),
        name: 'article',
        meta: { title: '文章管理', icon: 'international' }
      },
      {
        path: 'banner',
        component: () => import('@/views/article/banner'),
        name: 'banner',
        meta: { title: '店铺轮播', icon: 'international' }
      },
      {
        path: 'create',
        component: () => import('@/views/article/create'),
        name: 'createarticle',
        meta: { title: '添加文章', icon: 'international' }
      },
    
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/article/edit'),
        name: 'editarticle',
        hidden: true,
        meta: { title: '编辑文章', icon: 'international' }
      }
    ]
  },
  {
    path: '/coupon',
    component: Layout,
    redirect: 'coupon',
    meta: { title: '优惠卷管理', icon: 'international' },
    children: [
      {
        path: 'coupon',
        component: () => import('@/views/coupon/index'),
        name: 'coupon',
        meta: { title: '优惠卷列表', icon: 'international' }
      },
      {
        path: 'createcoupon',
        component: () => import('@/views/coupon/createcoupon'),
        name: 'createcoupon',
        meta: { title: '添加优惠卷', icon: 'international' }
      },
      {
        path: 'couponedit/:id(\\d+)',
        component: () => import('@/views/coupon/editcoupone'),
        name: 'couponedit',
        hidden: true,
        meta: { title: '编辑优惠卷', icon: 'international' }
      }
    ]
  },
  orderRouter,

  {
    path: '/courier',
    component: Layout,
    redirect: '/courier',
    children: [
      {
        path: 'courier',
        component: () => import('@/views/courier/index'),
        name: 'courier',
        meta: {title: '快递管理', icon: 'dashboard', affix: true}
      },
    ]
  },
  {
    path: '/config',
    component: Layout,
    redirect: '/config',
    children: [
      {
        path: 'config',
        component: () => import('@/views/config/index'),
        name: 'config',
        meta: {title: '店铺配置', icon: 'dashboard', affix: true}
      },
    ]
  },
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/page',
  //   alwaysShow: true, // will always show the root menu
  //   name: 'Permission',
  //   meta: {
  //     title: 'permission',
  //     icon: 'lock',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'page',
  //       component: () => import('@/views/permission/page'),
  //       name: 'PagePermission',
  //       meta: {
  //         title: 'pagePermission',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     },
  //     {
  //       path: 'directive',
  //       component: () => import('@/views/permission/directive'),
  //       name: 'DirectivePermission',
  //       meta: {
  //         title: 'directivePermission'
  //         // if do not set roles, means: this page does not require permission
  //       }
  //     },
  //     {
  //       path: 'role',
  //       component: () => import('@/views/permission/role'),
  //       name: 'RolePermission',
  //       meta: {
  //         title: 'rolePermission',
  //         roles: ['admin']
  //       }
  //     }
  //   ]
  // },

  // {
  //   path: '/icon',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/icons/index'),
  //       name: 'Icons',
  //       meta: { title: 'icons', icon: 'icon', noCache: true }
  //     }
  //   ]
  // },

  /** when your routing map is too long, you can split it into small modules **/

  // tableRouter,

  // {
  //   path: '/i18n',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/i18n-demo/index'),
  //       name: 'I18n',
  //       meta: { title: 'i18n', icon: 'international' }
  //     }
  //   ]
  // },

  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
