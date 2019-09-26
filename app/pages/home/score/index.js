// pages/home/score/instruction/index.js
import Toast from './../../../vant-weapp/dist/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    signIn: false,
    // mall:[]
    mall:[
      {
        id:'1',
        img_url:'./../../../static/images/mall-img-1.png',
        name:'格米莱CRM2008',
        condition:'6000',
        rate:'109',
        good_per:'100%'
      },
      {
        id: '2',
        img_url: './../../../static/images/mall-img-2.png',
        name: '格米莱CRM2008',
        condition: '6000',
        rate: '109',
        good_per: '100%'
      },
      {
        id: '3',
        img_url: './../../../static/images/mall-img-1.png',
        name: '格米莱CRM2008',
        condition: '6000',
        rate: '109',
        good_per: '100%'
      },
      {
        id: '4',
        img_url: './../../../static/images/mall-img-2.png',
        name: '格米莱CRM2008',
        condition: '6000',
        rate: '109',
        good_per: '100%'
      },
      {
        id: '5',
        img_url: './../../../static/images/mall-img-1.png',
        name: '格米莱CRM2008',
        condition: '6000',
        rate: '109',
        good_per: '100%'
      },
      {
        id: '6',
        img_url: './../../../static/images/mall-img-2.png',
        name: '格米莱CRM2008',
        condition: '6000',
        rate: '109',
        good_per: '100%'
      }
    ]
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