import React from "react"
import {Container, Nav, Navbar} from "react-bootstrap"
import Flags from "../../common/components/Flags"
import {
  TITLE,
  TRENDING_BY_DAY,
  TRENDING_BY_WEEK
} from "../../common/config/translations"
import {translate} from "../../utils/helpers"
import SearchInput from "./SearchInput"

function NavigationBar({
  changeHandler,
  searchMovie,
  typeHandler,
  filterType,
  query,
  recentSearch,
  setRecentSearch,
  searchByRecentSearch,
  lang,
  setLang
}) {
  return (
    <div>
      <Navbar bg="light" expand="lg" variant="light">
        <Container fluid>
          <Navbar.Brand>{translate(lang, TITLE)}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              className={filterType === "day" && "active"}
              onClick={() => typeHandler("day")}
            >
              {translate(lang, TRENDING_BY_DAY)}
            </Nav.Link>
            <Nav.Link
              className={filterType === "week" && "active"}
              onClick={() => typeHandler("week")}
            >
              {translate(lang, TRENDING_BY_WEEK)}
            </Nav.Link>
          </Nav>

          <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

          <Navbar.Collapse id="nabarScroll">
            <Nav
              className="me-auto my-2 my-lg-3"
              style={{maxHeight: "100px"}}
              navbarScroll
            ></Nav>
            <SearchInput
              changeHandler={changeHandler}
              searchMovie={searchMovie}
              query={query}
              recentSearch={recentSearch}
              searchByRecentSearch={searchByRecentSearch}
              setRecentSearch={setRecentSearch}
              lang={lang}
            />

            <Flags lang={lang} setLang={setLang} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar
