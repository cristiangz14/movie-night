function filterByRating(rating, movies) {
  if (!rating) {
    return []
  }

  return movies
    .filter(({ vote_average }) => {
      if (rating === 1) {
        return vote_average >= 0 && vote_average <= 2
      } else if (rating === 2) {
        return vote_average >= 2 && vote_average <= 4
      } else if (rating === 3) {
        return vote_average >= 4 && vote_average <= 6
      } else if (rating === 4) {
        return vote_average >= 6 && vote_average <= 8
      } else if (rating === 5) {
        return vote_average >= 8 && vote_average <= 10
      } else {
        return false
      }
    })
    .sort((m1, m2) => {
      if (m2.vote_average < m1.vote_average) {
        return -1
      }
      if (m2.vote_average > m1.vote_average) {
        return 1
      }
      return 0
    })
}

export default filterByRating
