
import request from '@/utils/request'

export function GetCategory() {
    return request({
      url: 'category/GetCategory',
      method: 'get',
    })
  }
  