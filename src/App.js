import { Route, Switch } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import MoviesPage from './components/pages/MoviesPage'
import MovieDetailsPage from './components/pages/MovieDetailsPage'
import NotFoundPage from './components/pages/NotFoundPage'

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
