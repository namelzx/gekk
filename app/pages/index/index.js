//index.js
//获取应用实例
const app = getApp()
import { ShopModel } from '../../api/shop.js'

let shopmodel = new ShopModel();


import { UserModel } from '../../api/user.js'

let usermodel = new UserModel();



import {
  CommonModel
} from '../../api/common.js'

let commonModel = new CommonModel();

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
   
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    avatarList: [
    ],
    dist:'',
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
    commonModel.getPlat(res => {
        wx.setStorageSync('logo', res.logo)
    })
    wx.login({
      success: res => {
        usermodel.postRegistered(res,res=>{
          this.setData({
            userInfo:res
          })
          app.globalData.user_id=res.id
          wx.setStorageSync('userinfo', res)
        })
        console.log(res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    wx.getLocation({
      success: function (locatlres) {
        wx.setStorageSync('loca', locatlres)
        shopmodel.GetShopByList(locatlres,res=>{
          wx.setStorageSync('dist',res.dist)
          wx.setStorageSync('shopbaner', res.banner)
          wx.setStorageSync('arbaner', res.arbaner)
          that.setData({
            avatarList:res.data,
            dist:res.dist
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