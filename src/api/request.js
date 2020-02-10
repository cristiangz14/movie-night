import axios from 'axios'

function request(resource, options) {
  const headers = {
    'Content-Type': 'application/json;charset=utf-8',
    Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
  }

  const config = {
    method: 'GET',
    url: `${process.env.REACT_APP_API_URL}/${resource}`,
    headers
  }

  return axios({ ...config, ...options })
}

export default request
