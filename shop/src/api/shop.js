import request from '@/utils/request'

export function PostDataByAdd(data) {
  return request({
    url: '/shop/PostDataByAdd',
    method: 'post',
    data
  })
}

export function GetDataByList(data) {
  return request({
    url: '/shop/GetDataByList',
    method: 'get',
    params: data
  })
}


export function GetIdBydetailed(id) {
  return request({
    url: '/shop/GetIdBydetailed',
    method: 'get',
    params: {id}
  })
}



export function UpdateCode(id) {
  return request({
    url: '/shop/UpdateCode',
    method: 'get',
    params: {id}
  })
}


