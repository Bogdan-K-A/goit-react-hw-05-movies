import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Axios from 'axios'
import Cast from '../Cast'
import Reviews from '../Reviews'
import mapperApi from '../Utils/mapper'
// import PropTypes from 'prop-types'

class MovieDetailsPage extends Component {
  state = {
    // movie: null,
    poster: '',
    genres: [],
    overview: null,
    title: null,
    id: null,
  }

  async componentDidMount() {
    const movieId = this.props.match.params.movieId
    const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=0142c18a11f4e8fa52f20b3d30173b70&append_to_response=images`
    const res = await Axios.get(URL)

    console.log(res.data)

    // this.setState({ movie: res.data })
    // this.setState({ ...mapperApi(res.data) })
    this.setState({ ...res.data })

    // this.setState(({ movie }) => ({
    //   movie: [...movie, ...mapperApi(res.data)],
    // }))
  }

  render() {
    // console.log(this.props.match.params.movieId)
    const { poster, genres, overview, title, id } = this.state
    console.log(poster)
    return (
      <>
        {/* <h1>Ид фильма: {this.props.match.params.movieId}</h1> */}
        <h1>Cтраница с детальной информацией о кинофильме.</h1>
        <h1> {title}</h1>
        <img src={poster} alt={title} />
        <h2>Описание:</h2>
        <p> {overview}</p>
        <h2>Жанры: </h2>
        <ul>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
        <Route path="/movies/:movieId/cast" component={Cast} />
        <Route path="/movies/:movieId/reviews" component={Reviews} />
      </>
    )
  }
}

// MovieDetailsPage.propTypes = {}

export default MovieDetailsPage
