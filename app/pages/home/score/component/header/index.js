// pages/home/score/component/header/index.js
import Toast from './../../../../../vant-weapp/dist/toast/toast';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    userInfo:{
      type:Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    signIn: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickToExchange() {
      wx.navigateTo({
        url: '/pages/home/score/exchange/index',
      })
    },
    clickToDetail() {
      wx.navigateTo({
        url: '/pages/home/score/detail/index',
      })
    },
    clickToInstruction() {
      wx.navigateTo({
        url: '/pages/home/score/instruction/index',
      })
    },
    // 签到
    signIn() {
      if (!this.data.signIn) {
        Toast('签到成功，积分+1');
        this.setData({
          signIn: true
        })
      } else {
        Toast('今天已经签到过啦！明天再来把～');
      }
    }
  }
})