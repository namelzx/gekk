// pages/home/profile/index.js


import Dialog from './../../../vant-weapp/dist/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    role: '',
    temp: '',
    title: '',
    
    userInfo: {
      name: '我就是狗剩先生啊',
      phone: '185****5017',
      email: '2016573508@qq.com',
      address: '广州白云区coco大院',
      sex: '男'
    }
  },
  onToggleDialog(e) {
    this.setData({
      show: !this.data.show,
      role: e.currentTarget.dataset.title
    })
    switch (this.data.role) {
      case 'name':
        this.setData({
          title: '修改名字'
        })
        break
      case 'phone':
        this.setData({
          title: '修改手机号码'
        })
        break
      case 'email':
        this.setData({
          title: '修改邮箱'
        })
        break
      case 'address':
        this.setData({
          title: '修改地址'
        })
        break
      case 'sex':
        this.setData({
          title: '修改性别'
        })
        break
    }
  },
  onChangename(event) {
    let temp = "userInfo.name"
    this.setData({
      [temp]: event.detail
    })
  },
  onChangephone(event) {
    let temp = "userInfo.phone"
    this.setData({
      [temp]: event.detail
    })
  },
  onChangeemail(event) {
    let email = "userInfo.email"
    this.setData({
      [temp]: event.detail
    })
  },
  onChangeaddress(event) {
    let email = "userInfo.email"
    this.setData({
      [temp]: event.detail
    })
  },
  onChangesex(event) {
    let temp = "userInfo.sex"
    this.setData({
      [temp]: event.detail
    })
  }
})