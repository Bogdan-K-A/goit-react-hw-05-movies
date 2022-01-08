import { useEffect, useState } from 'react'
import * as fetchApi from '../../service/api'
// import PropTypes from 'prop-types'
import { useParams } from 'react-router'
import defaultImg from '../img/no-photo.jpg'

function Cast() {
  const { movieId } = useParams()
  const [cast, setCast] = useState([])

  console.log(cast)

  useEffect(() => {
    fetchApi
      .fetchCast(movieId)
      .then(({ cast }) => setCast(cast))
      .catch((error) => console.log(error))
  }, [movieId])

  return (
    <>
      {cast?.length > 0 ? (
        <ul>
          {cast.map(({ id, name, profile_path, character }) => {
            return (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : defaultImg
                  }
                  alt={name}
                />
                <p>Name: {name}</p>
                <p>Character: {character}</p>
              </li>
            )
          })}
        </ul>
      ) : (
        <p>We don`t have any Cast info for this movie.</p>
      )}
    </>
  )
}

// Cast.propTypes = {

// }

export default Cast
