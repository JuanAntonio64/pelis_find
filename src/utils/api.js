import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  },
  params: {
    language: "es-ES",
  },
});

//Películas para el carrusel
export const getTrendingMovies = () => {
  return api.get("/trending/movie/week");
};

//Películas para el grid
export const getPopularMovies = (page = 1) => {
  return api.get("/movie/popular", {
    params: { page },
  });
};

//Detalles de una película
export const getMovieDetails = (movieId) => {
  return api.get(`/movie/${movieId}`);
};

//Reparto
export const getMovieCredits = (movieId) => {
  return api.get(`/movie/${movieId}/credits`);
};

//Trailers
export const getMovieVideos = (movieId) => {
  return api.get(`/movie/${movieId}/videos`);
};

export default api;
