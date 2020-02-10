import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Icon from '../Icon'
import styles from './BackButton.module.css'

const BackButton = ({ to }) => {
  return (
    <div className={styles.container}>
      <Link to={to} className={styles.link}>
        <div className={styles.button}>
          <Icon name="arrow-left" className={styles.icon} />
        </div>
      </Link>
    </div>
  )
}

BackButton.propTypes = {
  to: PropTypes.string.isRequired
}

export default BackButton
