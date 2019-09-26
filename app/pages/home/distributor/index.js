// pages/home/distributor/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    distributor: true, //是否为经销商
    showBanner: false, 
  },
  // 立即加入
  clickToJoin () {
    wx.navigateTo({
      url: './apply/index',
    })
  },
  // 提现明细
  clickToBill() {
  },
  // 分销订单
  clickToOrder() {
    wx.navigateTo({
      url: './order/index'
    })
  },
  // 我的团队
  clickToTeam() {
    wx.navigateTo({
      url: './team/index',
    })
  },
  //  显示/隐藏海报
  onToggleMask () {
    this.setData({
      showBanner: !this.data.showBanner
    })
  },
  // 长按海报
  onClickPic() {
    console.log(2)
  }
})