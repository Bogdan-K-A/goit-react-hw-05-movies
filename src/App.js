import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import NotFoundPage from './pages/NotFoundPage'
import { Nav } from './components/Navigation/Nav'

const App = () => (
  <>
    <Nav />

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies" component={MoviesPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </>
)

export default App
