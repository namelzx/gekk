// pages/home/order/detail/index.js
import {
  OrderModel
} from '../../../../api/order.js'

let orderModel = new OrderModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details: {},
    message: '',
    refundShow:false,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    orderModel.GetOrderIdByFind(options.id, res => {
      that.setData({
        details: res
      })
      console.log(that.data.details)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  clickToConfirm() {
    var that = this;
    let id = that.data.details.id
    var temp = {
      id,
      status: 4,
    }
    orderModel.GetIdByCancel(temp, res => {
      wx.reLaunch({
        url: '/pages/home/order/index',
      })
    })
  },

  Cancel() {
    let that = this;
    let id = that.data.details.id
    var temp = {
      id,
      status: 5,
    }
    orderModel.GetIdByCancel(temp, res => {
      wx.reLaunch({
        url: '/pages/home/order/index',
      })
    })
  },
  refund(){
  var that=this;
  that.setData({
    refundShow:true,
  })
  },

  onrefund(){
    var that=this;
   var temp={
     order_id:this.data.details.id,
     message: this.data.message
   }
   
    orderModel.GetIdByRefund(temp,res=>{
      wx.reLaunch({
        url: '/pages/home/order/index',
      })
      that.setData({
        refundShow:false,
      })

    })
  },

  inputrefund(e){
    this.setData({
      message: e.detail
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  OnDelete() {
    var that = this;
    orderModel.GetIdByDelete(that.data.details.id, res => {
      wx.redirectTo({
        url: '/pages/home/order/index',
      })
    })
  }
})