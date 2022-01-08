import { useState } from 'react'
import { useHistory } from 'react-router'
import s from './SearchMovies.module.css'

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
    <div className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handelSubmit}>
        <button className={s.SearchFormButton} type="submit">
          {/* <ImSearch style={{ width: 20, height: 20 }} /> */}
          <span>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handelChange}
        />
      </form>
    </div>
  )
}

export default SearchMovies
