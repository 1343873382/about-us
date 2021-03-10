/*
 * @Author: your name
 * @Date: 2021-03-07 14:18:56
 * @LastEditTime: 2021-03-10 14:06:09
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /about-us/src/pc/pages/Destination/index.js
 */
import React, { useContext } from 'react'
import Slider from 'react-slick'
import { parseDestination } from './parseDestination'
import { Context } from '../../Context'
import './index.scss'

export const Destination = props => {
  const { destination } = useContext(Context)
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  } 
  const destinations = parseDestination(destination)

  return (
    <div className={`pc-destination pc-page ${props.className}`}>
      <div className="pc-container">
        <div className="pc-carousel">
          <Slider {...settings}>
            {
              destinations.map((column, i) => (
                <div key={i}>
                  <div className="pc-card">
                    {
                      column.map((row, j) => {
                        const { type, data } = row

                        if (type === 'year') {
                          return (
                            <div className="pc-row pc-year" key={j}>
                              <div className="pc-line"></div>
                              {data}
                            </div>
                          )
                        } else {
                          return (

                            <div className="pc-row pc-member" key={j}>
                              <div className="pc-name">{data.name}</div>
                              <div className="pc-place">{data.location}</div>
                            </div>
                          )
                        }
                      })
                    }
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}

const PrevArrow = props => {
  const { onClick } = props
  return (
    <div
      className="prev button"
      onClick={onClick}
    />
  )
}

const NextArrow = props => {
  const { onClick } = props
  return (
    <div
      className="next button"
      onClick={onClick}
    />
  )
}