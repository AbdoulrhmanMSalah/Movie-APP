import React, {useState} from "react"
import {Pagination} from "react-bootstrap"

const PaginationComponent = ({handlePageChange, data, activePage, lang}) => {
  return (
    <div className="container flex align-center justify-center">
      <Pagination>
        {data.map((_, index) => {
          return (
            <Pagination.Item
              onClick={() => handlePageChange(index + 1)}
              key={index + 1}
              active={index + 1 === activePage}
            >
              {lang === "en"
                ? (index + 1).toLocaleString("en")
                : (index + 1).toLocaleString("ar-EG")}
            </Pagination.Item>
          )
        })}
      </Pagination>
    </div>
  )
}

export default PaginationComponent
