import request from '@/utils/request'

export function GetDataByList(query) {
  return request({
    url: '/article/GetDataByList',
    method: 'get',
    params: query
  })
}

export function GetIdByDetails(id) {
  return request({
    url: '/article/GetIdByDetails',
    method: 'get',
    params: {id}
  })
}

export function GetIdByDel(id) {
  return request({
    url: '/article/GetIdByDel',
    method: 'get',
    params: {id}
  })
}

export function PostDataBySave(data) {
  return request({
    url: '/article/PostDataBySave',
    method: 'post',
    data
  })
}


export function PostDataByUp(data) {
  return request({
    url: '/article/PostDataByUp',
    method: 'post',
    data
  })
}



export function GetCategoryIdByItems(id) {
  return request({
    url: '/article/GetCategoryIdByItems',
    method: 'get',
    params: {id}
  })
}
export function GetGoodsByUp(shop_id) {
  return request({
    url: '/article/GetGoodsByUp',
    method: 'get',
    params: {shop_id}
  })
}
