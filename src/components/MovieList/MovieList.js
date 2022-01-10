import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import s from './MovieList.module.css'

const MovieList = ({ movies }) => {
  const location = useLocation()
  return (
    <ul className={s.Galery}>
      {movies &&
        movies.map(({ title, id, poster_path }) => (
          <li key={id}>
            <Link
              to={{
                pathname: `/movies/${id}`,
                state: { from: location },
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                width="300"
              />
              <p>{title}</p>
            </Link>
          </li>
        ))}
    </ul>
  )
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}

export default MovieList
