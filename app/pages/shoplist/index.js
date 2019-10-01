// pages/shop/index.js
import {
  ShopModel
} from '../../api/shop.js'

let shopmodel = new ShopModel();
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
    shop_name: '极客清晖园星巴克店',
    shop_distance: '2.4',
    category:[],
    list: [
      {
        id:'1',
        imgUrl: './../../../static/images/rate-img-1.png',
        title: '格米莱CRM3061',
        cur_price: '3600',
        old_price: '4800',
        rate: '1080',
        rate_per: '100%'
      },
      {
        id: '2',
        imgUrl: './../../../static/images/rate-img-2.png',
        title: '格米莱CRM3061',
        cur_price: '3600',
        old_price: '4800',
        rate: '1080',
        rate_per: '100%'
      },
      {
        id: '3',
        imgUrl: './../../../static/images/rate-img-3.png',
        title: '格米莱CRM3061',
        cur_price: '3600',
        old_price: '4800',
        rate: '1080',
        rate_per: '100%'
      },

    ]
  },
  onLoad(e){
    this.getCategory(e.id)
  },
  getCategory(shop_id){
    shopmodel.GetShopListGoodsByCategory(shop_id, res => {
      this.setData({
        category: res
      })
      this.getGoods(res[0].id)
    })
  },
  getGoods(category_id){
    shopmodel.GetShopListGoodsByList(category_id, res => {
      this.setData({
        list:res.data
      })
    })
  },
  onShow(){
  
  },

  onChange(event) {
    let that=this;
    let category_id = that.data.category[event.detail.index].id
    that.getGoods(category_id)
  
  }
})