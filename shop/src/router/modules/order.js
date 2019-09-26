/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const orderRouter = {
    path: '/order',
    component: Layout,
    redirect: '/order',
    meta: {title: '订单', icon: 'dashboard'},

    children: [
      {
        path: 'index',
        component: () => import('@/views/order/index'),
        name: 'order',
        meta: {title: '订单查询', icon: 'dashboard'}
      },
      {
        path: 'orders/2',
        component: () => import('@/views/order/orders'),
        name: 'order',
        meta: {title: '待发货', icon: 'dashboard'}
      },
      {
        path: 'orders/3',
        component: () => import('@/views/order/orders'),
        name: 'order',
        meta: {title: '待收货', icon: 'dashboard'}
      },
      {
        path: 'orders/4',
        component: () => import('@/views/order/orders'),
        name: 'order',
        meta: {title: '租用中', icon: 'dashboard'}
      },
      {
        path: 'orders/5',
        component: () => import('@/views/order/orders'),
        name: 'order',
        meta: {title: '待结算', icon: 'dashboard'}
      },
      {
        path: 'orders/6',
        component: () => import('@/views/order/orders'),
        name: 'order',
        meta: {title: '已完成', icon: 'dashboard'}
      },
      {
        path: 'orders/9',
        component: () => import('@/views/order/orders'),
        name: 'order',
        meta: {title: '已取消', icon: 'dashboard'}
      },

      {
        path: 'orders/11',
        component: () => import('@/views/order/orders'),
        name: 'order',
        meta: {title: '续租订单', icon: 'dashboard'}
      },

      {
        path: 'buyout',
        component: () => import('@/views/order/buyout'),
        name: 'buyout',
        meta: {title: '买断订单', icon: 'dashboard'}
      },

      {
        path: 'detail/:id(\\d+)',
        component: () => import('@/views/order/detail'),
        name: 'detail',
        meta: {title: '查看订单详细', noCache: true, activeMenu: '/recruit/list'},
        hidden: true
      },
    ]
  }
export default orderRouter
