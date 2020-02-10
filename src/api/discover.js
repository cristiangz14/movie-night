import request from './request'

function discover() {
  return request('discover/movie', { params: { sort_by: 'popularity.desc' } })
}

export default discover
