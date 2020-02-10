import moment from 'moment'
import request from './request'

async function configuration() {
  const cached = localStorage.getItem('@movie-night:config')

  if (cached) {
    const now = moment()
    const data = JSON.parse(cached)
    if (now.isBefore(moment(data.expiresAt))) {
      return data
    }
  }

  const { data } = await request('configuration')
  localStorage.setItem(
    '@movie-night:config',
    JSON.stringify({
      ...data,
      expiresAt: moment()
        .add(1, 'weeks')
        .toDate()
    })
  )

  return data
}

export default configuration
