/*
 * @Author: your name
 * @Date: 2021-03-07 14:18:56
 * @LastEditTime: 2021-03-10 13:52:01
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /about-us/src/pc/pages/Aboutus/index.js
 */
import React, { useContext, Fragment } from 'react'
import { Context } from '../../Context'
import './index.scss'

export const Aboutus = props => {
  const { aboutus } = useContext(Context)
  const { icon, copywriting } = aboutus

  return (
    <div className={`aboutus page ${props.className}`}>
      <div className="container">

        <div className="icon-list">
          {
            icon.map((e, i) => {
              return (
                <Fragment key={i}>
                  <div className="icon">
                    <img src={e.img} alt=""></img>
                    <p>{e.number}</p>
                    <p>{e.info}</p>
                  </div>
                  {/* {line} */}
                </Fragment>
              )
            })
          }
        </div>
        <div className="about_us_content_box">
          <p className="pc-copywriting ">{copywriting}</p>
        </div>

        <div className="bg"></div>
        {/* <div className="quotes"></div> */}
      </div>
    </div>
  )
}

