import React, { useState, useEffect } from "react"
import {
  Index,
  Aboutus,
  Department,
  Destination, Product,
  Joinus
} from "./pages"


import { Sidebar } from "./components"
import "./scss/normalize.scss"
import "./scss/global.scss"

export const App = () => {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    window.onmousewheel = e => {
      e.stopPropagation()

      if (e.wheelDelta < -30 && !isScrolling) {
        if (currentIndex === 6) return
        setCurrentIndex(c => c + 1)
      } else if (e.wheelDelta > 30 && !isScrolling) {
        if (currentIndex === 1) return
        setCurrentIndex(c => c - 1)
      }
    }
  })

  useEffect(() => {
    return () => {
      setIsScrolling(true)
      setTimeout(() => {
        setIsScrolling(false)
      }, 1000)
    }
  }, [currentIndex])

  const setClass = index => {
    if (currentIndex === index) return "currentPage fade"
    else if (currentIndex > index) return "prePage"
    else if (currentIndex < index) return "nextPage"
  }

  return (
    <>
      {/* <Header active={headerActive} /> */}
      <Sidebar
        index={currentIndex}
        isScrolling={isScrolling}
        setCurrentIndex={setCurrentIndex}
      />
      <Index className={setClass(1)} />
      <Aboutus className={setClass(2)} />
      <Product className={setClass(3)} />
      <Department className={setClass(4)} />
      <Destination className={setClass(5)} />
      <Joinus className={setClass(6)}
        index={currentIndex}
        isScrolling={isScrolling}
        setCurrentIndex={setCurrentIndex} />
    </>
  )
}
