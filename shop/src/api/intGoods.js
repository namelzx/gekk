import request from '@/utils/request'

export function GetDataByList(query) {
  return request({
    url: '/IntGoods/GetDataByList',
    method: 'get',
    params: query
  })
}

export function GetIdByDetails(id) {
  return request({
    url: '/IntGoods/GetIdByDetails',
    method: 'get',
    params: {id}
  })
}

export function GetIdByDel(id) {
  return request({
    url: '/IntGoods/GetIdByDel',
    method: 'get',
    params: {id}
  })
}

export function PostDataBySave(data) {
  return request({
    url: '/IntGoods/PostDataBySave',
    method: 'post',
    data
  })
}


export function PostDataByUp(data) {
  return request({
    url: '/IntGoods/PostDataByUp',
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
    url: '/IntGoods/GetGoodsByUp',
    method: 'get',
    params: {shop_id}
  })
}




