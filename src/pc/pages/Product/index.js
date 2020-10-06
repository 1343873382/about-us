import React, { useContext } from "react"
import Swiper from "../../components/swiper/Swiper"
import { Context } from "../../Context"
import "./index.scss"

export const Product = props => {
  const { product, products } = useContext(Context)


  return (
    <div className={`product page ${props.className}`}>
      <div className="container">
        <div className="inner-container">
          <p
            className="intro"
            dangerouslySetInnerHTML={{ __html: product.intro }}
          />
          <div className="carousel">
            <Swiper content={products}></Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

// const PrevArrow = props => {
//   const { onClick } = props
//   return <div className="prev button" onClick={onClick} />
// }

// const NextArrow = props => {
//   const { onClick } = props
//   return <div className="next button" onClick={onClick} />
// }
