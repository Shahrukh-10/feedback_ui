import React from 'react'
import propTypes from 'prop-types'
const FeedbackStats = ({feedback}) => {

    let average_rating = feedback.reduce((acc , cur) => {
            return acc + cur.rating
    }, 0) / feedback.length

    average_rating = average_rating.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average_rating) ? 0 : average_rating}</h4>
    </div>
  )
}


FeedbackStats.prototype = {
    feedback : propTypes.array.isRequired
}
export default FeedbackStats
