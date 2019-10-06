import request from '@/utils/request'

export function getProvinces(data) {
  return request({
    url: '/city/getProvinces',
    method: 'get',
    data
  })
}

export function getCity(index) {
  return request({
    url: '/city/getCity',
    method: 'get',
    params: {index}
  })
}


export function getArea(index) {
  return request({
    url: '/city/getArea',
    method: 'get',
    params: {index}
  })
}


