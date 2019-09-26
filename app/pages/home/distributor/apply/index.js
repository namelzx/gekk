// pages/home/distributor/apply/index.js
import Toast from './../../../../vant-weapp/dist/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ruleChecked: false,
    invitor: '平台(请核对)',
    username: '',
    phone: ''
  },
  // 是否确认阅读协议
  onChange(event) {
    this.setData({
      ruleChecked: event.detail
    });
  },
  // 邀请人输入框
  onChangeUser (event) {
    this.setData({
      invitor: event.detail
    });
    console.log(event.detail)
  },
  // 用户名输入框
  onChangeUser(event) {
    this.setData({
      username: event.detail
    });
    console.log(event.detail)
  },
  // 手机号码输入框
  onChangePhone(event){
    this.setData({
      phone: event.detail
    });
    console.log(event.detail)
  },
  // 申请成为经销商
  onApply () {
    let data = {
      ruleChecked: this.data.ruleChecked,
      invitor: this.data.invitor,
      username: this.data.username,
      phone: this.data.phone
    }
    if(data.ruleChecked===true){
      console.log(data)
    }else{
      Toast("请先阅读分销商申请协议")
    }
  }
})