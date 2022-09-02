import {
  SET_LOADING,
  SET_ERROR,
  SET_LIST_OF_MOVIES,
  SET_MOVIE_QUERY,
  SET_ACTIVE_PAGE
} from "./actions"

export const initialState = {
  movies: [],
  activePage: 1,
  query: "",
  loading: true,
  error: ""
}

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_LIST_OF_MOVIES:
      return {...state, movies: action.payload}
    case SET_LOADING:
      return {...state, loading: action.payload}
    case SET_ERROR:
      return {...state, error: action.payload}
    case SET_MOVIE_QUERY:
      return {...state, query: action.payload}
    case SET_ACTIVE_PAGE:
      return {...state, activePage: action.payload}
    default:
      return state
  }
}
