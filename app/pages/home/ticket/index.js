// pages/home/ticket/index.js
import Toast from './../../../vant-weapp/dist/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ticketList: [ // 优惠券列表
      {
        id: '1',
        isp: '2019.5.23', // 优惠券开始时间
        exp: '2019.6.30', // 优惠券过期时间
        discount: '500', //优惠金额
        condition: '2500', // 满足条件使用(满2500元使用)
        isActive: true // 是否还能领取 true为可以领取，false为不可领取
        // code
      },
      {
        id: '2',
        isp: '2019.3.2', // 优惠券开始时间
        exp: '2020.6.1', // 优惠券过期时间
        discount: '100', //优惠金额
        condition: '500', // 满足条件使用(满500元使用)
        isActive: false // 是否还能领取 true为可以领取，false为不可领取
        // code
      }
    ],

  },
  // 立即领取按钮
  getTicket(e) {
    /**
     * 这里有个问题：前端页面 “立刻领取” 按钮的颜色状态是
     * 根据字段“isActive” 的true/fasle 控制的;但是考虑
     * 到点击之后,  只是单纯修改本地的“isActice” 状态,并没有修改到
     * 后端的数据。 所以这里剩下的操作由你发挥了。
     */
    let id = e.currentTarget.dataset.id   // 所点击优惠券的id
    let status = e.currentTarget.dataset.status // 所点击优惠券的状态
    console.log(id, status)
    if (status !== true) {
      Toast.fail("已经领过了:" + id)
    }else {
      Toast("领取成功:" + id)
    }
    // Todo
  }
})