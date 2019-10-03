// pages/home/distributor/index.js
import Toast from './../../../vant-weapp/dist/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    distributor: true, //是否为经销商
    showBanner: false, 
    userinfo:{},
  },
  // 立即加入
  clickToJoin () {
    Toast('体验版暂无法使用')
    return;
    wx.navigateTo({
      url: './apply/index',
    })
  },
  onShow(){
    let userinfo = wx.getStorageSync('userinfo')
    this.setData({
      userinfo
    })
  },
  // 提现明细
  clickToBill() {
    Toast('体验版暂无法使用')
    return;
  },
  // 分销订单
  clickToOrder() {
    wx.navigateTo({
      url: './order/index'
    })
  },
  // 我的团队
  clickToTeam() {
    Toast('体验版暂无法使用')
    return;
    wx.navigateTo({
      url: './team/index',
    })
  },
  //  显示/隐藏海报
  onToggleMask () {
    Toast('体验版暂无法使用')
    return;
    this.setData({
      showBanner: !this.data.showBanner
    })
  },
  // 长按海报
  onClickPic() {
    Toast('体验版暂无法使用')
    return;
    console.log(2)
  }
})