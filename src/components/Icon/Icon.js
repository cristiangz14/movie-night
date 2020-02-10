import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, faStar, faArrowLeft, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faStar as starEmpty } from '@fortawesome/free-regular-svg-icons'

const getIconFromName = name => {
  let icon
  if (name === 'fire') {
    icon = faFire
  } else if (name === 'star') {
    icon = faStar
  } else if (name === 'arrow-left') {
    icon = faArrowLeft
  } else if (name === 'spinner') {
    icon = faSpinner
  } else if (name === 'star-empty') {
    icon = starEmpty
  }

  return icon
}

const Icon = ({ name, className, onMouseEnter, onClick, style }) => {
  const icon = getIconFromName(name)
  return (
    <FontAwesomeIcon
      icon={icon}
      className={className}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      style={style}
    />
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  onMouseEnter: PropTypes.func,
  onClick: PropTypes.func
}

export default Icon
