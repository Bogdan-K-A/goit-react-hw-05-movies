import { useEffect, useState } from 'react'

import * as fetchApi from '../../service/api'
import { useParams } from 'react-router'
import s from './Reviews.module.css'

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
              <li className={s.ReviewsItem} key={id}>
                <p className={s.ReviewsTextContent}>Author: {author}</p>
                <p>{content}</p>
              </li>
            )
          })}
        </ul>
      ) : (
        <p>We don`t have any Reviews for this movie.</p>
      )}
    </div>
  )
}

export default Reviews
