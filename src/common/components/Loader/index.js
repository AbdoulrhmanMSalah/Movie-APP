import React from "react"

import LoaderAnimation from "../../../assets/loader.json"
import Lottie from "react-lottie"

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoaderAnimation
  }
  return (
    <div className="display-full">
      <Lottie options={defaultOptions} width={"100%"} height={"100%"} />
    </div>
  )
}
export default Loader
