import React from 'react'
import PropTypes from 'prop-types'
import styles from './Header.module.css'

const Header = ({ children }) => {
  return (
    <div className={styles.header}>
      <div>
        <h1>Your favorite movies. Explained</h1>
        <h2>Figure out what happened. Then find out why.</h2>
        {children}
      </div>
    </div>
  )
}

Header.propTypes = {
  children: PropTypes.node
}

export default Header
