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
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    articleList:[
      {
        id:'1',
        article_img:'./../../../static/images/article-img-1.png',
        logo_img:'./../../../static/images/shop-logo-1.png',
        title:'买了咖啡机不知道怎么维护保养',
        desc:'          喜欢喝咖啡的朋友家里都会备一台咖啡机，享受随时随地喝 咖啡的乐趣。但是在享用之后可不要忽视清洗工作。喜欢喝咖啡的朋友家里都会备一台咖啡机，享受随时随地喝 咖啡的乐趣。但是在享用之后可不要忽视清洗工作。',
        date:'2019.9.11',
        view_num:'10.9w',
        good_num:'2932',
        type: 'article'
      },
      {
        id: '2',
        article_img: './../../../static/images/article-img-2.png',
        logo_img: './../../../static/images/shop-logo-2.png',
        title: '买了咖啡机不知道怎么维护保养',
        desc: '喜欢喝咖啡的朋友家里都会备一台咖啡机，享受随时随地喝 咖啡的乐趣。但是在享用之后可不要忽视清洗工作。喜欢喝咖啡的朋友家里都会备一台咖啡机，享受随时随地喝 咖啡的乐趣。但是在享用之后可不要忽视清洗工作。',
        date: '2019.9.10',
        view_num: '1.9k',
        good_num: '33.2w',
        type:'article'
      },
      {
        id: '3',
        article_img: './../../../static/images/article-img-3.png',
        logo_img: './../../../static/images/shop-logo-3.png',
        title: '买了咖啡机不知道怎么维护保养',
        desc: '喜欢喝咖啡的朋友家里都会备一台咖啡机，享受随时随地喝 咖啡的乐趣。但是在享用之后可不要忽视清洗工作。喜欢喝咖啡的朋友家里都会备一台咖啡机，享受随时随地喝 咖啡的乐趣。但是在享用之后可不要忽视清洗工作。',
        date: '2019.9.9',
        view_num: '4.9k',
        good_num: '3.1k',
        type: 'video'
      }
    ]
  },
  onShow(){
    var that=this;
    articleModel.GetDataByArticle(that.data.listQuery,res=>{
      console.log(res)
      that.setData({
        articleList:res.data
      })
    })
  }

})