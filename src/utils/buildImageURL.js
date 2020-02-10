import Api from '../api'

async function buildImageURL(path, size) {
  const {
    images: { base_url, poster_sizes }
  } = await Api.configuration()

  const posterSize = poster_sizes.find(s => s.includes(size))

  return `${base_url}${posterSize || 'original'}${path}`
}

export default buildImageURL
