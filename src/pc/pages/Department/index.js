/*
 * @Author: your name
 * @Date: 2019-07-10 17:01:13
 * @LastEditTime: 2021-03-10 14:24:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \about-us\src\pc\pages\Department\index.js
 */
import React, { useContext } from "react";
import { Context } from "../../Context";
import Slider from "react-slick";
import "./index.scss";

export const Department = props => {
  const { department } = useContext(Context);
  const { departments } = department;
  const settings = {
    infinite: true, 
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true, 
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    dotsClass: "vertical-dots",
    speed: 1000
  };

  return (
    <div className={`pc-department page ${props.className}`}>
      <div className="carousel">
        <Slider {...settings}>
          {departments.map((e, i) => (
            <div key={i}>
              <div className="side">
                <div className="mark"></div>
                <img
                  src={e.photo}
                  alt=""
                ></img>
                <div className="card">
                  <p className="name">
                    <span className="line"></span>
                    {e.name}
                  </p>
                  <p className="introduction">{e.introduction}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

    </div>
  );
};
