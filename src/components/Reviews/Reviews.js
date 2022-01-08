import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import * as fetchApi from '../../service/api'
import { useParams } from 'react-router'
const Reviews = () => {
  const { movieId } = useParams()
  const [reviews, setReviews] = useState()

  useEffect(() => {
    fetchApi
      .fetchReviews(movieId)
      .then(({ results }) => setReviews(results))
      .catch((error) => console.log(error))
  }, [movieId])

  return (
    <div>
      {reviews?.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            )
          })}
        </ul>
      ) : (
        <p>'We don`t have any Reviews for this movie.'</p>
      )}
    </div>
  )
}

// Reviews.propTypes = {

// }

export default Reviews
