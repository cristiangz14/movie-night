import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import styles from './Score.module.css'

const Score = ({ score, votes }) => {
  return (
    <div>
      <div className={styles.score}>
        <Icon name="star" className={styles.star} /> <span>{score}</span>
        <span className={styles.scoreMax}>/10</span>
      </div>
      <div className={styles.votes}>
        <span style={{ fontSize: 14 }}>{Number(votes || 0).toLocaleString()}</span>
      </div>
    </div>
  )
}

Score.propTypes = {
  score: PropTypes.number,
  votes: PropTypes.number
}

export default Score
