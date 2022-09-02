import React, {useEffect, useState} from "react"
import {ThemeProvider} from "react-bootstrap"
import "./App.css"
import Home from "./pages/home"

function App() {
  const [lang, setLang] = useState("en")

  const changeDirection = dir => {
    const html = document.querySelector("html")
    html.setAttribute("dir", dir)
  }

  useEffect(() => {
    changeDirection(lang === "en" ? "ltr" : "rtl")
  }, [lang])

  return (
    <>
      <ThemeProvider>
        <Home lang={lang} setLang={setLang} />
      </ThemeProvider>
    </>
  )
}

export default App
