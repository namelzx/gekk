import request from '@/utils/request'

export function GetDataByList(query) {
  return request({
    url: '/banner/GetDataByList',
    method: 'get',
    params: query
  })
}


export function GetIdByDel(id) {
  return request({
    url: '/banner/GetIdByDel',
    method: 'get',
    params: {id}
  })
}

export function PostDataBySave(data) {
  return request({
    url: '/banner/PostDataBySave',
    method: 'post',
    data
  })
}

