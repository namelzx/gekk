import request from '@/utils/request'

export function GetDataByList(query) {
  return request({
    url: '/IntOrder/GetDataByList',
    method: 'get',
    params: query
  })
}

export function GetIdByDetails(id) {
  return request({
    url: '/IntOrder/GetIdByDetails',
    method: 'get',
    params: {id}
  })
}

export function GetIdByDel(id) {
  return request({
    url: '/IntOrder/GetIdByDel',
    method: 'get',
    params: {id}
  })
}

export function PostDataBySave(data) {
  return request({
    url: '/IntOrder/PostDataBySave',
    method: 'post',
    data
  })
}


export function PostDataByUp(data) {
  return request({
    url: '/IntOrder/PostDataByUp',
    method: 'post',
    data
  })
}



export function GetCategoryIdByItems(id) {
  return request({
    url: '/brand/GetCategoryIdByItems',
    method: 'get',
    params: {id}
  })
}
export function GetGoodsByUp(shop_id) {
  return request({
    url: '/IntOrder/GetGoodsByUp',
    method: 'get',
    params: {shop_id}
  })
}



export function postCourier(data) {
  return request({
    url: '/order/postCourier',
    method: 'post',
    data
  })

}



