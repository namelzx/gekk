// pages/shop/index.js
import {
  ShopModel
} from '../../api/shop.js'

let shopmodel = new ShopModel();



import {
  CommonModel
} from '../../api/common.js'

let commonModel = new CommonModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://hhh.10huisp.com/uploads/article-img-1.png',
      'https://hhh.10huisp.com/uploads/article-img-2.png',
      'https://hhh.10huisp.com/uploads/article-img-3.png'
    ],
    active: 0,
    shop_logo: './../../../static/images/shop-logo-1.png',
    shop_name: '',
    shop_distance: '2.4',
    category:[

    ],
    list: [    ]
  },
  onLoad(e){
    var that=this;
      that.setData({
        shop_logo:wx.getStorageSync('logo')
      })
    this.getCategory(e.id)
  },
  getCategory(shop_id){
    shopmodel.GetShopListGoodsByCategory(shop_id, res => {
      let ca = [{
        id: 0,
        name: '全部'
      }]
      this.setData({
        category: ca.concat(res),
      })
      this.getGoods(0)
    })
  },
  getGoods(shop_id){
    var that=this;
    shopmodel.GetShopListGoodsByList(shop_id, res => {
      that.setData({
        list:res.data,
      })
    })
  },
  onShow(){
    var d=wx.getStorageSync('dist');
    var im = wx.getStorageSync('shopbaner');
    this.setData({
      shop_name:d,
      imgUrls: im
    })
  },

  onChange(event) {
    let that=this;
    let category_id = that.data.category[event.detail.index].id
    that.getGoods(category_id)
  
  }
})