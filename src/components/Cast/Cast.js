import { useEffect, useState } from 'react'
import * as fetchApi from '../../service/api'
import { useParams } from 'react-router'
import defaultImg from '../img/no-photo.jpg'
import s from './Cast.module.css'

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
        <ul className={s.CastGalery}>
          {cast.map(({ id, name, profile_path, character }) => {
            return (
              <li key={id}>
                <img
                  className={s.CastImg}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : defaultImg
                  }
                  alt={name}
                />
                <p>
                  <span className={s.CastText}>Name:</span>
                  {name}
                </p>
                <p>
                  <span className={s.CastText}>Character:</span>
                  {character}
                </p>
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

export default Cast
