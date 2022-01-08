// import PropTypes from 'prop-types'
import {
  NavLink,
  useHistory,
  useLocation,
  useRouteMatch,
} from 'react-router-dom'
import defaultImg from '../img/no-photo.jpg'

function MovieCard({ movie }) {
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie

  const history = useHistory()
  const location = useLocation()
  const { url } = useRouteMatch()
  console.log(history)

  const release_year = new Date(release_date).getFullYear()

  const handelGoBack = () => {
    history.push(location?.state?.from ?? '/')
  }

  return (
    <>
      <button type="button" onClick={handelGoBack}>
        Go back
      </button>

      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : defaultImg
          }
          alt={title}
        />
        <div>
          <h2>
            {title}
            {release_date ? `(${release_year})` : ''}
          </h2>
          <p>User score:{vote_average * 10}%</p>
          <p>Overview: {overview}</p>
          <p>Genres: </p>
          <p>
            {genres.map(({ id, name }) => (
              <span key={id}>{name}</span>
            ))}
          </p>
        </div>
      </div>
      <hr />
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink
              to={{
                pathname: url + '/cast',
                state: { ...location.state, id: movie.id },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: url + '/reviews',
                state: { ...location.state, id: movie.id },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default MovieCard
