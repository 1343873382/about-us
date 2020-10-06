import React, { useContext } from 'react'
import { Footer } from '../../components'
import { Context } from '../../Context'
import './index.scss'

export const Joinus = props => {
  const { joinus } = useContext(Context)
  const { p1, p2, p3, button, tip } = joinus

  return (
    <div className={`joinus page ${props.className}`}>
      <div className="container">
        <div className="inner-container flex-between">
          <div className="copywriting">
            <div className="p1">{p1}</div>
            <div className="p2">{p2}</div>
            <div className="p3">{p3}</div>
            <button>{button.text}</button>
            {/* <div className="tip">{tip}</div> */}
          </div>
          <div className="girl"></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}