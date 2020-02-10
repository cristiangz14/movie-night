import React from 'react'
import PropTypes from 'prop-types'
import Title from '../Title'
import MovieCard from '../MovieCard'
import styles from './MovieSection.module.css'

const MovieSection = ({ title, titleIcon, viewAll, onViewAll, popularMovie, movies }) => {
  const showPopularMovie = !viewAll && popularMovie && popularMovie.id
  return (
    <section className={styles.section}>
      <Title text={title} icon={titleIcon} viewAll={viewAll} onViewAll={onViewAll} />
      <div className={styles.moviesContainer}>
        {showPopularMovie ? (
          <div>
            <MovieCard {...popularMovie} posterSize="500" imgWidth={379} />
          </div>
        ) : null}
        <div className={styles.movies}>
          {movies.length ? (
            movies.map(movie => <MovieCard key={movie.id} {...movie} imgWidth={178} />)
          ) : (
            <p className={styles.notMovies}>
              {"Looks like there aren't movies matching the search criteria."}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

MovieSection.propTypes = {
  title: PropTypes.string.isRequired,
  titleIcon: PropTypes.string,
  viewAll: PropTypes.bool.isRequired,
  onViewAll: PropTypes.func.isRequired,
  popularMovie: PropTypes.object,
  movies: PropTypes.array
}

export default MovieSection
