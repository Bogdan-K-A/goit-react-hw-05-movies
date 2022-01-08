import { lazy, Suspense, useState, useEffect } from 'react'
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
import * as fetchApi from '../service/api'
import MovieCard from '../components/MovieCard/MovieCard'

const Cast = lazy(() =>
  import('../components/Cast' /* webpackChunkName: "Cast" */),
)
console.log(Cast)
const Reviews = lazy(() =>
  import('../components/Reviews' /* webpackChunkName: "Reviews" */),
)

function MovieDetailsPage() {
  const { path } = useRouteMatch()
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)

  console.log(path)

  useEffect(() => {
    fetchApi
      .movieInformation(movieId)
      .then(setMovie)
      .catch((error) => console.log(error))
  }, [movieId])

  return (
    <>
      {movie && <MovieCard movie={movie} />}

      <hr />

      <Suspense fallback={<h2>Loading ...</h2>}>
        <Switch>
          <Route exact path={`${path}/cast`}>
            <Cast />
          </Route>

          <Route exact path={`${path}/reviews`}>
            <Reviews />
          </Route>
        </Switch>
      </Suspense>
    </>
  )
}

// MovieDetailsPage.propTypes = {}

export default MovieDetailsPage
