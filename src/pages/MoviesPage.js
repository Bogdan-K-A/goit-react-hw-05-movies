import { useEffect, useState } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router'
import SearchMovies from '../components/SearchMovies/SearchMovies'
import MovieList from '../components/MovieList/MovieList'
import * as fetchApi from '../service/api'
// import PropTypes from 'prop-types'
console.log(queryString)

function MoviesPage() {
  const [movies, setMovies] = useState(null)

  const location = useLocation()
  const parseQueryString = queryString.parse(location.search)
  const query = parseQueryString.query

  useEffect(() => {
    if (query) {
      fetchApi
        .movieSearch(query)
        .then(({ results }) => {
          if (results.length === 0) {
            alert('The answer is empty')
            return
          }
          setMovies(results)
        })
        .catch((error) => console.log(error))
    }
  }, [query])

  useEffect(() => {
    if (location.search === '') {
      setMovies([])
    }
  }, [location])

  return (
    <>
      <SearchMovies />
      {movies && <MovieList movies={movies} />}
    </>
  )
}

// MoviesPage.propTypes = {

// }

export default MoviesPage
