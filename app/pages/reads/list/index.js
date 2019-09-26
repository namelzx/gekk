// pages/reads/list/index.js
Component({
  options:{
    styleIsolation: 'apply-shared'
  },

  /**
   * 组件的属性列表
   */
  properties: {
    articleList: {
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goDetail(event) {
      console.log(event)
      let id = event.currentTarget.dataset.id
      wx.navigateTo({
        url: './list-detail/index?id='+id,
      })
    }
  }
})
