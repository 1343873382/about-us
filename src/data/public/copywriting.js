/*
 * @Author: lin
 * @Date: 2019-07-10 17:01:13
 * @LastEditTime: 2020-10-15 20:38:18
 * @FilePath: \about-us\src\data\public\copywriting.js
 */
export const copywritingData = {
  footer: {
    copyright: 'COPYRIGHT © 红岩网校工作站',
    address: '地址：重庆市南岸区崇文路2号(重庆邮电大学内) 400065',
    email: 'E-mail:redrock@cqupt.edu.cn (023-62461084)'
  },
  aboutus: {
    icon: [
      { img: require('../../assets/aboutus/1.png'), number: '2000', info: '成立时间' },
      { img: require('../../assets/aboutus/2.png'), number: '18+', info: '获奖数量' },
      { img: require('../../assets/aboutus/3.png'), number: '53884', info: '掌上重邮累计用户' },
      { img: require('../../assets/aboutus/4.png'), number: '65523+', info: '新媒体关注量' },
      { img: require('../../assets/aboutus/5.png'), number: '697584+', info: '新媒体阅读量' },
      { img: require('../../assets/aboutus/6.png'), number: '28+', info: '旗下产品数量' }
    ],
    copywriting: `红岩网校工作站是学校唯一一个从事互联网产品开发运营的校级学生组织，在校团委的指导下，由学生自我管理，多年来走出了一大批优秀的IT互联网人才，深受腾讯、阿里巴巴、字节跳动、华为等知名互联网企业的青睐。 团队先后获评“全国五四红旗团支部”、“团中央新媒体专业工作室”、“重庆市IT杰出青年群体”等系列荣誉。开发上线了“重邮小帮手”微信公众号，“重邮帮”微信小程序、“掌上重邮”APP等一系列优秀的校园网络产品，深受广大师生好评。`
  },
  carousel: [
    'https://s1.ax1x.com/2020/10/11/0gGYbF.jpg',
    'https://s1.ax1x.com/2020/10/11/0gGGuT.jpg',
    'https://s1.ax1x.com/2020/10/11/0gGJDU.jpg',
    'https://s1.ax1x.com/2020/10/11/0gG3vV.jpg'
  ],
  department: {
    copywriting: '红岩网校工作站工作模式与当前互联网产品开发模式相同。五个部门各司其职，共同协力打造服务于学生的各类产品。',
    masters: [
      {
        job: '站长',
        name: '郑煜',
        intro: '',
        avatar: require('../../assets/avatar/zy.jpg')
      },
      {
        job: '副站长',
        name: '刘宇锋',
        intro: '分管产品策划及运营部',
        avatar: require('../../assets/avatar/lyf.jpg')
      },
      {
        job: '副站长',
        name: '吴嫣冉',
        intro: '分管视觉设计部',
        avatar: require('../../assets/avatar/wyr.jpg')
      },
      {
        job: '副站长',
        name: '刘静',
        intro: '分管Web研发部',
        avatar: require('../../assets/avatar/lj.jpg')
      },
      {
        job: '副站长',
        name: '陈阳',
        intro: '分管移动开发部',
        avatar: require('../../assets/avatar/cy.jpg')
      },
      {
        job: '副站长',
        name: '张开宇',
        intro: '分管运维安全部',
        avatar: require('../../assets/avatar/zky.jpg')
      }
    ],
    departments: [
      {
        name: '站长团',
        introduction: '红岩网校工作站站长团，站长管理各个部门，五个副站长分别管理产品策划及运营部、视觉设计部、web研发部、移动开发部、运维安全部，共同管理网校日常。站长团成员均具有较强的学习能力、管理能力，并有一定的技术特长。红岩网校工作站在站长团的带领下稳定发展。',
        photo: require('../../assets/department/leader.jpg')
      },
      {
        name: '产品策划及运营部',
        introduction: '结合数据分析挖掘用户需求，带给用户更好的体验。利用新媒体平台，创作优秀文案，助推活动及产品。活跃于各个部门之间，是促进各部门沟通的桥梁。',
        photo: require('../../assets/department/pm.jpg')
      },
      {
        name: '视觉设计部',
        introduction: '将产品原型视觉转化，跟踪产品视觉及体验效果。设计移动端、PC端产品用户界面，进行整体美化及美术设计，创作吸睛宣传海报，设计网站产品动画及动效。',
        photo: require('../../assets/department/design.jpg')
      },
      {
        name: 'Web研发部',
        introduction: '主要分为前端和后端两个方向，前端将视觉页面还原为代码，带给用户极致体验；后端开发构造清晰数据模型，提供稳定中心服务和强大的后台驱动。',
        photo: require('../../assets/department/web.jpg')
      },
      {
        name: '移动开发部',
        introduction: '负责移动端产品的开发，涵盖 Android、 iOS 两个平台。助力“掌上重邮”、“约跑”等产品将视觉的设计图通过代码转化为用户友好的产品，满足不同场景下的用户需求，创造出令人惊艳的作品。',
        photo: require('../../assets/department/mobile.jpg')
      },
      {
        name: '运维安全部',
        introduction: '维护网校服务器的稳定与安全，从系统架构到基础设施搭建，从项目部署到业务性能优化。基于Linux，追求先进技术栈和极致性能。',
        photo: require('../../assets/department/sre.jpg')
      }
    ]
  }
}
