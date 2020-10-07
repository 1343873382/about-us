import React, { useContext } from "react"
import Slider from "react-slick"
import { Context } from "../../Context"
import "./index.scss"

export const Department = () => {
  const { title, department } = useContext(Context)
  const { departments, masters } = department
  departments.splice(0, 1)
  const settings = {
    //dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }
  return (
    <div className="department">
      <div className="title">
        <div className="line" />
        {title.department}
      </div>
      <div className="se-title" style={{ marginTop: "5vw" }}>
        站长团
      </div>
      <div className="masters">
        {masters.map((master, i) => {
          const { name, job, intro, avatar } = master

          return (
            <div className="master" key={i}>
              <div className="avatar">
                <img src={avatar} alt="" />
              </div>
              <div className="information">
                <div className="master-info">
                  <div className="name">{name}</div>
                  <div className="job">职位：{job}</div>
                </div>
                <div className="intro">{intro}</div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="title" style={{ marginTop: "8vw" }}>
        <div className="line" />
        部门介绍
      </div>
      <Slider {...settings}>
        {departments.map((department, i) => {
          const { name, introduction, photo } = department

          return (
            <div className="department-card" key={i}>
              <div className="box-shadow">
                <div className="picture">
                  <img src={photo} alt="" />
                </div>
                <div className="copywriting">
                  <div className="name">{name}</div>
                  <div className="intro">{introduction}</div>
                </div>
              </div>

            </div>
          )
        })}
      </Slider>
    </div>
  )
}
