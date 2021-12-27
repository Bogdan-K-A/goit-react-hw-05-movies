const mapper = (movie) => {
  console.log(movie)
  return movie.map(({ poster_path, genres, overview, title, id }) => ({
    poster_path,
    genres,
    overview,
    title,
    id,
  }))
}

export default mapper
