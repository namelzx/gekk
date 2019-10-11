// pages/reads/list-detail/index.js
// pages/reads/index.js
let app = getApp();
import {
  ArticleModel
} from '../../../api/article.js'

let articleModel = new ArticleModel();
var WxParse = require('../../../wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    Detailed: {},
    user_id: 0,
    article_id: 0,
    eav: [],
    value:''
  },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function(options) {
    var that = this;
    var id = options.id
    this.setData({
      article_id: options.id
    })
    articleModel.GetDataByDetailed(id, res => {
      that.setData({
        Detailed: res
      })
      that.geteav();
      WxParse.wxParse('article', 'html', res.content, that, 5);
    })
  },
  /**
   * 提交评论
   */
  postsend(e) {
    var that = this;
    var temp = {
      user_id: app.globalData.user_id,
      article_id: that.data.article_id,
      content: e.detail.value
    }
    articleModel.PostDataByEav(temp, res => {
      that.geteav();
      wx.showToast({
        title: '评论成功'
      })
      that.setData({ value:''})
    })
  },
  /**
   * 文章点赞
   */
  userEav(e) {
    console.log(e)
    articleModel.GetEavIdByLike(e.currentTarget.dataset.id, res => {
      this.geteav();
    })
  },
  /**
   * 获取评价列表
   */
  geteav() {
    var that = this;
    articleModel.GetIdByEav(that.data.article_id, res => {
      console.log(res)
      that.setData({
        eav: res
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  ArticleLike() {
    articleModel.GetArticleIdByLike(this.data.Detailed.id, res => {
      console.log(res)
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})