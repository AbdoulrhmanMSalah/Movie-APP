import React from "react"

import LoaderAnimation from "../../../assets/oops.json"
import Lottie from "react-lottie"
import {translate} from "../../../utils/helpers"
import {GET_ALL_FILMS} from "../../config/translations"

const Error = ({error = "Something went wrong", lang}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoaderAnimation
  }

  const handleReload = () => {
    window.location.reload()
  }
  return (
    <div className="display-full">
      <Lottie options={defaultOptions} width={"100%"} height={"500px"} />
      <p>{error}</p>
      <p style={{cursor: "pointer", color: "blue"}} onClick={handleReload}>
        {translate(lang, GET_ALL_FILMS)}
      </p>
    </div>
  )
}
export default Error
