import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import styles from './Loading.module.css'

const Loading = ({ show, children }) => {
  if (!show) {
    return children
  }
  return (
    <div className={styles.container}>
      <div className={styles.loading}>
        <Icon name="spinner" />
      </div>
    </div>
  )
}

Loading.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node
}

export default Loading
