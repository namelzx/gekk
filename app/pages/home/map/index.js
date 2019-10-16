// pages/index/map/index.js

const app = getApp()

import areaList from './../../area.js'

import {
  ShopModel
} from '../../../api/shop.js'

let shopmodel = new ShopModel();

import {
  CityModel
} from '../../../api/city.js'

let citymodel = new CityModel();


Page({
  /**
   * 页面的初始数据
   * @showType: false列表，true地图。
   * @currentBtnId: 默认为1。 点击地图图标
   *    后触发markerTap方法，将图标的id值赋值
   *    给currenBtnId，然后使用currentBtnId作为
   *    shopList的下标(页面中写法"{{shopList[currentBtnId-1].code}}")，显示对应    *    id的商铺
   */
  data: {
    currentBtnId: 0, //  下标
    showType: true, // 决定门店以列表/地图形式展示
    shopCard: [
      
    ], //视图为列表时的商铺列表
    shopList: [
      
    ], // 视图为地图时的店铺列表
    areaList: areaList, //地区列表
    showCityPop: false, //城市弹出层
    cityMsg: '', //城市选中值
    showAreaPop: false, //地区弹出层
    areaMsg: '', //地区选中值
    city_list:[],
    shoptrue:true,
    areainfo:'',
    city_code:'',
    area_code:'',//选择区域
    icon: [
      
    ], //模拟测试按钮
    showAddress:false,
    // 地图
    latitude: 21.4486600000, //地图初始经度
    longitude: 109.1742200000, //地图初始纬度
    markers: [
      
    ] // 地图标注
  },
  handeShop(e){
    let { id } = e.currentTarget.dataset

    wx.navigateTo({
      url: '/pages/shop/index?id=' + id,
    })
  },
  onShow() {
    var that = this;
    if(wx.getStorageSync('dist')!=null){
      that.setData({
        areainfo: wx.getStorageSync('dist')
      })
    }
    wx.getLocation({
      success: function(locatlres) {
        wx.setStorageSync('loca', locatlres)
        that.setData({
            latitude: locatlres.latitude,
            longitude: locatlres.longitude,
        })
        that.data.area_code = wx.getStorageSync('area_code')
        if(that.data.area_code!==''){
          locatlres.area_code = that.data.area_code
        }
        shopmodel.GetShopByList(locatlres, res => {
         
          for (let i = 0; i < res.length; i++) {
            res[i]['label'] = {
              'content': res[i].name,
              'color': '#666',
              'fontSize': '10',
              'padding': 2,
              'anchorX': 10,
              'anchorY': -28,
              'borderWidth': 1,
              'bgColor': '#fff',
              'textAlign': 'right',
              'borderColor': '#000',
              'borderRadius': 20,
              'display': 'ALWAYS',
            }
            res[i]['width'] = 35
            res[i]['height'] = 35
            res[i]['iconPath'] = res[i]['logo']
            res[i]['latitude'] = res[i]['lat']
            res[i]['longitude'] = res[i]['lng']
          }
       let   shoptrue=true;
          if(res.data===false){
              shoptrue=false
          }
          that.setData({
            markers: res.data,
            shoptrue
          })

        })

        citymodel.getProvinces(res => {
          that.setData({
            city_list: res
          })
        })
      },
    })
  },

  onCloseAddress() {
    this.setData({
      showAddress: false
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

  //点击区域。
  handeArea() {
    var that = this;
    console.log('选择大区')
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

  // 切换列表/地图
  toggleShowType() {
    this.setData({
      showType: !this.data.showType
    })
  },
  // 显示/隐藏弹出层
  toggleShowCityPop() {
    this.setData({
      showAddress: !this.data.showAddress
    });
  },

  // 点击省份
  handeProvince() {
    var that = this
    citymodel.getProvinces(res => {
      that.setData({
        city_list: res,
        provinces: '请选择',
        city: '',
        area: ''
      })
    })
  },
  toggleShowAreaPop() {
    this.setData({
      showAreaPop: !this.data.showAreaPop
    });
  },
  // 点击门店，更改卡片信息
  changeCard(e) {
    let id = e.currentTarget.dataset.id
    this.setData({
      currentBtnId: id
    })
  },
  // 过滤地区信息
  getValue(val) {
    let value = val.detail.values
    console.log(value)
    let text = []
    // value[item].name
    for (let item in value) {
      let name = value[item].name
      text[item] = name
    }
    console.log(text) //["天津市", "天津市"]
    return text;
  },
  // 选择城市
  onSelectCity(val) {
    let text = this.getValue(val)
    this.setData({
      cityMsg: text.join('-'),
      showCityPop: false,
    })
  },
  // 选择地区
  onSelectArea(val) {
    let text = this.getValue(val)
    this.setData({
      areaMsg: text.join('-'),
      showAreaPop: false,
    })
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

     that.data.area_code=e.currentTarget.dataset.area_code,
       wx.setStorageSync('area_code', e.currentTarget.dataset.area_code) //保存所选择地址

      wx.setStorageSync('dist', that.data.city + e.currentTarget.dataset.name) //保存所选择地址
      that.onShow();
      that.setData({
        area: e.currentTarget.dataset.name,
        city_list: [],
      
        isArea: true,
        showAddress: false,
        areainfo: that.data.provinces + that.data.city + e.currentTarget.dataset.name
      })
    }

  },
  // 点击地图图标
  markerTap(event) {
    var that=this;
    let val = event.markerId
    console.log(val)
    
    var markers = that.data.markers;
    for(let i=0;i<markers.length;i++){
      if (val === markers[i].id){
          val=i
      }
    }
    this.setData({
      currentBtnId: val
    })
  }
})