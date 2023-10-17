interface Requests {
  [key: string]: string;
}
const requests: Requests = {
  requestTrending: '/trending/all/week',
  requestMovieNowPlaying: '/movie/now_playing',
  requestMoviePopular: '/movie/popular',
  requestMovieTopRated: '/movie/top_rated',
  reqeustTvNowPlaying: '/tv/on_the_air',
  requestTvPupular: '/tv/popular',
  requestTvTopRated: '/tv/top_rated',
  requestGenres: '/discover/movie?with_genres=',
  requestActionMovies: '/discover/movie?with_genres=28',
  requestComedyMovies: '/discover/movie?with_genres=35',
  requestHorrorMovies: '/discover/movie?with_genres=27',
  requestRomanceMovies: '/discover/movie?with_genres=10749',
  requestDocumentaries: '/discover/movie?with_genres=99',
} as const;

export default requests;
