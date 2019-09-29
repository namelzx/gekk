// pages/card/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showCard: true,
    currentId: '',
    myList:[
      {
        id: '1',
        imgUrl: './../../../static/images/luckin.png',
        title: '海苔肉松牛角',
        desc: '酥脆的海苔肉松铺满整只牛角包，芝士奶油醇香柔滑',
        temper: [{ id: '1', type: '加热(推荐)' }, { id: '2', type: '常温' }],
        price: '12'
      }
    ]
  },

  toggleShowCard() {
    this.setData({
      showCard: !this.data.showCard
    })
  },
  onCloseCard (e) {
    console.log(e.detail)
    this.setData({
      showCard: e.detail
    })
  }
})