import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import styles from './Title.module.css'

const Title = ({ text, icon, viewAll, onViewAll }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {icon && <Icon name={icon} className={styles.icon} />}
        {text}
      </h2>
      <div>
        <a
          href="#!"
          className={styles.viewAll}
          onClick={e => {
            e && e.preventDefault()
            onViewAll(!viewAll)
          }}
        >
          {viewAll ? 'View less →' : 'View all →'}
        </a>
      </div>
    </div>
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  viewAll: PropTypes.bool.isRequired,
  onViewAll: PropTypes.func.isRequired
}

export default Title
