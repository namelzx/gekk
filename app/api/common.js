import { HTTP } from '../utils/http.js'
class CommonModel extends HTTP {
  constructor() {
    super()
  }

  //提交评论
  PostEvalByData(data, res) {
    var params = {
      url: 'upload',//接口路径
      method: 'post', //请求方式
      success: res,
      data
    }
    this.request(params)
  }
//获取轮播图
  GetBannerByList(shop_id, res) {
    var params = {
      url: 'GetBannerByList',//接口路径
      method: 'get', //请求方式
      success: res,
      data:{shop_id}
    }
    this.request(params)
  }
  
  


}
export { CommonModel }