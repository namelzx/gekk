// pages/index/map/index.js

const app = getApp()

import areaList from './../../area.js'

import {
  ShopModel
} from '../../../api/shop.js'

let shopmodel = new ShopModel();

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
    icon: [{
        id: '1',
        name: '星巴克1店'
      },
      {
        id: '2',
        name: '瑞幸咖啡店'
      },
      {
        id: '3',
        name: '星巴克2店'
      }
    ], //模拟测试按钮

    // 地图
    latitude: 21.4486600000, //地图初始经度
    longitude: 109.1742200000, //地图初始纬度
    markers: [
      
    ] // 地图标注
  },
  handeShop(e){
    let { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: '/pages/shoplist/index?id='+id,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    
  },
  onShow() {
    var that = this;
    wx.getLocation({
      success: function(locatlres) {
        wx.setStorageSync('loca', locatlres)
        that.setData({
            latitude: locatlres.latitude,
            longitude: locatlres.longitude,
        })
        shopmodel.GetShopByList(locatlres, res => {
          // that.setData({
          //   shopCard: res
          // })
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
          that.setData({
            markers: res.data
          })

        })
      },
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
      showCityPop: !this.data.showCityPop
    });
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