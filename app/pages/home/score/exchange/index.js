// pages/home/score/exchange/index.js
import Toast from './../../../../vant-weapp/dist/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    signIn: false,
    active: 0, //选项卡初始位置（下标)
    orderList: [
      {
      id: '1',
      img_url: './../../../../static/images/rate-img-2.png',
      name: '格米莱（GEMILAI）咖啡机家用意式半自动 泵压式 不锈钢',
      amount: '1',
      price: '1499.00',
      status: 1
    },
    {
      id: '2',
      img_url: './../../../../static/images/rate-img-2.png',
      name: '格米莱（GEMILAI）咖啡机家用意式半自动 泵压式 不锈钢',
      amount: '1',
      price: '1499.00',
      status: 3
    },
    {
      id: '3',
      img_url: './../../../../static/images/rate-img-2.png',
      name: '格米莱（GEMILAI）咖啡机家用意式半自动 泵压式 不锈钢',
      amount: '1',
      price: '1499.00',
      status: 2
    },
    {
      id: '4',
      img_url: './../../../../static/images/rate-img-2.png',
      name: '格米莱（GEMILAI）咖啡机家用意式半自动 泵压式 不锈钢',
      amount: '2',
      price: '1499.00',
      status: 4
    },
      {
        id: '5',
        img_url: './../../../../static/images/rate-img-2.png',
        name: '格米莱（GEMILAI）咖啡机家用意式半自动 泵压式 不锈钢',
        amount: '2',
        price: '1499.00',
        status: 4
      },
    ]
  },
  signIn() {
    if (!this.data.signIn) {
      Toast('签到成功，积分+1');
      this.setData({
        signIn: true
      })
    } else {
      Toast('今天已经签到过啦！明天再来把～');
    }
  },
  // 切换选项卡
  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.index + 1}`,
      icon: 'none'
    });
  },
  // 订单详情
  goOrderDetail() {
    wx.navigateTo({
      url: './detail/index',
    })
  },
  // 评价晒单
  clickToRate() {

  },
  // 再次购买
  clickToBuy() {

  },
  // 查看物流
  clickToCheckDeliver() {

  },
  // 申请退款
  clickToRefund() {

  },
  // 确认收货
  clickToConfirm() {

  },
  // 取消订单
  clickToCancel() {

  },
  // 去支付
  clickToPay() {

  }
})