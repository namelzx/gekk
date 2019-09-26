import request from '@/utils/request'

export function getDataByDetail(query) {
  return request({
    url: '/courier/getDataByDetail',
    method: 'get',
    params: query
  })

}



export function all() {
  return request({
    url: '/courier/all',
    method: 'get',
  })

}

export function postDataByAdd(data) {
  return request({
    url: '/courier/postDataByAdd',
    method: 'post',
    data
  })
}

export function getIdByDel(id) {
  return request({
    url: '/courier/getIdByDel',
    method: 'get',
    params:{id}
  })
}




