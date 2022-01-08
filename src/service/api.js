// API Key: 0142c18a11f4e8fa52f20b3d30173b70
// https://api.themoviedb.org/3/movie/550?api_key=0142c18a11f4e8fa52f20b3d30173b70

const KEY = '0142c18a11f4e8fa52f20b3d30173b70'
const BASE_URL = `https://api.themoviedb.org/3`

function fetchApi(url) {
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json()
    }
    // console.log(response.json())
    return Promise.reject(new Error(`Такого названия нет`))
  })
}

// Список самых популярных фильмов на сегодня для создания коллекции на главной странице.
export function popularFilms() {
  return fetchApi(`${BASE_URL}/trending/movie/day?api_key=${KEY}`)
}

// Поиск кинофильма по ключевому слову на странице фильмов.
export function movieSearch(query) {
  return fetchApi(
    `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&language=en-US`,
  )
}

// запрос полной информации о фильме для страницы кинофильма.
export function movieInformation(movieId) {
  return fetchApi(`${BASE_URL}/movie/${movieId}?api_key=${KEY}`)
}

// запрос информации о актёрском составе для страницы кинофильма. (Cast)
export function fetchCast(movieId) {
  return fetchApi(`${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&page=1`)
}

// запрос обзоров для страницы кинофильма. (Reviews)
export function fetchReviews(movieId) {
  return fetchApi(`${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&page=1`)
}
