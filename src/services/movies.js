export const api_key = process.env.NEXT_PUBLIC_TMDB_KEY;
export const BASE_URL = "https://api.themoviedb.org/3";

export const movieFetcher = (url) => fetch(url).then((res) => res.json());

const endpoints = {
  trending: `${BASE_URL}/trending/movie/week`,
  popular: `${BASE_URL}/movie/popular`,
  top_rated: `${BASE_URL}/movie/top_rated`,
  upcoming: `${BASE_URL}/movie/upcoming`,
  now_playing: `${BASE_URL}/movie/now_playing`,
};
export const getMovies =  (genre="trending") => {
  const endpoint  = endpoints[genre] || endpoints.trending;
  
  return   `${endpoint}?api_key=${api_key}&language=en-US&page=1`;
  
};