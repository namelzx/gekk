/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const IntegralRouter =   {
    path: '/integral',
    component: Layout,
    redirect: 'integral',
    meta: { title: '积分管理', icon: 'international' },
    children: [
      {
        path: 'integral',
        component: () => import('@/views/integral/index'),
        name: 'integral',
        meta: { title: '商品管理', icon: 'international' }
      },
      {
        path: 'create',
        component: () => import('@/views/integral/create'),
        name: 'createintegral',
        meta: { title: '添加商品', icon: 'international' }
      },
     
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/integral/edit'),
        name: 'editintegral',
        hidden: true,
        meta: { title: '积分订单', icon: 'international' }
      },


      {
        path: 'orderedit/:id(\\d+)',
        component: () => import('@/views/integral/OrderDetail'),
        name: 'orderedit',
        hidden: true,
        meta: { title: '查看订单', icon: 'international' }
      },

      {
        path: 'order',
        component: () => import('@/views/integral/order'),
        name: 'orderintegral',
        meta: { title: '积分订单', icon: 'international' }
      }
    ]
  }
export default IntegralRouter
