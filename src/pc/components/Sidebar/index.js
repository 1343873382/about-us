import React, { useContext } from 'react'
import { Context } from '../../Context'
import './index.scss'

export const Sidebar = props => {
  const { index, isScrolling, setCurrentIndex } = props
  const { title } = useContext(Context)
  const setClass = i => `text-box  ${index === i && 'text-box-active'}`
  const show_to_top = () => {
    if (index < 4) {
      return `home hide`
    }
    else if (index === 4) {
      return `home show white-color`
    }
    else if (index > 4 && index < 6) {
      return `home show`
    } else if (index === 6) {
      return `home bottom`
    }
  }
  const not_top = () => `sidebar ${isScrolling && 'fade-sidebar'} ${index >= 2 ? "box_shadow" : ""}`;
  return (
    <div className={not_top()}>
      <div className="inner-sidebar ">
        <div
          className={show_to_top()}
          onClick={() => setCurrentIndex(1)}
        >
        </div>
        <div className="sidebar_flex_box">
          <div
            className="red_rock_logo"
            onClick={() => setCurrentIndex(1)}
          >
          </div>
          <div className="title_flex_box">
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

      </div>
    </div>
  )
}