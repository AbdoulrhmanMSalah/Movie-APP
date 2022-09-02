import React from "react"
import {Button, Form, FormControl} from "react-bootstrap"
import useOnclickOutside from "react-cool-onclickoutside"
import {
  CLEAR_ALL,
  MOVIE_SEARCH,
  RECENT_SEARCHES,
  SEARCH
} from "../../../common/config/translations"
import {translate} from "../../../utils/helpers"

function SearchInput({
  changeHandler,
  searchMovie,
  query,
  recentSearch,
  setRecentSearch,
  searchByRecentSearch,
  lang
}) {
  const [showRecentSearch, setShowRecentSearch] = React.useState(false)

  const ref = useOnclickOutside(() => {
    setShowRecentSearch(false)
  })

  // remove duplicate values from array
  const removeDuplicate = arr => {
    return arr.filter((item, index) => arr.indexOf(item) === index)
  }

  return (
    <div id="form">
      <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
        <FormControl
          type="search"
          placeholder={translate(lang, MOVIE_SEARCH)}
          className="me-2"
          aria-label="search"
          name="query"
          value={query}
          onChange={changeHandler}
          onFocus={() => setShowRecentSearch(true)}
        ></FormControl>
        {recentSearch.length > 0 && (
          <div
            className={`recent-Search ${showRecentSearch && "show"}`}
            ref={ref}
          >
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <p style={{color: "blue"}}>{translate(lang, RECENT_SEARCHES)}</p>
              <p
                style={{color: "red", cursor: "pointer"}}
                onClick={() => setRecentSearch([])}
              >
                {translate(lang, CLEAR_ALL)}
              </p>
            </div>
            <ul>
              {removeDuplicate(recentSearch).map(item => {
                return (
                  <li onClick={() => searchByRecentSearch(item)} key={item}>
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
        )}

        <Button variant="secondary" type="submit">
          {translate(lang, SEARCH)}
        </Button>
      </Form>
    </div>
  )
}

export default SearchInput
