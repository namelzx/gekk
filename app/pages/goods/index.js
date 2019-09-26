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
    ratings: [{
        id: "01",
        username: "李先生",
        avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568441257&di=51141b3beb9703bba100f9cbb63439e4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2019-01-31%2F214531458.png",
        star: 4,
        content: "一分价钱一分货，不变的真理。一周前买了个500的玩具机，号称20Bar压力，实际用的是51㎜增压粉碗，造成假油脂的假象，用两天就退货了！",
        rateImg: [
          '../../../static/images/rate-img-1.png',
          '../../../static/images/rate-img-2.png',
          '../../../static/images/rate-img-3.png',
        ]
      },
      {
        id: "02",
        username: "林小姐",
        avatar: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=437857768,3973195470&fm=26&gp=0.jpg",
        star: 5,
        content: "店家送的咖啡豆味道和油脂都很好，也很香。咖啡机也很给力，有一种以前在咖啡馆做吧台的感觉，就是对蒸汽喷头的出气量还不太熟悉...",
        rateImg: [
          '../../../static/images/rate-img-1.png',
          '../../../static/images/rate-img-2.png',
          '../../../static/images/rate-img-3.png',
        ]
      }
    ],
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
    Toast.success("打开商铺")
  },
  // 打开购物车 
  openCart() {
    Toast.success("打开购物车")
  },
  // 加入购物车
  addToCart() {
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
    var obj = {
      goods_id: goods_id,
      num: num,
      name: name,
      suk_name: suk_name,
      suk_id: suk_id,
      price,
      images_url
    };
    var carArray1 = this.data.carArray.filter(item => item.suk_id != suk_id)
    carArray1.push(obj)
    wx.setStorageSync('cart', carArray1)
    this.setData({
      carArray: carArray1,
    })
  

  }
})