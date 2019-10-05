import request from '@/utils/request'

export function GetHomeByData(shop_id) {
  return request({
    url: 'GetHomeByData',
    method: 'get',
    params: {shop_id}
  })
}
