import { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router'

const SearchMovies = () => {
  const [query, setQuery] = useState('')
  const history = useHistory()

  const handelChange = (e) => {
    setQuery(e.target.value)
  }

  const handelSubmit = (e) => {
    e.preventDefault()

    history.push({ ...history.location, search: `?query=${query}` })
  }
  return (
    <>
      <form onSubmit={handelSubmit}>
        <button type="submit">
          {/* <ImSearch style={{ width: 20, height: 20 }} /> */}
          <span>Search</span>
        </button>

        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handelChange}
        />
      </form>
    </>
  )
}

SearchMovies.propTypes = {}

export default SearchMovies
