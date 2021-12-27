import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

// import fetchApi from '../service/api'
// import PropTypes from 'prop-types'

export class HomePage extends Component {
  // static propTypes = {}
  state = {
    results: [],
  }

  async componentDidMount() {
    const URL =
      'https://api.themoviedb.org/3/trending/movie/week?api_key=0142c18a11f4e8fa52f20b3d30173b70'
    const res = await Axios.get(URL)
    // console.log(res.data.results)
    this.setState({ results: res.data.results })
  }

  render() {
    // console.log(this.props.match.url)
    // const currentUrl = this.props.match.url
    const { results } = this.state
    return (
      <>
        <h1>Список фильмов</h1>
        <p>домашняя страница со списком популярных кинофильмов.</p>
        <ul>
          {results.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </>
    )
  }
}

export default HomePage
