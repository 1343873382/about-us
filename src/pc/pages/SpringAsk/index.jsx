import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import "./index.scss"
import {
  getPmData,
  getWebData,
  getMoblieData,
  getSreData,
  getDesign,
  getFlower
} from "./config"
import Gears from "../../../assets/齿轮.png"
// import Android from '../../../assets/安卓.png'
// import Ios from "../../../assets/mac.png"
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Spring = () => {
  const [Hidden, setHidden] = useState(false)
  const Big = (e) => (num) => e * num
  const scle = Big(20)
  const hidden = () => {
    setTimeout(() => {
      setHidden(true)
    }, 2000)
  }
  useEffect(() => {
    console.log('mounted')
    hidden()
  }, [])

  return (
    <>
      <div className={Hidden ? 'background hidden' : 'background'}>
        <div className="logo"></div>
      </div>
      <div style={styles}>
        <Parallax strength={500}
          renderLayer={e => {
            //console.log(scle(e - 1));
            return (
              <>
                <div>
                  {getPmData().map(item => {
                    return (
                      <div style={{
                        fontSize: item.fontSize,
                        padding: 20,
                        position: "absolute",
                        top: `${item.pos}%`,
                        textAlign: "left",
                        left: "5%",
                        opacity: `${!item.scle ? 1 : (scle(e - 1) - item.opacity)}`,
                        zIndex: 2,
                      }}><h1 className={item.reflect ? '' : ''}
                      >{item.txt}</h1></div>
                    )
                  })}
                </div>
                <div style={{
                  color: "#732763",
                  position: "absolute",
                  top: `${10 * e * 3}%`,
                  left: "2vw",
                  fontSize: "50vw",
                  opacity: 0.4,
                }}>
                  P
                </div>
                <div style={{
                  color: "#732763",
                  position: "absolute",
                  top: `${10 * e}%`,
                  left: "53vw",
                  fontSize: "50vw",
                  opacity: 0.3,
                }}>
                  M
                </div>
              </>
            )
          }
          }>
          <div style={{ height: "200vh" }}>
          </div>
        </Parallax>
        <h1>I</h1>
        <Parallax strength={1000}
          renderLayer={e => {
            //console.log(e);
            return (
              <div>
                {getWebData().map(item => {
                  return (
                    <div style={{
                      fontSize: item.fontSize,
                      padding: 20,
                      position: "absolute",
                      top: `${item.pos}%`,
                      textAlign: "left",
                      left: "5%",
                      opacity: `${!item.scle ? 1 : (scle(e - 1) - item.opacity)}`,
                      zIndex: 2,
                    }}><h1 className={item.reflect ? '' : ''}
                    >{item.txt}</h1></div>
                  )
                })}
                <div style={{
                  color: "#5EABCF",
                  position: "absolute",
                  top: `${30}%`,
                  left: `${10 + (5 - e * 5)}vw`,
                  fontSize: "50vw",
                  opacity: 0.4,
                  clipPath: `polygon(0 0, 100% 0, 100% 48%, 0 48%)`
                }}>WEB</div>
                <div style={{
                  color: "#5EABCF",
                  position: "absolute",
                  top: `${31}%`,
                  left: `${10 - (5 - e * 5)}vw`,
                  fontSize: "50vw",
                  opacity: 0.4,
                  clipPath: `polygon(0 48%, 100% 48%, 100% 100%, 0 100%)`
                }}>WEB</div>
              </div>
            )
          }
          }>
          <div style={{ height: "220vh" }}>
          </div>
        </Parallax>
        <h1>II</h1>
        <Parallax strength={500}
          renderLayer={e => {
            console.log(e);
            return (
              <div>
                {getMoblieData().map(item => {
                  return (
                    <div style={{
                      fontSize: item.fontSize,
                      padding: 20,
                      position: "absolute",
                      top: `${item.pos}%`,
                      textAlign: "left",
                      left: "5%",
                      opacity: `${!item.scle ? 1 : (scle(e - 1) - item.opacity)}`,
                      zIndex: 2,
                    }}><h1 className={item.reflect ? '' : ''}
                    >{item.txt}</h1></div>
                  )
                })}
                <div style={{
                  position: "absolute",
                  top: `${20 * e}%`,
                  left: "30%",
                  opacity: 0.6,
                  color: "#3DDC84",
                  fontSize: "20vw"
                }}>
                  Android
                </div>
                <div style={{
                  position: "absolute",
                  top: `${30 + 20 * e}%`,
                  left: "0%",
                  color: "#8a8a8a",
                  fontSize: "20vw",
                  opacity: (scle(e - 1) - 8)
                }}>
                  IOS
                </div>
              </div>
            )
          }
          }
        >
          <div style={{ height: "200vh" }}>
          </div>
        </Parallax>
        <h1>III</h1>
        <Parallax
          strength={500}
          renderLayer={e => {
            console.log(e);
            return (
              <div>
                {getSreData().map(item => {
                  return (
                    <div style={{
                      fontSize: item.fontSize,
                      padding: 20,
                      position: "absolute",
                      top: `${item.pos / 2}%`,
                      textAlign: "left",
                      left: "5%",
                      opacity: `${!item.scle ? 1 : (scle(e - 1) - item.opacity)}`,
                      zIndex: 2,
                    }}><h1 className={item.reflect ? '' : ''}
                    >{item.txt}</h1></div>
                  )
                })}
                <div style={{
                  top: `${20 * e}%`,
                  position: "absolute",
                  color: "#38A9A9",
                  fontSize: "20vw",
                  opacity: 0.5
                }}>S</div>
                <div style={{
                  top: `${20 + 20 * e}%`,
                  position: "absolute",
                  color: "#38A9A9",
                  fontSize: "20vw",
                  left: "30%",
                  opacity: 0.5
                }}>R</div>
                <div style={{
                  top: `${40 + 20 * e}%`,
                  position: "absolute",
                  color: "#38A9A9",
                  fontSize: "20vw",
                  left: "60%",
                  opacity: 0.5
                }}>E</div>
                <div style={{
                  width: "20vw",
                  height: "20vw",
                  position: "absolute",
                  opacity: 0.4,
                  top: `${40 + 10 * e}%`,
                  left: "60%",
                  transform: `rotate(${(e / 2) * 360}deg)`,
                  backgroundImage: `url(${Gears})`,
                  backgroundSize: "cover"
                }}></div>
              </div>
            )
          }
          }
        >
          <div style={{ height: "400vh" }}>
          </div>
        </Parallax>
        <h1>IV</h1>
        <Parallax
          strength={500}
          renderLayer={e => {
            console.log(e);
            return (
              <div>
                {getDesign().map(item => {
                  return (
                    <div style={{
                      fontSize: item.fontSize,
                      padding: 20,
                      position: "absolute",
                      top: `${item.pos}%`,
                      textAlign: "left",
                      left: "5%",
                      opacity: `1`,
                      zIndex: 2,
                    }}><h1 className={item.reflect ? '' : ''}
                    >{item.txt}</h1></div>
                  )
                })}
                {
                  getFlower().map(item => {
                    return (
                      <div style={{
                        width: "300px",
                        height: "300px",
                        top: "20%",
                        left: "70%",
                        borderRadius: "300px 0",
                        background: "pink",
                        opacity: 0.5,
                        position: "absolute",
                        transformOrigin: "0 300px",
                        transform: `rotate(${(item.rotate - 45) * e}deg)`
                      }}></div>
                    )
                  }
                  )
                }

              </div>
            )
          }
          }
        >
          <div style={{ height: "100vh" }}>
          </div>
        </Parallax>
        <h1>V</h1>
      </div>
    </>
  )
}

export default Spring
