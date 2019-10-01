/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const IntegralRouter =   {
    path: '/integral',
    component: Layout,
    redirect: 'integral',
    meta: { title: '积分商品管理', icon: 'international' },
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
        meta: { title: '编辑商品', icon: 'international' }
      }
    ]
  }
export default IntegralRouter
