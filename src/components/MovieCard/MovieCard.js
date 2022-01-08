import PropTypes from 'prop-types'
import {
  NavLink,
  useHistory,
  useLocation,
  useRouteMatch,
} from 'react-router-dom'
import defaultImg from '../img/no-photo.jpg'
import { Container } from '../container/Container'
import s from './MovieCard.module.css'

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
    <Container>
      <button className={s.Btn} type="button" onClick={handelGoBack}>
        Go back
      </button>

      <div className={s.MovieCard}>
        <img
          className={s.MoviePoster}
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
          <p className={s.TextContent}>User score: {vote_average * 10}%</p>
          <p>
            <span className={s.TextContent}>Overview:</span> {overview}
          </p>
          <p className={s.TextContent}>Genres: </p>
          <p>
            {genres.map(({ id, name }) => (
              <span key={id}>{name}</span>
            ))}
          </p>
        </div>
      </div>
      <hr />
      <div>
        <h3 className={s.Title}>Additional information</h3>
        <ul className={s.CardText}>
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
    </Container>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
}

export default MovieCard
