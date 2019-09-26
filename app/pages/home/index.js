// pages/home/index.js
import Toast from './../../vant-weapp/dist/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 前往我的积分
  goIntegral() {
    wx.navigateTo({
      url: './score/index',
    })
  },
  // 前往分销中心
  goRetail() {
    wx.navigateTo({
      url: './distributor/index',
    })
  },
  // 前往个人资料
  goProfile() {
    wx.navigateTo({
      url: './profile/index'
    })
  },
  // 前往会员特权
  goVip() {
    wx.navigateTo({
      url: './vip/index'
    })
  },
  // 前往我的订单
  goMyOrder(e) {
    let index = e.currentTarget.dataset.index
    wx.navigateTo({
      url: './order/index?index=' + index
    })
  },
  // 前往我的地址
  goMyAddress() {
    wx.navigateTo({
      url: './address/index'
    })
  },
  // 前往领券中心
  goGetTicket() {
    wx.navigateTo({
      url: './ticket/index'
    })
  },
  // 我的优惠券
  goMyTicket () {
    wx.navigateTo({
      url: './ticket/myTicket/index'
    })
  }
})