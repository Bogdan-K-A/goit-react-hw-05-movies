import { useState, useEffect } from 'react'
import MovieList from '../components/MovieList/MovieList'
import * as fetchApi from '../service/api'
import s from '../components/MovieList/MovieList.module.css'

// import PropTypes from 'prop-types'

const HomePage = () => {
  const [movies, setMovies] = useState([])
  console.log(movies)

  useEffect(() => {
    fetchApi
      .popularFilms()
      .then(({ results }) => setMovies(results))
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <h1 className={s.Title}>Trending title</h1>
      <MovieList movies={movies} />
    </>
  )
}

export default HomePage
