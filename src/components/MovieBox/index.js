import {Modal, Button} from "react-bootstrap"
import React, {useState} from "react"
import {translate} from "../../utils/helpers"
import {CLOSE, VIEW_MORE} from "../../common/config/translations"

const MovieBox = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
  lang
}) => {
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
    <div className="card text-center mb-3">
      <div className="card-body">
        <img
          className="card-img-top"
          src={process.env.REACT_APP_API_IMG + poster_path}
          alt="Poster"
        />
        <div className="card-body">
          <div>
            <p>{title}</p>
            <p>{release_date}</p>
          </div>

          <button type="button" className="btn btn-dark" onClick={handleShow}>
            {translate(lang, VIEW_MORE)}
          </button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <img
                className="card-img-top"
                style={{width: "14rem"}}
                src={process.env.REACT_APP_API_IMG + poster_path}
                alt="Poster"
              />
              <h3>{title}</h3>
              <h4>IMDb: {vote_average}</h4>
              <h5>Release Date: {release_date}</h5>
              <br></br>
              <h6>Overview</h6>
              <p>{overview}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                {translate(lang, CLOSE)}
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default MovieBox
