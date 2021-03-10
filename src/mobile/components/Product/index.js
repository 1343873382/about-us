/*
 * @Author: your name
 * @Date: 2021-03-07 14:18:56
 * @LastEditTime: 2021-03-10 13:34:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /about-us/src/mobile/components/Product/index.js
 */
import React, { useContext } from "react"
import Slider from "react-slick"
import { Context } from "../../Context"
import "./index.scss"

export const Product = () => {
  const { title, products } = useContext(Context)
  const settings = {
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }

  return (
    <div className="mobile-product">
      <div className="moblie-title" style={{ justifyContent: 'space-between' }}>
        <div className="flex-center">
          <div className="line" />
          {title.product}
        </div>
        <span className="title-right">
          右滑查看更多
          <span className="small-arrow" />
        </span>
      </div>
      <div className="slide-carousel">
        <Slider {...settings}>
          {products.map((product, i) => {
            const { title, subtitle, intro, picture, background } = product

            return (
              <div key={i}>
                <div className="card">
                  <div className="picture" style={{ background }}>
                    <img src={picture} alt="" />
                  </div>
                  <div className="copywriting">
                    <div className="all-title">
                      <div className="moblie-title">{title}</div>
                      <div className="subtitle">{subtitle}</div>
                    </div>
                    <div className="product-intro">
                      {intro}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}
