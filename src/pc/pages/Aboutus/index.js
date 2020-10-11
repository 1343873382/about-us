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
          <p className="copywriting">{copywriting}</p>
        </div>

        <div className="bg"></div>
        {/* <div className="quotes"></div> */}
      </div>
    </div>
  )
}

