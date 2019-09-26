import request from '@/utils/request'

export function GetDataByList(query) {
  return request({
    url: '/goods/GetDataByList',
    method: 'get',
    params: query
  })
}

export function GetIdByDetails(id) {
  return request({
    url: '/goods/GetIdByDetails',
    method: 'get',
    params: {id}
  })
}

export function GetIdByDel(id) {
  return request({
    url: '/goods/GetIdByDel',
    method: 'get',
    params: {id}
  })
}

export function PostDataBySave(data) {
  return request({
    url: '/goods/PostDataBySave',
    method: 'post',
    data
  })
}


export function PostDataByUp(data) {
  return request({
    url: '/goods/PostDataByUp',
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
    url: '/goods/GetGoodsByUp',
    method: 'get',
    params: {shop_id}
  })
}




