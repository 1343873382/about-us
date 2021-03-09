import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import "./index.scss"
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
  const pmList = [
    { pos: 5, opacity: 1, txt: "产品策划及运营部", scle: false, fontSize: '40px' },
    { pos: 15, opacity: 1.5, txt: "产品方向:", scle: true, fontSize: '30px' },
    { pos: 20, opacity: 2, txt: "招募要求:", scle: true, fontSize: '20px' },
    { pos: 25, opacity: 2, txt: "1. 擅长逻辑思维，喜欢思考事物背后的逻辑。", scle: true, fontSize: '15px' },
    { pos: 30, opacity: 2, txt: "2.良好的沟通能力与有力的项目推进能力。", scle: true, fontSize: '15px' },
    { pos: 35, opacity: 2, txt: "3.有较强的学习能力，具有较强的产品文档书写能力，熟练使用相关办公软件（如Office、Axure、x-mind等）。", scle: true, fontSize: '15px' },
    { pos: 40, opacity: 2, txt: "4.热爱产品，具有强烈责任感，良好的时间管理能力，抗压能力强。", scle: true, fontSize: '15px' },
    { pos: 45, opacity: 8, txt: "运营方向:", scle: true, fontSize: '30px' },
    { pos: 50, opacity: 8, txt: "招募要求：", scle: true, fontSize: '20px' },
    { pos: 55, opacity: 8, txt: "1.具备一定的文字功底和活动策划能力，能捕捉热点，撰写文案能力强。", scle: true, fontSize: '15px' },
    { pos: 60, opacity: 8, txt: "2.有一定的内容审美，创造力强，熟练图片PS操作，热爱摄影。", scle: true, fontSize: '15px' },
    { pos: 65, opacity: 8, txt: "3.熟悉微信公众号管理，会使用秀米、135编辑器等创作工具，有新媒体运营经验者优先。", scle: true, fontSize: '15px' },
    { pos: 70, opacity: 8, txt: "4.有较强的抗压能力，良好的沟通能力，责任心强，善于学习。", scle: true, fontSize: '15px' },
    { pos: 75, opacity: 8, txt: "招募对象：", scle: true, fontSize: '15px' },
    { pos: 80, opacity: 8, txt: "大一或大二在校学生。", scle: true, fontSize: '15px' },
    { pos: 85, opacity: 8, txt: "加入我们:", scle: true, fontSize: '15px' },
    { pos: 90, opacity: 8, txt: "发送你的简历（邮件主题命名：产品/运营-学号-姓名，如：运营-2020xxxxxx-刘某，在简历中留下你的QQ号码，并以PDF格式发送）至pm@redrock.team", scle: true, fontSize: '15px' },
  ]
  let posY = 4
  const webList = [
    { pos: 2, opacity: 1, txt: "web研发部", scle: false, reflect: true, fontSize: '40px' },
    { pos: 15 - posY, opacity: 1.2, txt: "前端方向:", scle: true, fontSize: '30px' },
    { pos: 20 - posY, opacity: 1.2, txt: "招募要求:", scle: true, fontSize: '20px' },
    { pos: 25 - posY, opacity: 1.2, txt: "1.掌握HTML/CSS/JavaScript基本语法，拥有良好的JavaScript基础知识，能还原静态页面样式，熟悉各种布局方法，熟悉DOM操作和网络请求。", scle: true, fontSize: '15px' },
    { pos: 30 - posY, opacity: 1.2, txt: "2.了解HTTP协议，至少熟悉请求方法和常见状态码代表的含义了解nodejs，了解异步编程。", scle: true, fontSize: '15px' },
    { pos: 35 - posY, opacity: 1.2, txt: "3.遵循代码规范，有良好的编程习惯。", scle: true, fontSize: '15px' },
    { pos: 40 - posY, opacity: 1.2, txt: "4.有强烈的求知欲，具备良好的学习能力和沟通能力。积极乐观，认真负责，乐于协作。", scle: true, fontSize: '15px' },
    { pos: 45 - posY, opacity: 1.2, txt: "5.若有项目经验和开源作品优先招募", scle: true, fontSize: '15px' },
    { pos: 50 - posY, opacity: 8, txt: "后端方向:", scle: true, fontSize: '30px' },
    { pos: 55 - posY, opacity: 8, txt: "招募要求:", scle: true, fontSize: '20px' },
    { pos: 60 - posY, opacity: 8, txt: "1.热爱计算机科学和互联网技术，掌握Go语言基本语法或者熟练使用其他编程语言。", scle: true, fontSize: '15px' },
    { pos: 65 - posY, opacity: 8, txt: "2.掌握一定的计算机基础知识，简单了解数据结构、算法和操作系统知识。", scle: true, fontSize: '15px' },
    {
      pos: 70 - posY, opacity: 8, txt: "3.能够使用Web框架和数据库进行简单的服务端编程。", scle: true, fontSize: '15px'
    },
    { pos: 75 - posY, opacity: 8, txt: "4.有优秀的逻辑分析能力，能够对业务逻辑进行合理的抽象和拆分有强烈的求知欲，优秀的学习和沟通能力，积极乐观，认真负责，乐于协作。", scle: true, fontSize: '15px' },
    { pos: 80 - posY, opacity: 8, txt: "5.若有项目经验和开源作品者优先招募。", scle: true, fontSize: '15px' },
    { pos: 85 - posY, opacity: 8, txt: "招募对象:", scle: true, fontSize: '30px' },
    { pos: 90 - posY, opacity: 8, txt: "大一或大二在校学生。", scle: true, fontSize: '20px' },
    { pos: 95 - posY, opacity: 8, txt: "加入我们:", scle: true, fontSize: '30px' },
    { pos: 95, opacity: 8, txt: "发送你的简历（邮件主题命名：前端/后端-学号-姓名，如：后端-2020xxxxxx关月金，在简历中留下你的QQ号码，并以PDF格式发送）至web@redrock.team", scle: true, fontSize: '15px' },
  ]
  const mobileList = [
    { pos: 2, opacity: 1, txt: "移动开发部", scle: false, reflect: true, fontSize: '40px' },
    { pos: 15, opacity: 1.5, txt: "安卓方向:", scle: true, fontSize: '30px' },
    { pos: 19, opacity: 1.5, txt: "招募要求:", scle: true, fontSize: '20px' },
    { pos: 23, opacity: 1.5, txt: "1.对软件开发有浓厚兴趣，有良好的学习能力，积极乐观，有责任心。", scle: true, fontSize: '15px' },
    { pos: 27, opacity: 1.5, txt: "2.有一定的计算机网络知识，有基本的数据结构、算法基础。", scle: true, fontSize: '15px' },
    { pos: 31, opacity: 1.5, txt: "3.熟练掌握git合作开发命令。", scle: true, fontSize: '15px' },
    { pos: 35, opacity: 1.5, txt: "4.能够独立完成工作，具有较强的综合分析问题及解决问题的能力。", scle: true, fontSize: '15px' },
    { pos: 39, opacity: 1.5, txt: "5.熟悉java的使用，对抽象和封装有了解，能够熟练使用Android studio。", scle: true, fontSize: '15px' },
    { pos: 43, opacity: 1.5, txt: "6.若有项目经验和开源作品优先招募。", scle: true, fontSize: '15px' },
    { pos: 47, opacity: 8, txt: "iOS方向:", scle: true, fontSize: '30px' },
    { pos: 51, opacity: 8, txt: "招募要求:", scle: true, fontSize: '20px' },
    { pos: 55, opacity: 8, txt: "1.对软件开发有浓厚兴趣，有良好的学习能力，积极乐观，有责任心。", scle: true, fontSize: '15px' },
    {
      pos: 59, opacity: 8, txt: "2.有一定的计算机网络知识，有基本的数据结构、算法基础。", scle: true, fontSize: '15px'
    },
    { pos: 63, opacity: 8, txt: "3.熟练掌握git合作开发命令。", scle: true, fontSize: '15px' },
    { pos: 67, opacity: 8, txt: "4.能够独立完成工作，具有较强的综合分析问题及解决问题的能力。", scle: true, fontSize: '15px' },
    { pos: 71, opacity: 8, txt: "5.熟悉objective-C语言的语法及使用，掌握iOS基本控件的使用，熟练使用xcode。", scle: true, fontSize: '15px' },
    { pos: 75, opacity: 8, txt: "6.若有项目经验和开源作品优先招募。", scle: true, fontSize: '15px' },
    { pos: 79, opacity: 8, txt: "招募对象", scle: true, fontSize: '30px' },
    { pos: 83, opacity: 8, txt: "大一或大二在校学生。", scle: true, fontSize: '15px' },
    { pos: 87, opacity: 8, txt: "加入我们:", scle: true, fontSize: '30px' },
    { pos: 91, opacity: 8, txt: "发送你的简历（邮件主题命名：移动开发部春招- Android/iOS，在正文中留下你的基本信息以及QQ号码，若有github项目地址则一并写入正文，并以PDF格式发送）至mobile@redrock.team。", scle: true, fontSize: '15px' },
  ]
  const sreList = [
    { pos: 2, opacity: 1, txt: "运维安全部", scle: false, reflect: true, fontSize: '40px' },
    { pos: 15, opacity: 0.5, txt: "整体要求:", scle: true, fontSize: '30px' },
    { pos: 23, opacity: 0.5, txt: "1.了解Linux操作，掌握Shell，python的使用或者熟练使用其他编程语言。", scle: true, fontSize: '15px' },
    { pos: 27, opacity: 0.5, txt: "2.掌握一定的计算机网络知识，简单了解数据结构、算法和操作系统知识。", scle: true, fontSize: '15px' },
    { pos: 31, opacity: 0.5, txt: "3.能够使用Shell和Python编写简单的自动化脚本。", scle: true, fontSize: '15px' },
    { pos: 35, opacity: 0.5, txt: "4.能够独立完成工作，具有较强的综合分析问题及解决问题的能力。", scle: true, fontSize: '15px' },
    { pos: 39, opacity: 0.5, txt: "5.若有项目经验和开源作品优先招募。", scle: true, fontSize: '15px' },
    { pos: 43, opacity: 2, txt: "k8s运维方向:", scle: true, fontSize: '30px' },
    { pos: 47, opacity: 2, txt: "招募要求:", scle: true, fontSize: '20px' },
    { pos: 51, opacity: 2, txt: "1.熟知Docker相关指令，能自行构建Docker镜像、编写docker-compose。", scle: true, fontSize: '20px' },
    { pos: 55, opacity: 2, txt: "2.了解K8S集群基本概念和原理，熟悉K8S的基本组件 包含但不限于deployment、ingress、helm等。", scle: true, fontSize: '15px' },
    {
      pos: 59, opacity: 2, txt: "3.了解ceph的基本操作。", scle: true, fontSize: '15px'
    },
    { pos: 63, opacity: 2, txt: "4.能分析日志、追查并解决问题。", scle: true, fontSize: '15px' },
    { pos: 67, opacity: 4, txt: "DBA方向:", scle: true, fontSize: '30px' },
    { pos: 71, opacity: 4, txt: "招募要求:", scle: true, fontSize: '20px' },
    { pos: 75, opacity: 4, txt: "1.熟悉基础的sql语句。", scle: true, fontSize: '15px' },
    { pos: 79, opacity: 4, txt: "2.知道MySQL复制，实时备份、负载均衡等技术", scle: true, fontSize: '15px' },
    { pos: 83, opacity: 4, txt: "3.了解核心参数以及调整。", scle: true, fontSize: '15px' },
    { pos: 87, opacity: 6, txt: "网络运维方向:", scle: true, fontSize: '15px' },
    { pos: 91, opacity: 6, txt: "1.有基本的网络知识，熟悉 OSI 模型。", scle: true, fontSize: '15px' },
    { pos: 94, opacity: 6, txt: "2.熟悉TCP/IP协议、NAT、VPN等协议及相关技术。", scle: true, fontSize: '15px' },
    { pos: 97, opacity: 6, txt: "3.熟悉 Linux 网络配置以及 iptables 相关操作。", scle: true, fontSize: '15px' },
    { pos: 101, opacity: 6, txt: "4.了解常见品牌路由、交换机的配置。", scle: true, fontSize: '15px' },
    { pos: 105, opacity: 6, txt: "5.自己折腾过家里网络环境的优先（如全屋万兆改造）。", scle: true, fontSize: '15px' },
    { pos: 109, opacity: 8, txt: "Devops方向:", scle: true, fontSize: '15px' },
    { pos: 113, opacity: 8, txt: "招募要求:", scle: true, fontSize: '15px' },
    { pos: 117, opacity: 8, txt: "1.知道gitlab 以及gitlab ci。", scle: true, fontSize: '15px' },
    { pos: 121, opacity: 8, txt: "2.掌握Docker/k8s/pve的基础操作，搭建以及维护。", scle: true, fontSize: '15px' },
    { pos: 125, opacity: 8, txt: "3.实践过CI/CD持续集成和自动化经验者优先。", scle: true, fontSize: '15px' },
    { pos: 129, opacity: 8, txt: "4.能够运用主机监控、日志分析 追查问题 提高稳定性。", scle: true, fontSize: '15px' },
    { pos: 133, opacity: 8, txt: "招募对象:", scle: true, fontSize: '15px' },
    { pos: 137, opacity: 8, txt: "大一或大二在校学生。", scle: true, fontSize: '15px' },
    { pos: 141, opacity: 8, txt: "加入我们:", scle: true, fontSize: '15px' },
    { pos: 145, opacity: 8, txt: "发送你的简历（邮件主题命名：方向-学号-姓名，如：DBA-2020xxxxxx-李田所，在正文中留下你的QQ号码，若有github项目地址则一并写入正文，并以PDF格式发送）至sre@redrock.team如无上述技能，但想加入我们，也欢迎前来报名，我们会酌情考量并进行相关培训（包教会。", scle: true, fontSize: '15px' },
  ]
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
        <h1>| | |</h1>
        <Parallax strength={500}
          renderLayer={e => {
            console.log(e);
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
        <h1>IV</h1>
        <Parallax
          strength={200}
          renderLayer={e => {
            console.log(e);
            return (
              <div>
                {sreList.map(item => {
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
              </div>
            )
          }
          }
        >
          <div style={{ height: "400vh" }}>
          </div>
        </Parallax>
      </div>
    </>
  )
}

export default Spring
