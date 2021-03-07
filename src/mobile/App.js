/*
 * @Author: your name
 * @Date: 2021-03-07 12:34:51
 * @LastEditTime: 2021-03-07 13:58:40
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /about-us/src/mobile/App.js
 */
import React from 'react'
import {
  Carousel,
  Aboutus,
  Product,
  Destination,
  Department,
  Joinus,
  Footer
} from './components'
import "./scss/normalize.scss"
import "./scss/global.scss"

export const App = () => {
// 更换 router
  return (
    <>
      <Carousel />
      <Aboutus />
      <Product />
      <Department />
      <Destination />
      <Joinus />
      <Footer />
    </>
  )
}