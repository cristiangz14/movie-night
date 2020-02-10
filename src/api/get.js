import request from './request'

function get(id) {
  return request(`movie/${id}`)
}

export default get
