import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'
import Icon from '../Icon'
import styles from './Rating.module.css'

const Rating = ({ onChange }) => {
  const [hovered, setHovered] = useState()
  const [selected, setSelected] = useState()
  const stars = [...Array(5).keys()].map(i => {
    const key = i + 1

    let icon

    if (hovered) {
      icon = key <= hovered ? 'star' : 'star-empty'
    } else if (selected) {
      icon = key <= selected ? 'star' : 'star-empty'
    } else {
      icon = 'star-empty'
    }

    return (
      <Icon
        key={key}
        name={icon}
        className={styles.star}
        onMouseEnter={() => {
          setHovered(key)
        }}
        onClick={() => {
          const value = key === selected ? null : key
          setSelected(value)
          onChange(value)
        }}
      />
    )
  })
  return (
    <div className={styles.container} onMouseLeave={() => setHovered(null)}>
      {stars}
    </div>
  )
}

Rating.propTypes = {
  onChange: PropTypes.func
}

Rating.defaultProps = {
  onChange: noop
}

export default Rating
