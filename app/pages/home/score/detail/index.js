// pages/home/score/detail/index.js
import Toast from './../../../../vant-weapp/dist/toast/toast';

Page({
  data: {
    /**
     * @type: 1签到，2消费，3充值，4兑换
     */
    integral: [{
        id: '1',
        time: '2019-02-15 14:30:12',
        change: '+50',
        type: '1'
      },
      {
        id: '2',
        consume: '1000',
        time: '2019-02-15 14:30:12',
        change: '+50',
        type: '2'
      },
      {
        id: '2',
        consume: '1000',
        time: '2019-02-15 14:30:12',
        change: '-50',
        type: '4'
      },
      {
        id: '4',
        consume: '1000',
        time: '2019-02-15 14:30:12',
        change: '+5',
        type: '3'
      }
    ],
    signIn: false
  },
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
})