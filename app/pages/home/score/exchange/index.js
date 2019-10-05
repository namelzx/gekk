// pages/home/score/exchange/index.js
import Toast from './../../../../vant-weapp/dist/toast/toast';
let app=getApp();

import {
  IntOrderModel
} from './../../../../api/IntOrder.js';

let intOrderModel = new IntOrderModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    signIn: false,
    active: 0, //选项卡初始位置（下标)
    listQuery:{
      limit:20,
      page:1,

    },
    orderList: [
      
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
  onShow(){
    var temp={
      user_id: app.globalData.user_id
    }
    var that=this;
    that.data.listQuery.user_id=app.globalData.user_id
    intOrderModel.GetUserByOrder(that.data.listQuery,res=>{
      console.log(res)
      that.setData({
        orderList:res.data
      })
    })
  },
  // 切换选项卡
  onChange(event) {

    var that = this;
    var index = event.detail.index;

    that.data.listQuery.user_id = app.globalData.user_id
    that.data.listQuery.status = index+1
    if (that.data.listQuery.status==1){
      that.data.listQuery.status=0
    }
    intOrderModel.GetUserByOrder(that.data.listQuery, res => {
      console.log(res)
      that.setData({
        orderList: res.data
      })
    })
 
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
  clickToConfirm(e) {
    var temp = {
      order_id: e.detail,
      user_id: app.globalData.user_id,
      status: 4
    }
    intOrderModel.GetIdByCancel(temp, res => {
      console.log(res)
    })
  },
  // 取消订单
  clickToCancel(e) {
    var temp={
        order_id:e.detail,
        user_id:app.globalData.user_id,
        status:5
    }
    intOrderModel.GetIdByCancel(temp,res=>{
      console.log(res)
    })
  },
  // 去支付
  clickToPay() {

  }
})