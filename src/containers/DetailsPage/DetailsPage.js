import React, { useState, useEffect } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import moment from 'moment'
import Api from '../../api'
import Loading from '../../components/Loading'
import Score from '../../components/Score'
import BackButton from '../../components/BackButton'
import moviePosterFallback from '../../assets/movie-poster-fallback.jpg'
import buildImageURL from '../../utils/buildImageURL'
import styles from './DetailsPage.module.css'

const DetailsPage = () => {
  const [movie, setMovie] = useState({})
  const [posterURL, setPosterURL] = useState()
  const [loading, setLoading] = useState(false)
  const { movieId } = useParams()

  useEffect(() => {
    if (movieId) {
      setLoading(true)
      Api.get(movieId).then(({ data }) => {
        setMovie(data)
        if (data.poster_path) {
          buildImageURL(data.poster_path, '500').then(setPosterURL)
        } else {
          setPosterURL(moviePosterFallback)
        }
        setLoading(false)
      })
    } else {
      setMovie({})
    }
  }, [movieId])

  if (!movieId) {
    return <Redirect to="/" />
  }

  const released = moment(movie.release_date, 'YYYY-MM-DD')
  const genres = movie.genres && movie.genres.map(g => g.name).join(', ')

  return (
    <Loading show={loading}>
      <div className={styles.container}>
        <img src={posterURL} alt="" />
        <div className={styles.details}>
          <BackButton to="/" />
          <h1 className={styles.title}>
            {movie.title} <span className={styles.released}>{`(${released.format('YYYY')})`}</span>
          </h1>
          <h5>{movie.tagline}</h5>
          <p className={styles.overview}>{movie.overview}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <b>Genres:</b> {genres}.
            </div>
            <Score score={movie.vote_average} votes={movie.vote_count} />
          </div>
        </div>
      </div>
    </Loading>
  )
}

export default DetailsPage
