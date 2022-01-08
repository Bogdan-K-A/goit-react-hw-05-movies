import PropTypes from 'prop-types'
import { NavLink, useLocation } from 'react-router-dom'

const MovieList = ({ movies }) => {
  const location = useLocation()
  return (
    <ul>
      {movies &&
        movies.map(({ title, id, poster_path }) => (
          <li key={id}>
            <NavLink
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
            </NavLink>
          </li>
        ))}
    </ul>
  )
}

MovieList.propTypes = {}

export default MovieList
