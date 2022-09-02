import axiosInstance from "./axiosInstance"
const key = process.env.REACT_APP_MOVIE_DB_KEY

export const getAllTrending = (type, page) =>
  axiosInstance.get(`trending/all/${type}?api_key=${key}&page=${page}`)

export const getMoviesBySearchWord = query =>
  axiosInstance.get(`search/movie?api_key=${key}&query=${query}`)
