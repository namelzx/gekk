// pages/home/distributor/order/index.js
Page({

  /**
   * 页面的初始数据
   * @status: 1已完成，2未结算，3已结算
   */
  data: {
    active: 0,
    detailList:[
      {
        id:'1',
        user_avatar:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568441257&di=51141b3beb9703bba100f9cbb63439e4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2019-01-31%2F214531458.png',
        order_num:'2019-071222115',
        user:'我就是狗剩先生',
        cash:'2000.00',
        status:'1',
        get_money:'200',
        date:'2019-6-15 14:20:30'
      },
      {
        id: '2',
        user_avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568441257&di=51141b3beb9703bba100f9cbb63439e4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2019-01-31%2F214531458.png',
        order_num: '2019-071222116',
        user: '小李子',
        cash: '9000.00',
        status: '2',
        get_money: '200',
        date: '2019-6-15 14:20:30'
      },
      {
        id: '3',
        user_avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568441257&di=51141b3beb9703bba100f9cbb63439e4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2019-01-31%2F214531458.png',
        order_num: '2019-071222116',
        user: 'chmee',
        cash: '9000.00',
        status: '3',
        get_money: '200',
        date: '2019-6-15 14:20:30'
      }
    ]
  },
  onChangeTabs(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.index + 1}`,
      icon: 'none'
    });
  }
})