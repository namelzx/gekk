// pages/home/order/index.js

let app = getApp();
import {
  OrderModel
} from '../../../api/order.js'

let orderModel = new OrderModel();
Page({

  onLoad(options) {
    var that = this;
    let index = options.index
    if(index>0){
      that.data.listQuery.status=index
    }
    that.getOrder();
    this.setData({
      active: index
    })
  },
  /**
   * 页面的初始数据
   * @status 订单状态， 1已完成，2待付款，3待收货，4已取消
   */
  data: {
    listQuery: {
      limit: 5,
      page: 1,
    },
    active: 0, //选项卡初始位置（下标)
    orderList: [
    ]
  },
  // 切换选项卡
  onChange(event) {
  
    var index = event.detail.index
    if(index>0){
      this.data.listQuery.status=index
    }else{
      this.data.listQuery.status=undefined
    }
    this.getOrder();
  },
  getOrder(){
    var that = this;
    that.data.listQuery.user_id = app.globalData.user_id
    orderModel.GetUserByOrder(that.data.listQuery, res => {
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
    let id = e.detail
    var temp = {
      id,
      status: 4,
    }
    orderModel.GetIdByCancel(temp, res => {
      console.log(res)
    })
  },
  // 取消订单
  clickToCancel(e) {
    let id=e.detail
    var temp={
      id,
      status:5,
    }
    orderModel.GetIdByCancel(temp,res=>{
      console.log(res)
    })
  },
  // 去支付
  clickToPay(e) {
    console.log(e)

  }
})