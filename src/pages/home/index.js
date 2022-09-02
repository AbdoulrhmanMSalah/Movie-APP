/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useReducer} from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import {getAllTrending, getMoviesBySearchWord} from "../../network/endpoints"
import {reducer, initialState} from "./reducer"
import {
  SET_LOADING,
  SET_ERROR,
  SET_LIST_OF_MOVIES,
  SET_MOVIE_QUERY,
  SET_ACTIVE_PAGE
} from "./actions"
import Loader from "../../common/components/Loader"
import Error from "../../common/components/Error"
import NavigationBar from "../../components/NavigationBar"
import usePersistedState from "../../hooks/usePersistedState"
import PaginationComponent from "../../components/Pagination"
import {translate} from "../../utils/helpers"
import {NO_RESULTS} from "../../common/config/translations"
import MovieBox from "../../components/MovieBox"
function Home({lang, setLang}) {
  const [filterType, setFilterType] = useState("day")
  /** Handling the page state using useReducer */
  const [{movies, query, loading, error, activePage}, dispatch] = useReducer(
    reducer,
    initialState
  )

  const [recentSearch, setRecentSearch] = usePersistedState("recentSearch", [])
  const handlePageChange = pageNumber => {
    dispatch({type: SET_ACTIVE_PAGE, payload: pageNumber})
  }

  const getAllMovies = () => {
    dispatch({type: SET_LOADING, payload: true})
    getAllTrending(filterType, activePage)
      .then(res => {
        dispatch({type: SET_LOADING, payload: false})
        dispatch({type: SET_LIST_OF_MOVIES, payload: res.data.results})
      })
      .catch(err => {
        dispatch({type: SET_LOADING, payload: false})
        dispatch({type: SET_ERROR, payload: err.response.data.status_message})
        console.log(err.response)
      })
  }

  const searchInMovies = () => {
    getMoviesBySearchWord(query)
      .then(res => {
        dispatch({type: SET_LIST_OF_MOVIES, payload: res.data.results})
        if (res.data.total_results !== 0) {
          setRecentSearch([...recentSearch, query])
        } else {
          alert(translate(lang, NO_RESULTS))
          dispatch({type: SET_ERROR, payload: translate(lang, NO_RESULTS)})
        }
      })
      .catch(err => {
        dispatch({type: SET_LOADING, payload: false})
        dispatch({type: SET_ERROR, payload: err.response.data.status_message})
        console.log(err.response)
      })
  }

  const typeHandler = type => {
    setFilterType(type)
  }

  useEffect(() => {
    getAllMovies()
  }, [filterType, activePage])

  const searchMovie = async e => {
    e.preventDefault()
    if (query.length > 0) {
      searchInMovies()
    } else {
      getAllMovies()
    }
  }

  const changeHandler = e => {
    dispatch({type: SET_MOVIE_QUERY, payload: e.target.value})
  }

  const searchByRecentSearch = value => {
    dispatch({type: SET_MOVIE_QUERY, payload: value})
    getMoviesBySearchWord(value)
      .then(res => {
        dispatch({type: SET_LIST_OF_MOVIES, payload: res.data.results})
        setRecentSearch([...recentSearch, query])
      })
      .catch(err => {
        dispatch({type: SET_LOADING, payload: false})
        dispatch({type: SET_ERROR, payload: err.response.data.status_message})
        console.log(err.response)
      })
  }

  if (loading) {
    return <Loader />
  }
  if (error) {
    return <Error error={error} lang={lang} />
  }

  return (
    <>
      <NavigationBar
        changeHandler={changeHandler}
        searchMovie={searchMovie}
        typeHandler={typeHandler}
        filterType={filterType}
        query={query}
        recentSearch={recentSearch}
        setRecentSearch={setRecentSearch}
        searchByRecentSearch={searchByRecentSearch}
        lang={lang}
        setLang={setLang}
      />
      <div>
        {movies.length > 0 && (
          <div className="container">
            <div className="grid">
              {movies.map(movieReq => (
                <MovieBox key={movieReq.id} {...movieReq} lang={lang} />
              ))}
            </div>
          </div>
        )}
      </div>
      <PaginationComponent
        handlePageChange={handlePageChange}
        activePage={activePage}
        data={movies}
        lang={lang}
      />
    </>
  )
}

export default Home
