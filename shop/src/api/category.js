import request from '@/utils/request'

export function GetDataByList(query) {
  return request({
    url: '/category/GetDataByList',
    method: 'get',
    params: query
  })
}

export function GetCategory() {
  return request({
    url: 'category/GetCategory',
    method: 'get',
  })
}

export function GetIdByDel(id) {
  return request({
    url: '/category/GetIdByDel',
    method: 'get',
    params: {id}
  })
}

export function PostDataBySave(data) {
  return request({
    url: '/category/PostDataBySave',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}
