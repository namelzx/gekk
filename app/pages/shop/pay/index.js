// pages/pay/index.js
import Toast from '../../../vant-weapp/dist/toast/toast.js';

import { CouponsModel } from '../../../api/coupons.js'

let couponsModel = new CouponsModel();


import { ShopModel } from '../../../api/shop.js'

let shopmodel = new ShopModel();


import { OrderModel } from '../../../api/order.js'

let ordermodel = new OrderModel();


let app=getApp();


import {
  AddressModel
} from '../../../api/address.js'

let addressModel = new AddressModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[],
    user_id: 1,
    showAddress: false,  //显示/隐藏地址弹出层
    showTicket: false,   //显示/隐藏优惠券弹出层
    showTax: false,       //显示/隐藏发票弹出层
    taxList: ['不开具发票','开具发票'], // 选择是否开具发票
    taxResult: '不开具发票',  //是否开具发票的默认选择结果
    invList: ['个人', '单位'],  // 发票抬头
    invResult:'个人',   //发票抬头默认结果
    phone:'',   // 收票人手机
    email:'',   // 收票人邮箱
    info:['明细'],   //发票明细
    taxer:'', //单位名称
    taxNum:'',  // 纳税人识别号
    active: 0,  // 新增收货地址弹出层默认选项卡
    addressRadio: '',  //送货上门默认选择结果(用户选择之后则为选择结果)
    addressRadioList: [     // 送货上门地址
    ],  
    selfRadio:'',     // 门店自取默认选择结果 (用户选择之后则为选择结果)
    selfRadioList: [  // 门店自取地址
    ], 
    totalPrice:0,//总价
    ticketList: [     // 优惠券列表
    ],
    ticketRadio:undefined,  //优惠券默认结果
    coun:{
      isShow:false
    },//选择的优惠卷
    goods:[],
    iscoun:false,//是否使用优惠卷
    temp:{
      unit:'',//单位
      tax:'',//纳税号
      phone:'',//手机号码
      email:'',
    },
    isadd:0,//选择收货地址
    shop_id:0,//选择的店铺
    address_id:0,//选择的地址
    coupons_id:0,//选择的优惠卷
    totalPrice:'',//总价
  },

  onShow(){
    var that=this;
    addressModel.GetNewsByItems(app.globalData.user_id, res => {
      that.setData({
        addressRadioList: res.data
      })
    })
  },
  onLoad(e){
  
    var that=this;
    var loca = wx.getStorageSync('loca')
    shopmodel.GetShopByList(loca, res => {
      that.setData({
        selfRadioList:res
      })
    })
   
   
    if(e.type==='buy'){
     var goods=wx.getStorageSync('buy');
     that.setData({
       goods
     })
     var temp={
       user_id:that.data.user_id,
       id:goods[0].id
     }
      couponsModel.GetUserByCoupons(temp,res=>{
        console.log(res)
        that.setData({
          ticketList:res.data
        })
      })
      that.calTotalPrice();
    }

    if (e.type === 'cart') {
      var goods = wx.getStorageSync('cart');
      that.setData({
        goods
      })
      var temp = {
        user_id: that.data.user_id,
        id: goods[0].id
      }
      couponsModel.GetUserByCoupons(temp, res => {
        console.log(res)
        that.setData({
          ticketList: res.data
        })
      })
      that.calTotalPrice();
    }
  },
  // 显示隐藏优惠券弹出层
  onToggleTicket () {
    this.setData ({
      showTicket: !this.data.showTicket
    })
  },
  // 显示/隐藏发票弹出层
  onToggleTax () {
    this.setData({
      showTax: !this.data.showTax
    })
  },
  // 显示/隐藏地址弹出层
  onToggleAddress () {
    this.setData({
      showAddress: !this.data.showAddress
    })
  },
  // 是否开具发票
  onChangeTax(event) {
    this.setData({
      taxResult: event.detail
    });
    console.log(event.detail)
  },
  // 发票抬头
  onChangeInvoise (event) {
    this.setData({
      invResult: event.detail
    });
   
  },
  // 发票明细
  onChangeDetail (event) {
    this.setData({
      info: event.detail
    });
    console.log(event.detail)
  },
  // 优惠券选择
  onChangeTicket(event) {
    // this.setData({
    //   ticketRadio: event.detail
    // });
  },
  onClickTicket(event) {
    
    var that=this;
    that.calTotalPrice();
    const { name, info} = event.currentTarget.dataset;
    if (that.data.totalPrice > info.get_counpon.low_price){
      Toast('该商品不可用');
        return;
    }
    var sum = that.data.totalPrice - info.get_counpon.sub_price
    if(sum<0){
      sum=0;
    }
    info.isShow=true
    this.setData({
      ticketRadio: name,
      coun: info,
      totalPrice:sum,
      iscoun:true,
      showTicket: !this.data.showTicket
    });
  
    Toast.success('选择成功');
  },
  // 选择送货上门地址
  onChoiseAddress(event) {
    console.log(event.detail)
    var that=this;
    let addressRadio=1;
    for (let i = 0; i < that.data.addressRadioList.length;i++){
      if (that.data.addressRadioList[i].id = event.detail){
        addressRadio=i+1;
        break;
      }
    }
    this.setData({
      addressRadio: addressRadio,
      showAddress: !this.data.showAddress,
      selfRadio:'',
      address_id: event.detail,
      isadd:1,
    });
  },
  // 门店自取
  onSelfChange(event) {
    this.setData({
      showAddress: !this.data.showAddress,
      selfRadio: event.detail,
      addressRadio:'',
      isadd: 2,
    });
  },
  onSelfClick(event) {
    const { name, index } = event.currentTarget.dataset;
    this.setData({
      showAddress: !this.data.showAddress,
      selfRadio: index+1,
      addressRadio: '',
      shop_id:name,
      isadd: 2,
    });
  },

   calTotalPrice: function () {
     var carArray = this.data.goods;
    var totalPrice = 0;
    var totalCount = 0;
    for (var i = 0; i < carArray.length; i++) {
      totalPrice += parseFloat(carArray[i].price) * carArray[i].num;
      console.log(totalPrice)
    }
    this.setData({
      totalPrice: totalPrice,
    });
  },
  handelunit(e){
    var that=this;
    that.data.temp.unit = e.detail
  },
  handelTax(e){
    
    var that = this;
    that.data.temp.tax = e.detail
  },
  handelPhone(e) {
    var that = this;
    that.data.temp.phone = e.detail
  },
  handelEmail(e) {
    var that = this;
    that.data.temp.email = e.detail
  },
  /**
   * 支付
   */
  onPay(){
    var that=this;
    if(that.data.isadd===0){
      Toast('请先选择收货方式');
      return ;
    }
    var temp={
      goods: that.data.goods,//当前购买商品
      order:{},//订单基本信息
      invoice:that.data.temp//发票信息
    }
    if (that.data.taxResult !=='不开具发票'){
       temp.order.isInvoice=1;//开发票
      if (that.data.invResult==='个人'){//个人填写发票
        temp.invoice.isinv=1;//1是个人填写发票
      }else{
        temp.invoice.isinv = 2;//2是单位填写发票 如果单位填写发票需要填写单位
        if(that.data.temp.unit===''){
          Toast('请填写单位');
          return
        }
        if (that.data.temp.tax === '') {
          Toast('请填写纳税人识别号');
          return 
        }
      }
      if (that.data.temp.phone === '') {
        Toast('请填写手机号码');
        return
      }
      if (that.data.temp.email === '') {
        Toast('请填写邮箱');
        return
      }
    }
    temp.order.user_id=that.data.user_id
    if (that.data.iscoun===true){//使用优惠卷
      temp.order.coupons_id = that.data.coun.id
    }
    if (that.data.taxResult==='不开具发票'){
      temp.order.isinvoice=2//不开具发票
    }else{
      temp.order.isinvoice = 1//开发票
    }
    if (that.data.isadd===1){
      temp.order.isadd=1
      temp.order.address_id=that.data.address_id
    }
    if (that.data.isadd === 2) {
      temp.order.isadd = 2
      temp.order.shop_id = that.data.shop_id
    }
    ordermodel.PostOrderByData(temp,res=>{
      console.log(res)
      wx.navigateTo({
        url: '/pages/home/order/index',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    })
  },
  //计算总价
  calTotalPrice: function () {
    var carArray = this.data.goods;
    var totalPrice = 0;
    var totalCount = 0;
    for (var i = 0; i < carArray.length; i++) {
      totalPrice += carArray[i].price * carArray[i].num;
      totalCount += carArray[i].num
    }
    console.log(totalPrice)
    console.log(totalCount)
    this.setData({
      totalPrice: totalPrice,
      // totalCount: totalCount,
      //payDesc: this.payDesc()
    });
  },
  addMoreAddress() {
    wx.navigateTo({
      url: '/pages/component/new/index',
    })
  }

})