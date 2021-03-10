/*
 * @Author: your name
 * @Date: 2021-03-07 14:18:56
 * @LastEditTime: 2021-03-10 13:55:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /about-us/src/pc/pages/Joinus/index.js
 */
import React, { useContext } from 'react'
import { Footer } from '../../components'
import { Context } from '../../Context'
import './index.scss'
import { Link } from "react-router-dom"
export const Joinus = props => {
  const { index, isScrolling, setCurrentIndex } = props
  const { joinus } = useContext(Context)
  const { p1, p2, p3, button } = joinus
  return (
    <div className={`joinus page ${props.className}`}>
      <div className="inner-container flex-between">
        <div className="pc-copywriting">
          <div className="p1">{p1}</div>
          <div className="p2">{p2}</div>
          <div className="p3">{p3}</div>
          <button><Link to="Spring">{button.text}</Link></button>
        </div>
        <div className="girl"></div>
      </div>
      <Footer
        index={index}
        isScrolling={isScrolling}
        setCurrentIndex={setCurrentIndex} />
    </div>
  )
}