/*
 * @Author: your name
 * @Date: 2021-03-07 14:18:56
 * @LastEditTime: 2021-03-10 14:32:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /about-us/src/mobile/components/Joinus/index.js
 */
import React, { useContext } from 'react'
import { Context } from '../../Context'
import './index.scss'
import { Link } from "react-router-dom"
export const Joinus = () => {
  const { title, joinus } = useContext(Context)
  const { p1, p2, button } = joinus

  return (
    <div className="mobile-joinus">
      <div className="moblie-title">
        <div className="line"></div>
        {title.joinus}
      </div>
      <div className="mobile-container ">
        <div className="girl"></div>
        <div className="p1">{p1}</div>
        <div className="p2" dangerouslySetInnerHTML={{ __html: p2 }}></div>
        <Link to="Spring"><button>{button.text}</button></Link>
      </div>
    </div>
  )
}