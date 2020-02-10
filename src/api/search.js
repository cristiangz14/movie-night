import request from './request'

function discover(query) {
  return request('search/movie', { params: { query } })
}

export default discover
