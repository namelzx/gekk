// pages/reads/index.js

import { ArticleModel } from '../../api/article.js'

let articleModel = new ArticleModel();


Page({
  /**
   * 页面的初始数据
   */
  data: {
    listQuery:{
      limit:10,
      page:1
    },
    imgUrls: [
      'https://hhh.10huisp.com/uploads/article-img-1.png',
      'https://hhh.10huisp.com/uploads/article-img-2.png',
      'https://hhh.10huisp.com/uploads/article-img-3.png'
    ],
    articleList:[
     
    ]
  },
  onShow(){
    var that=this;
    var im = wx.getStorageSync('arbaner')

    articleModel.GetDataByArticle(that.data.listQuery,res=>{
      console.log(res)
      that.setData({
        articleList:res.data,
        imgUrls:im,
        logo:wx.getStorageSync('logo')
      })
    })
  }

})