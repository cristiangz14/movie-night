import React, { useState, useEffect } from 'react'
import { debounce } from 'lodash'
import Api from '../api'
import Loading from '../components/Loading'
import SearchBar from '../components/SearchBar'
import MovieSection from '../components/MovieSection'
import Header from '../components/Header'
import filterByRating from '../utils/filterByRating'

const ListPage = () => {
  const [queryTerm, setQueryTerm] = useState()
  const [rating, setRating] = useState()
  const [showPopular, setShowPopular] = useState(true)
  const [viewAll, setViewAll] = useState(false)
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    discoverMovies()
  }, [])

  async function discoverMovies() {
    setLoading(true)
    const { data } = await Api.discover()
    setMovies(data.results)
    setLoading(false)
  }

  async function searchMovies(query) {
    setLoading(true)
    const { data } = await Api.search(query)
    setMovies(data.results)
    setLoading(false)
  }

  const search = debounce(query => {
    if (!query || !query.trim()) {
      setShowPopular(true)
      return discoverMovies()
    }
    setShowPopular(false)
    searchMovies(query)
  }, 300)

  let popularMovie
  let _movies = rating ? filterByRating(rating, movies) : [...movies]

  if (!viewAll) {
    popularMovie = _movies[0]
    _movies = [..._movies].slice(1, 9)
  }

  const PopularMovies = () => {
    return (
      <MovieSection
        title="Popular Movies"
        titleIcon="fire"
        popularMovie={popularMovie}
        viewAll={viewAll}
        onViewAll={setViewAll}
        movies={_movies}
      />
    )
  }

  const FoundMovies = () => {
    return (
      <MovieSection
        title="Search Result"
        popularMovie={popularMovie}
        viewAll={viewAll}
        onViewAll={setViewAll}
        movies={_movies}
      />
    )
  }

  return (
    <>
      <Header>
        <SearchBar
          query={queryTerm}
          placeholder="Search for a movie..."
          onSearch={value => {
            setQueryTerm(value)
            search(value)
          }}
          onChangeRating={setRating}
        />
      </Header>
      <Loading show={loading}>{showPopular ? <PopularMovies /> : <FoundMovies />}</Loading>
    </>
  )
}

export default ListPage
