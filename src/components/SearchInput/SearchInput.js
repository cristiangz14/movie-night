import React from 'react'
import PropTypes from 'prop-types'
import styles from './SearchInput.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchInput = ({ value, onChange, placeholder }) => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
      <input type="text" value={value} placeholder={placeholder} onChange={onChange} />
    </div>
  )
}

SearchInput.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string
}

export default SearchInput
