// pages/goods/index.js

import Toast from './../../vant-weapp/dist/toast/toast.js'
import areaList from './../area.js'
import {
  ShopModel
} from '../../api/shop.js'

let shopmodel = new ShopModel();

import {
  CouponsModel
} from '../../api/coupons.js'

let couponsModel = new CouponsModel();


import {
  CityModel
} from '../../api/city.js'

let citymodel = new CityModel();


var WxParse = require('../../wxParse/wxParse.js');


Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图
    detailed: {},
    imgUrls: [],
    images_url:'',
    user_id: 1,
    // 评论数据
    ratings: [
    ],
    totalCount:0,
    indicatorDots: false,
    autoplay: true,
    interval: 2000,
    duration: 100,
    star: 4, // 用户评论星数
    cart: 12, // 加入购物车商品数量
    showBargin: false, // 隐藏/显示促销方式
    showItem: false, // 隐藏/显示商品属性
    showAddres: false, // 隐藏/显示地址选项

    isBargin: true, // 是否有促销活动
    isChoosed: false, // 用户是否选择了商品
    isAddress: false, // 用户是否选择了地址
    noPostFee: false, // 是否需要运费
    checked: true,
    isArea: false,
    list: ['不锈钢', '铁板', '金板'],
    suk: [],
    suk_id: 0, //所选suk
    num: 1,
    result: [],
    areaList: areaList,
    provinces: '请选择',
    pr_code: '',
    areainfo: '', //详细地址
    carArray: [], //购物车商品

    city: '',
    city_code: '',
    area: '',
    city_list: [],

  },
  onLoad(option) {

    var that = this;
    that.calTotalPrice();
   
    shopmodel.GetIdGoodsByInfo(option.id, res => {
      res.suk_name = res.suk[0].name
      res.price = res.suk[0].price

      that.setData({
        detailed: res,
        imgUrls: res.banner,
        suk: res.suk,
        images_url: res.suk[0].images_url,
        
        suk_id: res.suk[0].id
      })
      that.data.detailed.count=0;
      WxParse.wxParse('article', 'html', res.content, that, 5);
    })
    citymodel.getProvinces(res => {
      that.setData({
        city_list: res
      })
    })
  },

  // 促销优惠券
  moreBargin() {
    this.setData({
      showBargin: true
    })
  },
  handelsuk(e) {
    var that = this;
    var index = e.currentTarget.dataset.index
    var data = that.data.detailed;
    data.suk_name = data.suk[index].name
    data.price = data.suk[index].price
    images_url: data.suk[index].images_url,
    that.setData({
      suk_id: e.currentTarget.dataset.id,
      num: 1,
      detailed: data
    })

  },
  onCloseBargin() {
    this.setData({
      showBargin: false
    });
  },
  // 商品属性
  moreItem() {
    this.setData({
      showItem: true,
      isChoosed: true
    })
  },
  onCloseItem() {
    this.setData({
      showItem: false
    });
  },
  // 配送地址
  moreAddress() {
    this.setData({
      showAddress: true,
      isAddress: true
    })
  },
  onCloseAddress() {
    this.setData({
      showAddress: false
    })
  },
  // 查看全部评论
  openAllRatings() {
    console.log('查看全部评论')
  },
  // 选择优惠券
  chosedTicket(e) {
    var that = this;
    var temp = {
      coupon_id: e.currentTarget.dataset.id,
      user_id: that.data.user_id,
    }

    couponsModel.PostUserCoupon(temp, res => {
      Toast(res.message)
    })


    this.onCloseBargin()
  },
  // 数量步进器
  onChange(event) {
    this.setData({
      num: event.detail
    })
  },

  // 颜色
  onChecked(event) {
    this.setData({
      result: event.detail
    });
    console.log(this.data.result)
  },

  handelProvinces(e) {
    var that = this;
    var level = e.currentTarget.dataset.level
    if (level == 1) {
      that.getCity(e);
    }
    if (level == 2) {
      that.getArea(e);
    }
    if (level == 3) {
      that.setData({
        area: e.currentTarget.dataset.name,
        city_list: [],
        isArea: true,
        showAddress: false,
        areainfo: that.data.provinces + that.data.city + e.currentTarget.dataset.name
      })
    }

  },
  getCity(e) {
    var that = this;
    var area_code = e.currentTarget.dataset.area_code
    citymodel.getCity(area_code, res => {
      that.setData({
        provinces: e.currentTarget.dataset.name,
        city_list: res,
        pr_code: area_code
      })
    })
  },
  //点击城市
  handeCity() {
    var that = this;
    citymodel.getCity(that.data.pr_code, res => {
      that.setData({
        city_list: res,
        city: '请选择',
        area: ''
      })
    })
  },
  //点击区域。
  handeArea() {
    var that = this;
    citymodel.getArea(that.data.city_code, res => {
      that.setData({
        city_list: res,
        area: '请选择',

      })
    })
  },
  getArea(e) {
    var that = this;
    var area_code = e.currentTarget.dataset.area_code
    citymodel.getArea(area_code, res => {
      that.setData({
        city: e.currentTarget.dataset.name,
        city_list: res,
        city_code: area_code,
      })
    })
  },

  // 打开商铺
  openShop() {
    wx.navigateBack({
      
    })
  },
  // 打开购物车 
  openCart() {
    wx.navigateTo({
      url: '/pages/cart/index',
    })
  },
  // 加入购物车
  addToCart() {
    Toast('添加成功');
    this.addCart();
  },
  // 立即购买
  purchase() {
    this.addBuy();
      wx.navigateTo({
        url: '/pages/shop/pay/index?type=buy',
      })
  },
  addBuy(){
    var that = this;
    var num = that.data.num; //数量
    var price = this.data.detailed.price; //当前商品价格
    var goods_id = that.data.detailed.id; //当前商品id
    var suk_id = that.data.suk_id //选择的suk
    var suk_name = that.data.detailed.suk_name //选择的suk信息
    var images_url = that.data.images_url

    var name = that.data.detailed.name;
    var obj = {
      goods_id: goods_id,
      num: num,
      name: name,
      suk_name: suk_name,
      suk_id: suk_id,
      price,
      images_url
    };
    var carArray1 =[];
    carArray1.push(obj);
    wx.setStorageSync('buy', carArray1)
    this.setData({
      carArray: carArray1,
    })
  },
  addCart(){
    var that = this;
    var num =  that.data.num; //数量
    var price = this.data.detailed.price; //当前商品价格
    var goods_id = that.data.detailed.id; //当前商品id
    var suk_id = that.data.suk_id //选择的suk
    var suk_name = that.data.detailed.suk_name //选择的suk信息
    var images_url = that.data.images_url
    var name = that.data.detailed.name;
    var mark = 'a' + goods_id + 'b' + suk_id
    var obj = {
      goods_id: goods_id,
      num: num,
      name: name,
      suk_name: suk_name,
      suk_id: suk_id,
      price,
      images_url,
      mark
    };
    var carArray1 = this.data.carArray.filter(item => item.mark != mark)
    carArray1.push(obj)
    wx.setStorageSync('cart', carArray1)
    this.setData({
      carArray: carArray1,
    })
  

  },
  calTotalPrice: function () {

    var carArray = this.data.carArray;
    if (carArray.length < 1) {
      carArray = wx.getStorageSync('cart')
    }
    var totalPrice = 0;
    var totalCount = 0;
    for (var i = 0; i < carArray.length; i++) {
      totalPrice += carArray[i].price * carArray[i].num;
      totalCount += carArray[i].num
    }
    console.log(totalCount)
    this.setData({
      totalPrice: totalPrice,
      totalCount: totalCount,
      carArray

      //payDesc: this.payDesc()
    });
  },
})