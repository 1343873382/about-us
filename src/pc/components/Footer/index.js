/*
 * @Author: your name
 * @Date: 2021-03-07 14:18:56
 * @LastEditTime: 2021-03-10 13:50:20
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /about-us/src/pc/components/Footer/index.js
 */
//import { link } from "fs-extra"
import React, { useContext } from "react"
import { Context } from "../../Context"
import './index.scss'

export const Footer = (props) => {
  const { footer, title2, all_product, all_product_src } = useContext(Context)
  const { setCurrentIndex } = props
  return (
    <footer className="pc-footer">
      <div className="other-inner-footer">
        <div className="footer_flex_box">
          <div className="red_rock_logo"></div>
          <div className="title_flex_box">
            <div className="footer-title-about-us">
              <p>ABOUT US</p>
              {
                title2.map((e, key) => {
                  return (
                    <li key={key} onClick={() => {
                      setCurrentIndex(key + 2)
                      console.log(key + 1);
                    }}>{e}</li>
                  )
                }) 
              }
            </div>
            <div className="footer-title-product">
              <p>我们的产品</p>
              {
                all_product.map((e, key) => {
                  return (
                    <li key={key} onClick={() => {
                      window.open(all_product_src[key])
                    }}>{e}</li>
                  )
                })
              }
            </div>
          </div>

          <div className="Qrcodes">
            <div className="QrCode1"></div>
            <div className="QrCode2"></div>
          </div>

        </div>

      </div>
      <div className="inner-footer">
        <div className="footer_content_flex">
          <p >{footer.copyright}</p>
          <p>{footer.address}</p>
          <p>{footer.email}</p>
        </div>
      </div>
    </footer>
  )
}