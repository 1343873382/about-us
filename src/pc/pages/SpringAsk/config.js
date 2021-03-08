/*
 * @Author: your name
 * @Date: 2021-03-08 13:05:23
 * @LastEditTime: 2021-03-08 13:11:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /about-us/src/pc/pages/SpringAsk/config.js
 */
import { createContext } from 'react'
const pmData = [
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
export const pmList = createContext(pmData)