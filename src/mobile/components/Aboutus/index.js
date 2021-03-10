/*
 * @Author: your name
 * @Date: 2021-03-07 14:18:56
 * @LastEditTime: 2021-03-10 13:26:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /about-us/src/mobile/components/Aboutus/index.js
 */
import React, { useContext } from 'react'
import { Context } from '../../Context'
import './index.scss'

export const Aboutus = () => {
  const { title, aboutus } = useContext(Context)

  return (
    <div className="mobile-aboutus">
      <div className="moblie-title">
        <div className="line"></div>
        {title.aboutus}
      </div>
      <div className="copywriting">
        {aboutus.copywriting}
      </div>
    </div>
  )
}