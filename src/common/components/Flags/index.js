import React from "react"
import Arabic from "../../../assets/arabic.png"
import English from "../../../assets/english.png"

function Flags({lang, setLang}) {
  return (
    <div>
      <div
        style={{
          margin: "16px"
        }}
      >
        <p
          style={{
            margin: "0px",
            fontWeight: "bold",
            textDecoration: "underline",
            cursor: "pointer",
            display: lang === "en" ? "block" : "none"
          }}
          onClick={() => setLang("ar")}
        >
          <img src={Arabic} alt="arabic" />
        </p>

        <p
          style={{
            margin: "0px",
            fontWeight: "bold",
            textDecoration: "underline",
            cursor: "pointer",
            display: lang === "en" ? "none" : "block"
          }}
          onClick={() => setLang("en")}
        >
          <img src={English} alt="english" />
        </p>
      </div>
    </div>
  )
}

export default Flags
