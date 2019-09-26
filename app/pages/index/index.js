//index.js
//获取应用实例
const app = getApp()
import { ShopModel } from '../../api/shop.js'

let shopmodel = new ShopModel();

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
   
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    avatarList: [
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
 
  },
  onShow(){
    var that=this;
    wx.getLocation({
      success: function (locatlres) {
        wx.setStorageSync('loca', locatlres)
        shopmodel.GetShopByList(locatlres,res=>{
          that.setData({
            avatarList:res
          })
          
        })
      },
    })
  },
  toShop(e){
  
   wx.navigateTo({
     url: '/pages/shop/index?id=' + e.currentTarget.dataset.id,
   })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})