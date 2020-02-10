import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import buildImageURL from '../../utils/buildImageURL'
import moviePosterFallback from '../../assets/movie-poster-fallback.jpg'
import styles from './MovieCard.module.css'

const MovieCard = ({ id, poster_path, title, vote_average, posterSize, imgWidth }) => {
  const [posterURL, setPosterURL] = useState()
  useEffect(() => {
    if (poster_path) {
      buildImageURL(poster_path, posterSize || '185').then(setPosterURL)
    } else {
      setPosterURL(moviePosterFallback)
    }
  }, [poster_path, posterSize])

  let width = !poster_path ? 178 : imgWidth
  return (
    <Link to={`/movies/${id}`} style={{ textDecorationLine: 'none', color: 'inherit' }}>
      <div className={styles.card}>
        <div>
          <img src={posterURL} className={styles.poster} style={{ width }} alt="" />
          <div className={styles.footer}>
            <Icon name="star" className={styles.rating} /> {vote_average}
          </div>
        </div>
        {!poster_path ? <div className={styles.title}>{title}</div> : null}
      </div>
    </Link>
  )
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  posterSize: PropTypes.string,
  imgWidth: PropTypes.number
}

export default MovieCard
