/*
 * @Author: your name
 * @Date: 2021-03-08 13:05:23
 * @LastEditTime: 2021-03-11 14:47:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /about-us/src/pc/pages/SpringAsk/config.js
 */  
const posY = 4
const offset = 10
const offsetTitle = 10
const offsetMainTitle = 8
const fontSize = (num) => `${num}px`
const bigSize = fontSize(40)
const midSize = fontSize(32)
const smallSize = fontSize(13)
const pmOffset = 5
const pmList = [
  { pos: 5, opacity: 1, txt: "产品策划及运营部", scle: false, fontSize: '35px' },
  { pos: 15, opacity: 1.5, txt: "产品方向:", scle: true, fontSize: bigSize },
  { pos: 21, opacity: 2, txt: "招募要求:", scle: true, fontSize: midSize },
  { pos: 29, opacity: 2, txt: "1. 擅长逻辑思维，喜欢思考事物背后的逻辑。", scle: true, fontSize: smallSize },
  { pos: 33, opacity: 2, txt: "2.良好的沟通能力与有力的项目推进能力。", scle: true, fontSize: smallSize },
  { pos: 37, opacity: 2, txt: "3.有较强的学习能力，具有较强的产品文档书写能力，熟练使用相关办公软件（如Office、Axure、x-mind等）。", scle: true, fontSize: smallSize },

  { pos: 42, opacity: 2, txt: "4.热爱产品，具有强烈责任感，良好的时间管理能力，抗压能力强。", scle: true, fontSize: smallSize },
  { pos: 50 - pmOffset, opacity: 8, txt: "运营方向:", scle: true, fontSize: '50px' },
  { pos: 56- pmOffset, opacity: 8, txt: "招募要求：", scle: true, fontSize: midSize },
  { pos: 62- pmOffset, opacity: 8, txt: "1.具备一定的文字功底和活动策划能力，能捕捉热点，撰写文案能力强。", scle: true, fontSize: smallSize },
  { pos: 66- pmOffset, opacity: 8, txt: "2.有一定的内容审美，创造力强，熟练图片PS操作，热爱摄影。", scle: true, fontSize: smallSize},
  { pos: 70- pmOffset, opacity: 8, txt: "3.熟悉微信公众号管理，会使用秀米、135编辑器等创作工具，有新媒体运营经验者优先。", scle: true, fontSize: smallSize },
  { pos: 75- pmOffset, opacity: 8, txt: "4.有较强的抗压能力，良好的沟通能力，责任心强，善于学习。", scle: true, fontSize: smallSize },
  { pos: 78, opacity: 8, txt: "招募对象：", scle: true, fontSize: midSize },
  { pos: 83, opacity: 8, txt: "大一或大二在校学生。", scle: true, fontSize: smallSize },
  { pos: 85, opacity: 8, txt: "加入我们:", scle: true, fontSize: midSize },
  { pos: 90, opacity: 8, txt: "发送你的简历（邮件主题命名：产品/运营-学号-姓名，如：运营-2020xxxxxx-刘某，在简历中留下你的QQ号码，并以PDF格式发送）至pm@redrock.team", scle: true, fontSize: smallSize },
]
const webList = [
  { pos: 2, opacity: 1, txt: "web研发部", scle: false, reflect: true, fontSize: '40px' },
  { pos: 15 - posY, opacity: 1.2, txt: "前端方向:", scle: true, fontSize: bigSize },
  { pos: 20 - posY, opacity: 1.2, txt: "招募要求:", scle: true, fontSize: midSize },
  { pos: 25 - posY, opacity: 1.2, txt: "1.掌握HTML/CSS/JavaScript基本语法，拥有良好的JavaScript基础知识，能还原静态页面样式，熟悉各种布局方法，熟悉DOM操作和网络请求。", scle: true, fontSize: smallSize },
  { pos: 31 - posY, opacity: 1.2, txt: "2.了解HTTP协议，至少熟悉请求方法和常见状态码代表的含义了解nodejs，了解异步编程。", scle: true, fontSize: smallSize },
  { pos: 35 - posY, opacity: 1.2, txt: "3.遵循代码规范，有良好的编程习惯。", scle: true, fontSize: smallSize },
  { pos: 38 - posY, opacity: 1.2, txt: "4.有强烈的求知欲，具备良好的学习能力和沟通能力。积极乐观，认真负责，乐于协作。", scle: true, fontSize: smallSize },
  { pos: 42 - posY, opacity: 1.2, txt: "5.若有项目经验和开源作品优先招募", scle: true, fontSize: smallSize },
  { pos: 50 - posY, opacity: 8, txt: "后端方向:", scle: true, fontSize: bigSize },
  { pos: 55 - posY, opacity: 8, txt: "招募要求:", scle: true, fontSize: midSize },
  { pos: 60 - posY, opacity: 8, txt: "1.热爱计算机科学和互联网技术，掌握Go语言基本语法或者熟练使用其他编程语言。", scle: true, fontSize: smallSize },
  { pos: 65 - posY, opacity: 8, txt: "2.掌握一定的计算机基础知识，简单了解数据结构、算法和操作系统知识。", scle: true, fontSize: smallSize },
  {
    pos: 70 - posY, opacity: 8, txt: "3.能够使用Web框架和数据库进行简单的服务端编程。", scle: true, fontSize: smallSize
  },
  { pos: 75 - posY, opacity: 8, txt: "4.有优秀的逻辑分析能力，能够对业务逻辑进行合理的抽象和拆分有强烈的求知欲，优秀的学习和沟通能力，积极乐观，认真负责，乐于协作。", scle: true, fontSize: smallSize },
  { pos: 80 - posY, opacity: 8, txt: "5.若有项目经验和开源作品者优先招募。", scle: true, fontSize: smallSize},
  { pos: 85 - posY, opacity: 8, txt: "招募对象:", scle: true, fontSize: midSize  },
  { pos: 90 - posY, opacity: 8, txt: "大一或大二在校学生。", scle: true, fontSize: smallSize },
  { pos: 93 - posY, opacity: 8, txt: "加入我们:", scle: true, fontSize: midSize },
  { pos: 93, opacity: 8, txt: "发送你的简历（邮件主题命名：前端/后端-学号-姓名，如：后端-2020xxxxxx关月金，在简历中留下你的QQ号码，并以PDF格式发送）至web@redrock.team", scle: true, fontSize: '15px' },
]
const mobileList = [
  { pos: 2, opacity: 1, txt: "移动开发部", scle: false, reflect: true, fontSize: '35px' },
  { pos: 15, opacity: 1.5, txt: "安卓方向:", scle: true, fontSize: bigSize },
  { pos: 19, opacity: 1.5, txt: "招募要求:", scle: true, fontSize: midSize },
  { pos: 23, opacity: 1.5, txt: "1.对软件开发有浓厚兴趣，有良好的学习能力，积极乐观，有责任心。", scle: true, fontSize: smallSize },
  { pos: 27, opacity: 1.5, txt: "2.有一定的计算机网络知识，有基本的数据结构、算法基础。", scle: true, fontSize: smallSize },
  { pos: 31, opacity: 1.5, txt: "3.熟练掌握git合作开发命令。", scle: true, fontSize: smallSize },
  { pos: 34, opacity: 1.5, txt: "4.能够独立完成工作，具有较强的综合分析问题及解决问题的能力。", scle: true, fontSize: smallSize},
  { pos: 38, opacity: 1.5, txt: "5.熟悉java的使用，对抽象和封装有了解，能够熟练使用Android studio。", scle: true, fontSize: smallSize },
  { pos: 42, opacity: 1.5, txt: "6.若有项目经验和开源作品优先招募。", scle: true, fontSize: smallSize },
  { pos: 47, opacity: 8, txt: "iOS方向:", scle: true, fontSize: bigSize },
  { pos: 51, opacity: 8, txt: "招募要求:", scle: true, fontSize: midSize },
  { pos: 55, opacity: 8, txt: "1.对软件开发有浓厚兴趣，有良好的学习能力，积极乐观，有责任心。", scle: true, fontSize: smallSize },
  {
    pos: 59, opacity: 8, txt: "2.有一定的计算机网络知识，有基本的数据结构、算法基础。", scle: true, fontSize: smallSize
  },
  { pos: 63, opacity: 8, txt: "3.熟练掌握git合作开发命令。", scle: true, fontSize: smallSize },
  { pos: 67, opacity: 8, txt: "4.能够独立完成工作，具有较强的综合分析问题及解决问题的能力。", scle: true, fontSize: smallSize },
  { pos: 71, opacity: 8, txt: "5.熟悉objective-C语言的语法及使用，掌握iOS基本控件的使用，熟练使用xcode。", scle: true, fontSize: smallSize },
  { pos: 75, opacity: 8, txt: "6.若有项目经验和开源作品优先招募。", scle: true, fontSize: smallSize},
  { pos: 77, opacity: 8, txt: "招募对象", scle: true, fontSize: midSize },
  { pos: 82, opacity: 8, txt: "大一或大二在校学生。", scle: true, fontSize:smallSize },
  { pos: 83, opacity: 8, txt: "加入我们:", scle: true, fontSize: midSize },
  { pos: 88, opacity: 8, txt: "发送你的简历（邮件主题命名：移动开发部春招- Android/iOS，在正文中留下你的基本信息以及QQ号码，若有github项目地址则一并写入正文，并以PDF格式发送）至mobile@redrock.team。", scle: true, fontSize: smallSize },
]
const sreList = [
  { pos: 2, opacity: 1, txt: "运维安全部", scle: false, reflect: true, fontSize: '35px' },
  { pos: 15, opacity: 0.5, txt: "整体要求:", scle: true, fontSize: midSize },
  { pos: 23, opacity: 0.5, txt: "1.了解Linux操作，掌握Shell，python的使用或者熟练使用其他编程语言。", scle: true, fontSize:smallSize },
  { pos: 27, opacity: 0.5, txt: "2.掌握一定的计算机网络知识，简单了解数据结构、算法和操作系统知识。", scle: true, fontSize: smallSize },
  { pos: 31, opacity: 0.5, txt: "3.能够使用Shell和Python编写简单的自动化脚本。", scle: true, fontSize: smallSize },
  { pos: 35, opacity: 0.5, txt: "4.能够独立完成工作，具有较强的综合分析问题及解决问题的能力。", scle: true, fontSize: smallSize },
  { pos: 39, opacity: 0.5, txt: "5.若有项目经验和开源作品优先招募。", scle: true, fontSize: smallSize },
  { pos: 43 + offsetMainTitle, opacity: 2, txt: "k8s运维方向:", scle: true, fontSize: bigSize },
  { pos: 47 + offsetTitle, opacity: 2, txt: "招募要求:", scle: true, fontSize: midSize },
  { pos: 53 + offset, opacity: 2, txt: "1.熟知Docker相关指令，能自行构建Docker镜像、编写docker-compose。", scle: true, fontSize: smallSize },
  { pos: 57 + offset, opacity: 2, txt: "2.了解K8S集群基本概念和原理，熟悉K8S的基本组件 包含但不限于deployment、ingress、helm等。", scle: true, fontSize: smallSize },
  {
    pos: 61 + offset, opacity: 2, txt: "3.了解ceph的基本操作。", scle: true, fontSize: smallSize
  },
  { pos: 65 + offset, opacity: 2, txt: "4.能分析日志、追查并解决问题。", scle: true, fontSize: smallSize },
  { pos: 74 + offsetMainTitle, opacity: 6, txt: "DBA方向:", scle: true, fontSize: bigSize},
  { pos: 78 + offsetTitle, opacity: 6, txt: "招募要求:", scle: true, fontSize: midSize },
  { pos: 84 + offset, opacity: 6, txt: "1.熟悉基础的sql语句。", scle: true, fontSize: smallSize },
  { pos: 88 + offset, opacity: 6, txt: "2.知道MySQL复制，实时备份、负载均衡等技术", scle: true, fontSize: smallSize },
  { pos: 92 + offset, opacity: 6, txt: "3.了解核心参数以及调整。", scle: true, fontSize: smallSize },
  { pos: 100 + offsetMainTitle, opacity: 8, txt: "网络运维方向:", scle: true, fontSize: bigSize },
  { pos: 104 + offsetTitle, opacity: 8, txt: "招募要求:", scle: true, fontSize: midSize },
  { pos: 110 + offset, opacity: 8, txt: "1.有基本的网络知识，熟悉 OSI 模型。", scle: true, fontSize:smallSize },
  { pos: 114 + offset, opacity: 8, txt: "2.熟悉TCP/IP协议、NAT、VPN等协议及相关技术。", scle: true, fontSize: smallSize },
  { pos: 118 + offset, opacity: 8, txt: "3.熟悉 Linux 网络配置以及 iptables 相关操作。", scle: true, fontSize: smallSize },
  { pos: 122 + offset, opacity: 8, txt: "4.了解常见品牌路由、交换机的配置。", scle: true, fontSize: smallSize },
  { pos: 126 + offset, opacity: 8, txt: "5.自己折腾过家里网络环境的优先（如全屋万兆改造）。", scle: true, fontSize: smallSize },
  { pos: 132 + offsetMainTitle, opacity: 12, txt: "Devops方向:", scle: true, fontSize: bigSize },
  { pos: 136 + offsetTitle, opacity: 12, txt: "招募要求:", scle: true, fontSize: midSize },
  { pos: 142 + offset, opacity: 12, txt: "1.知道gitlab 以及gitlab ci。", scle: true, fontSize: smallSize },
  { pos: 146 + offset, opacity: 12, txt: "2.掌握Docker/k8s/pve的基础操作，搭建以及维护。", scle: true, fontSize: smallSize },
  { pos: 150 + offset, opacity: 12, txt: "3.实践过CI/CD持续集成和自动化经验者优先。", scle: true, fontSize: smallSize },
  { pos: 154 + offset, opacity: 12, txt: "4.能够运用主机监控、日志分析 追查问题 提高稳定性。", scle: true, fontSize: smallSize },
  { pos: 168, opacity: 14, txt: "招募对象:", scle: true, fontSize: midSize },
  { pos: 173, opacity: 14, txt: "大一或大二在校学生。", scle: true, fontSize: smallSize },
  { pos: 175, opacity: 14, txt: "加入我们:", scle: true, fontSize: midSize },
  { pos: 180, opacity: 14, txt: "发送你的简历（邮件主题命名：方向-学号-姓名，如：DBA-2020xxxxxx-李田所，在正文中留下你的QQ号码，若有github项目地址则一并写入正文，并以PDF格式发送）至sre@redrock.team如无上述技能，但想加入我们，也欢迎前来报名，我们会酌情考量并进行相关培训（包教会。", scle: true, fontSize: smallSize },
]
const designList = [
  { pos: 2, opacity: 1, txt: "视觉设计部", scle: false, reflect: true, fontSize: '35px' },
  { pos: 20, opacity: 1.5, txt: "招募要求:", scle: true, fontSize: midSize },
  { pos: 30, opacity: 1.5, txt: "1、有一定美术功底和视觉审美能力，能独立完成作品。", scle: true, fontSize: smallSize},
  { pos: 35, opacity: 1.5, txt: "2、对视觉设计感兴趣，熟悉ps基本操作，有较强的学习能力。", scle: true, fontSize: smallSize },
  { pos: 40, opacity: 1.5, txt: "3、个性乐观积极，善于沟通，有责任心，抗压能力强。", scle: true, fontSize: smallSize },
  { pos: 55, opacity: 1.5, txt: "招募对象:", scle: true, fontSize: midSize },
  { pos: 63, opacity: 1.5, txt: "大一在校学生。", scle: true, fontSize: smallSize },
  { pos: 67, opacity: 1.5, txt: "加入我们:", scle: true, fontSize: midSize },
  { pos: 75, opacity: 1.5, txt: "将你的作品集以PDF格式发送至design@redrock.team（邮件主题命名格式为： 姓名-学号-专业-电话，如：于某-2020111111-数字媒体艺术-13345556777）。", scle: true, fontSize: smallSize },
]
const flower = [
  {opacity:1,rotate:-40},
  {opacity:1,rotate:-30},
  {opacity:1,rotate:-20},
  {opacity:1,rotate:-10},
  {opacity:1,rotate:0},
  {opacity:1,rotate:10},
  {opacity:1,rotate:20},
  {opacity:1,rotate:30},
  {opacity:1,rotate:40},
]
export const getPmData = () => pmList
export const getWebData = () => webList
export const getMoblieData = () => mobileList
export const getSreData = () => sreList
export const getDesign = () => designList
export const getFlower = () => flower
