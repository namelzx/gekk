import request from '@/utils/request'

export function GetDataByList(query) {
  return request({
    url: '/coupon/GetDataByList',
    method: 'get',
    params: query
  })
}

export function GetCategory() {
  return request({
    url: 'coupon/GetCategory',
    method: 'get',
  })
}

export function GetIdByDel(id) {
  return request({
    url: '/coupon/GetIdByDel',
    method: 'get',
    params: {id}
  })
}

export function PostDataBySave(data) {
  return request({
    url: '/coupon/PostDataBySave',
    method: 'post',
    data
  })
}

export function GetIdByDetails(id) {
  return request({
    url: '/coupon/GetIdByDetails',
    method: 'get',
    params:{id},
  })
}
