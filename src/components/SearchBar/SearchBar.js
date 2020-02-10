import React from 'react'
import PropTypes from 'prop-types'
import SearchInput from '../SearchInput'
import Rating from '../Rating'
import styles from './SearchBar.module.css'

const SearchBar = ({ query, placeholder, onSearch, onChangeRating }) => {
  return (
    <div className={styles.container}>
      <SearchInput
        placeholder={placeholder}
        value={query}
        onChange={e => {
          onSearch(e.target.value)
        }}
      />
      <div className={styles.rating}>
        Rating: <Rating onChange={onChangeRating} />
      </div>
    </div>
  )
}

SearchBar.propTypes = {
  query: PropTypes.string,
  placeholder: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
  onChangeRating: PropTypes.func.isRequired
}

export default SearchBar
