import request from '@/utils/request'

export function GetDataByList(query) {
  return request({
    url: '/pack/GetDataByList',
    method: 'get',
    params: query
  })
}


export function PostDataBySave(data) {
  return request({
    url: '/pack/PostDataBySave',
    method: 'post',
    data
  })
}



export function GetIdByDetails(id) {
  return request({
    url: '/pack/GetIdByDetails',
    method: 'get',
    params: {id}
  })
}
