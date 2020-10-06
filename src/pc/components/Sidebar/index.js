import React, { useContext } from 'react'
import { Context } from '../../Context'
import './index.scss'

export const Sidebar = props => {
  const { index, isScrolling, setCurrentIndex } = props
  const { title } = useContext(Context)
  const setClass = i => `text-box  ${index === i && 'text-box-active'}`
  const show_to_top = () => `home ${index >= 4 ? 'show' : 'hide'}`
  return (
    <div className={`sidebar  ${isScrolling && 'fade-sidebar'}`}>
      <div className="inner-sidebar ">
        <div
          className={show_to_top()}
          onClick={() => setCurrentIndex(1)}
        >
        </div>
        <div
          className="red_rock_logo"
          onClick={() => setCurrentIndex(1)}
        >
        </div>
        <div
          className={setClass(2)}
          onClick={() => setCurrentIndex(2)}
        >
          <div className="link">{title.aboutus}</div>
        </div>
        <div
          className={setClass(3)}
          onClick={() => setCurrentIndex(3)}
        >
          <div className="link">{title.product}</div>
        </div>
        <div
          className={setClass(4)}
          onClick={() => setCurrentIndex(4)}
        >
          <div className="link">{title.department}</div>
        </div>
        <div
          className={setClass(5)}
          onClick={() => setCurrentIndex(5)}
        >
          <div className="link">{title.destination}</div>
        </div>
        <div
          className={setClass(6)}
          onClick={() => setCurrentIndex(6)}
        >
          <div className="link">{title.joinus}</div>
        </div>
      </div>
    </div>
  )
}