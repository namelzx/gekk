import { HTTP } from '../utils/http.js'
class CommonModel extends HTTP {
  constructor() {
    super()
  }

  //提交订单
  PostEvalByData(data, res) {
    var params = {
      url: 'upload',//接口路径
      method: 'post', //请求方式
      success: res,
      data
    }
    this.request(params)
  }
  


}
export { CommonModel }