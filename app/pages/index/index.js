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
    p_id:0,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onLoad: function(e) {
   
    var that=this;
    var p_id=0;
    if(e.p_id!==undefined){
      p_id = e.p_id;
    }

    wx.login({
      success: res => {
        res.p_id = p_id
        usermodel.postRegistered(res, res => {
          if (res.avatarUrl === null) {
            res.avatarUrl = '../../static/images/shop-logo-1.png',
              res.nickName = '游客'
          }
          this.setData({
            userInfo: res
          })
          app.globalData.user_id = res.id
          wx.setStorageSync('userinfo', res)
        })
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  onShow(){
    var that=this;
    commonModel.getPlat(res => {
        wx.setStorageSync('logo', res.logo)
    })
   
    wx.getLocation({
      success: function (locatlres) {
        wx.setStorageSync('loca', locatlres)
        let area_code= wx.getStorageSync('area_code')
        if (wx.getStorageSync('area_code')!==null){
          locatlres.area_code = area_code
        }
        shopmodel.GetShopByList(locatlres,res=>{
          wx.setStorageSync('shopbaner', res.banner)
          wx.setStorageSync('arbaner', res.arbaner)

          let dist = res.dist;

          if (wx.getStorageSync('dist').length>1) {
            dist = wx.getStorageSync('dist') 
          }else{
            wx.setStorageSync('dist', res.dist)
          }
          that.setData({
            avatarList:res.data,
            dist
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
  tomap(){
    wx.navigateTo({
      url: '/pages/home/map/index' 
    })
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**
  * 用户点击右上角分享
  */
  onShareAppMessage: function (e) {
    return {
      title: "我发现一个不错的小程序",
      path: "/pages/index/index?p_id="+app.globalData.user_id
    }
  }
})