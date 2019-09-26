import request from '@/utils/request'

export function GetDataByList(query) {
  return request({
    url: '/order/GetDataByList',
    method: 'get',
    params: query
  })
}


export function GetBuyoutByList(query) {
  return request({
    url: '/order/GetBuyoutByList',
    method: 'get',
    params: query
  })
}



export function PostDataByCancel(data) {
  return request({
    url: '/order/PostDataByCancel',
    method: 'post',
    data
  })
}

export function GetIdByDel(id) {
  return request({
    url: '/goods/GetIdByDel',
    method: 'get',
    params: {id}
  })
}

export function GetIdByDetails(id) {
  return request({
    url: '/order/GetIdByDetails',
    method: 'get',
    params: {id}
  })
}


export function postCourier(data) {
  return request({
    url: '/order/postCourier',
    method: 'post',
    data
  })

}


export function postOrderClose(data) {
  return request({
    url: '/order/postOrderClose',
    method: 'post',
    data
  })

}


