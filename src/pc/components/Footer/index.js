//import { link } from "fs-extra"
import React, { useContext } from "react"
import { Context } from "../../Context"
import './index.scss'

export const Footer = () => {
  const { footer, title2, all_product, all_product_src } = useContext(Context)

  return (
    <footer>
      <div className="other-inner-footer">
        <div className="footer_flex_box">
          <div className="red_rock_logo"></div>
          <div className="title_flex_box">
            <div className="footer-title-about-us">
              <p>ABOUT US</p>
              {
                title2.map((e, key) => {
                  return (
                    <li key={key}>{e}</li>
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
        <p >{footer.copyright}</p>
        <p>{footer.address}</p>
        <p>{footer.email}</p>
      </div>
    </footer>
  )
}