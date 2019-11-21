import request from '@/utils/request'


export function ShopInfo(query) {
  return request({
    url: '/data/ShopInfo',
    method: 'get',
    params: query
  })
}


export function GetShopByOrder(query) {
  return request({
    url: '/data/GetShopByOrder',
    method: 'get',
    params: query
  })
}


export function GetShopByGoods(query) {
  return request({
    url: '/data/GetShopByGoods',
    method: 'get',
    params: query
  })
}




