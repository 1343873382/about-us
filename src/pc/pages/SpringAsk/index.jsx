import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import "./index.scss"
import Android from '../../../assets/安卓.png'
import Ios from "../../../assets/mac.png"
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
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
  const pmList = [
    { pos: 5, opacity: 1, txt: "产品策划及运营部", scle: false, reflect: true, fontSize: '40px' },
    { pos: 15, opacity: 1.5, txt: "产品方向:", scle: true, reflect: false },
    { pos: 20, opacity: 2, txt: "招募要求:", scle: true, reflect: false },
    { pos: 25, opacity: 2.5, txt: "1. 擅长逻辑思维，喜欢思考事物背后的逻辑。", scle: true, reflect: false },
    { pos: 30, opacity: 3, txt: "2.良好的沟通能力与有力的项目推进能力。", scle: true, reflect: false },
    { pos: 35, opacity: 3.5, txt: "3.有较强的学习能力，具有较强的产品文档书写能力，熟练使用相关办公软件（如Office、Axure、x-mind等）。", scle: true, reflect: false },
    { pos: 40, opacity: 4, txt: "4.热爱产品，具有强烈责任感，良好的时间管理能力，抗压能力强。", scle: true, reflect: false },
    { pos: 45, opacity: 4.5, txt: "运营方向:", scle: true, reflect: false },
    { pos: 50, opacity: 5, txt: "招募要求：", scle: true, reflect: false },
    { pos: 55, opacity: 5.5, txt: "1.具备一定的文字功底和活动策划能力，能捕捉热点，撰写文案能力强。", scle: true, reflect: false },
    { pos: 60, opacity: 6, txt: "2.有一定的内容审美，创造力强，熟练图片PS操作，热爱摄影。", scle: true, reflect: false },
    { pos: 65, opacity: 6.5, txt: "3.熟悉微信公众号管理，会使用秀米、135编辑器等创作工具，有新媒体运营经验者优先。", scle: true, reflect: false },
    { pos: 70, opacity: 7.0, txt: "4.有较强的抗压能力，良好的沟通能力，责任心强，善于学习。", scle: true, reflect: false },
    { pos: 75, opacity: 7.5, txt: "招募对象：", scle: true, reflect: false },
    { pos: 80, opacity: 8, txt: "大一或大二在校学生。", scle: true, reflect: false },
    { pos: 85, opacity: 8.5, txt: "加入我们:", scle: true, reflect: false },
    { pos: 90, opacity: 9, txt: "发送你的简历（邮件主题命名：产品/运营-学号-姓名，如：运营-2020xxxxxx-刘某，在简历中留下你的QQ号码，并以PDF格式发送）至pm@redrock.team", scle: true, reflect: false },
  ]
  let posY = 4
  const webList = [
    { pos: 2, opacity: 1, txt: "web研发部", scle: false, reflect: true, fontSize: '40px' },
    { pos: 15 - posY, opacity: 1.5, txt: "前端方向:", scle: true, reflect: false },
    { pos: 20 - posY, opacity: 2, txt: "招募要求:", scle: true, reflect: false },
    { pos: 25 - posY, opacity: 2.5, txt: "1.掌握HTML/CSS/JavaScript基本语法，拥有良好的JavaScript基础知识，能还原静态页面样式，熟悉各种布局方法，熟悉DOM操作和网络请求。", scle: true, reflect: false },
    { pos: 30 - posY, opacity: 3, txt: "2.了解HTTP协议，至少熟悉请求方法和常见状态码代表的含义了解nodejs，了解异步编程。", scle: true, reflect: false },
    { pos: 35 - posY, opacity: 3.5, txt: "3.遵循代码规范，有良好的编程习惯。", scle: true, reflect: false },
    { pos: 40 - posY, opacity: 4, txt: "4.有强烈的求知欲，具备良好的学习能力和沟通能力。积极乐观，认真负责，乐于协作。", scle: true, reflect: false },
    { pos: 45 - posY, opacity: 4.5, txt: "5.若有项目经验和开源作品优先招募", scle: true, reflect: false },
    { pos: 50 - posY, opacity: 5, txt: "后端方向:", scle: true, reflect: false },
    { pos: 55 - posY, opacity: 5.5, txt: "招募要求:", scle: true, reflect: false },
    { pos: 60 - posY, opacity: 6, txt: "1.热爱计算机科学和互联网技术，掌握Go语言基本语法或者熟练使用其他编程语言。", scle: true, reflect: false },
    { pos: 65 - posY, opacity: 6.5, txt: "2.掌握一定的计算机基础知识，简单了解数据结构、算法和操作系统知识。", scle: true, reflect: false },
    {
      pos: 70 - posY, opacity: 7.0, txt: "3.能够使用Web框架和数据库进行简单的服务端编程。", scle: true, reflect: false
    },
    { pos: 75 - posY, opacity: 7.5, txt: "4.有优秀的逻辑分析能力，能够对业务逻辑进行合理的抽象和拆分有强烈的求知欲，优秀的学习和沟通能力，积极乐观，认真负责，乐于协作。", scle: true, reflect: false },
    { pos: 80 - posY, opacity: 8, txt: "5.若有项目经验和开源作品者优先招募。", scle: true, reflect: false },
    { pos: 85 - posY, opacity: 8.5, txt: "招募对象:", scle: true, reflect: false },
    { pos: 90 - posY, opacity: 9, txt: "大一或大二在校学生。", scle: true, reflect: false },
    { pos: 95 - posY, opacity: 9.5, txt: "加入我们:", scle: true, reflect: false },
    { pos: 98 - posY, opacity: 10, txt: "发送你的简历（邮件主题命名：前端/后端-学号-姓名，如：后端-2020xxxxxx关月金，在简历中留下你的QQ号码，并以PDF格式发送）至web@redrock.team", scle: true, reflect: false },
  ]
  const mobileList = [
    { pos: 2, opacity: 1, txt: "移动开发部", scle: false, reflect: true, fontSize: '40px' },
    { pos: 15, opacity: 1.5, txt: "安卓方向:", scle: true, reflect: false },
    { pos: 19, opacity: 2, txt: "招募要求:", scle: true, reflect: false },
    { pos: 23, opacity: 2.5, txt: "1.对软件开发有浓厚兴趣，有良好的学习能力，积极乐观，有责任心。", scle: true, reflect: false },
    { pos: 27, opacity: 3, txt: "2.有一定的计算机网络知识，有基本的数据结构、算法基础。", scle: true, reflect: false },
    { pos: 31, opacity: 3.5, txt: "3.熟练掌握git合作开发命令。", scle: true, reflect: false },
    { pos: 35, opacity: 4, txt: "4.能够独立完成工作，具有较强的综合分析问题及解决问题的能力。", scle: true, reflect: false },
    { pos: 39, opacity: 4.5, txt: "5.熟悉java的使用，对抽象和封装有了解，能够熟练使用Android studio。", scle: true, reflect: false },
    { pos: 43, opacity: 5, txt: "6.若有项目经验和开源作品优先招募。", scle: true, reflect: false },
    { pos: 47, opacity: 5.5, txt: "iOS方向:", scle: true, reflect: false },
    { pos: 51, opacity: 6, txt: "招募要求:", scle: true, reflect: false },
    { pos: 55, opacity: 6.5, txt: "1.对软件开发有浓厚兴趣，有良好的学习能力，积极乐观，有责任心。", scle: true, reflect: false },
    {
      pos: 59, opacity: 7.0, txt: "2.有一定的计算机网络知识，有基本的数据结构、算法基础。", scle: true, reflect: false
    },
    { pos: 63, opacity: 7.5, txt: "3.熟练掌握git合作开发命令。", scle: true, reflect: false },
    { pos: 67, opacity: 8, txt: "4.能够独立完成工作，具有较强的综合分析问题及解决问题的能力。", scle: true, reflect: false },
    { pos: 71, opacity: 8.5, txt: "5.熟悉objective-C语言的语法及使用，掌握iOS基本控件的使用，熟练使用xcode。", scle: true, reflect: false },
    { pos: 75, opacity: 9, txt: "6.若有项目经验和开源作品优先招募。", scle: true, reflect: false },
    { pos: 79, opacity: 9.5, txt: "招募对象", scle: true, reflect: false },
    { pos: 83, opacity: 10, txt: "大一或大二在校学生。", scle: true, reflect: false },
    { pos: 87, opacity: 10, txt: "加入我们:", scle: true, reflect: false },
    { pos: 91, opacity: 10, txt: "发送你的简历（邮件主题命名：移动开发部春招- Android/iOS，在正文中留下你的基本信息以及QQ号码，若有github项目地址则一并写入正文，并以PDF格式发送）至mobile@redrock.team。", scle: true, reflect: false },
  ]
  return (
    <>
      <div className={Hidden ? 'background hidden' : 'background'}>
        <div className="logo"></div>
      </div>
      <div style={styles}>
        <Parallax strength={500}
          renderLayer={e => {
            console.log(scle(e - 1));
            return (
              <>
                <div>
                  {pmList.map(item => {
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
                      }}><h1 className={item.reflect ? 'reflect' : ''}
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
        <h1>| |</h1>
        <Parallax strength={1000}
          renderLayer={e => {
            //console.log(e);
            return (
              <div>
                {webList.map(item => {
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
                    }}><h1 className={item.reflect ? 'reflect' : ''}
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
        <h1>| | |</h1>
        <Parallax strength={500}
          renderLayer={e => {
            return (
              <div>
                {mobileList.map(item => {
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
                    }}><h1 className={item.reflect ? 'reflect' : ''}
                    >{item.txt}</h1></div>
                  )
                })}
                <div style={{
                  position: "absolute",
                  top: `${20 + 20 * e}%`,
                  left: "50%",
                  width: "10vw",
                  height: "10vw",
                  transform: `rotateX(${(e * 360)}deg)`,
                  backgroundImage: `url(${(e * 360 < 450) ? Android : Ios})`,
                  backgroundSize: "cover"
                }}></div>
              </div>
            )
          }
          }
        >
          <div style={{ height: "200vh" }}>
          </div>
        </Parallax>
        <h1>IV</h1>
        <Parallax
          strength={200}
          renderLayer={percentage => (
            <div>
              <div
                style={{
                  position: "absolute",
                  background: `rgba(255, 125, 0, ${percentage * 1})`,
                  left: "50%",
                  top: "50%",
                  borderRadius: "50%",
                  transform: "translate(-50%,-50%)",
                  width: percentage * 500,
                  height: percentage * 500
                }}
              />
            </div>
          )}
        >
          <div style={{ height: 1000 }}>
            <div style={insideStyles}>renderProp</div>
          </div>
        </Parallax>
      </div>
    </>
  )
}

export default Spring
