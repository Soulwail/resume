// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: 0,
    height: 0,
    name: '王玮玮',
    spell: 'Wang Weiwei',
    job: '前端工程师',
    exp: '2年工作经验',
    tel: '18918019597',
    sex: '男',
    age: '25',
    email: '879457843@qq.com',
    homepage: 'www.soulwail.com',
    address: '上海市浦东新区沪南公路 8666 号',
    skills: [
      { name: 'JavaScript', percent: 75 },
      { name: 'HTML/CSS', percent: 80 },
      { name: 'Vue', percent: 70 },
      { name: 'Webpack', percent: 35 },
      { name: 'Git', percent: 80 }
    ],
    edu: [
      {
        school: '常州信息职业技术学院(专科)',
        major: '数控技术',
        year: '2014-2017',
        desc: '本专业是为培养学生从事数控加工、机械产品设计与制造、生产技术管理等方面的高等工程技术应用型人才，是具有实用技能特点的特色专业。要求学生能在生产现场从事产品制造、开发工作，或在技术部门从事工艺、管理工作。'
      }
    ],
    work: [
      {
        company: '上海客主商务服务有限公司',
        job: '前端工程师',
        year: '2018/03-2019/05',
        desc: '参与开发客主会员管理系统、驿宝酒店管理系统、艾升尔世官方网站等项目，担任前端开发工程师。主要负责客主会员管理系统和驿宝酒店管理系统所有模块的开发和维护，负责艾升尔世官方网站的设计与开发，并且负责该项目的部分运维工作。'
      },
      {
        company: '北京思特奇信息技术股份有限公司',
        job: '前端工程师',
        year: '2019/05-至今',
        desc: '参与开发上海电信统一门户系统，担任前端开发工程师。主要工作是负责客户资料修改、商品查询、校园礼包订购、智能营销服务、甩单处理等模块的开发与维护，并且开发和维护项目中部分公用组件。'
      }
    ],
    project: [
      {
        name: '客主酒店宣传网站',
        desc: '该网站是公司的宣传网站，主要分为主页、合作共赢、关于我们、联系我们四个模块。网站主要采用 Grid 布局。从设计页面，到代码实现，到最后的打包上线，都是独立完成。技术栈包括了 Vue、IView等。并且使用 Filezilla Server 对服务器上的前端代码进行部署与管理。',
        link: 'https://github.com/Soulwail/KZHome'
      },
      {
        name: '艾升尔世官方网站',
        desc: '该网站是为化学公司设计的网站，主要介绍该公司的公司信息、相关产品、产品涉及领域以及公司的相关新闻。网站主体采用 Element UI 的 Layout 布局，将各个功能按模块展示，部分表格信息则采用 Grid 布局。技术栈包括了 Vue、Element UI、i18n、ECharts等。项目的中英文翻译采用 i18n 来实现，大大减少了项目的代码以及工作量，并且使用 vue-router 进行多级菜单以及页面的切换控制。',
        link: 'https://github.com/Soulwail/EProject'
      },
      {
        name: '客主会员管理系统',
        desc: '该管理系统是针对线下商家提供的会员管理系统，该管理系统分为会员接待模块、商家管理模块、项目管理模块、礼包管理模块、促销活动模块、消息管理模块、报表管理模块和账号管理模块。系统主要采用了 View UI 的 Layout 布局，将上述模块整合在一起。技术栈包括了 Vue、View UI、Vuex、ECharts等。项目中数据的管理结合使用 Vuex 和 Vue Prop。并且使用 Filezilla Server 对服务器上的前端代码进行部署与管理。'
      },
      {
        name: '上海电信统一门户',
        desc: '该管理系统是上海电信业务办理系统，主要负责客户资料修改、商品查询、智能营销服务、校园礼包订购、甩单处理等模块。其中客户资料管理又分为多个模块，多个模块使用 component 与 is 配合进行动态组件加载，并进行相应的权限控制与客户类型控制；商品查询使用 RegExp 完成对商品名称多个关键字匹配；智能营销服务分为集约派单与意向单两大子模块，使用模块化与组件化，对该模块进行拆分与整合，并提取出公共模块，大大减少了代码重复量与后期维护的难度。项目的技术栈包括了 Vue、Element UI、ECharts、Lodash、Mockjs、x2js、xml2js等。针对项目要求，单独开发并维护了单选框、多选框、证件号码输入框等公用组件。使用 x2js、xml2js 对以前系统接口反参进行兼容处理。项目的代码管理使用 SVN，多个项目地址配合不同的上线版本。'
      }
    ],
    introduction: '本人性格开朗、稳重、有活力，待人热情、真诚；对待工作认真负责，善于沟通协调，有较强的组织能力与团队精神；富有上进心，勤于学习，能不断提高自身的能力与综合素养。在未来的工作中，我将以充沛的精力，刻苦专研的精神来努力工作，稳定的提高自己的工作能力。'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let width = wx.getSystemInfoSync().windowWidth;
    let height = wx.getSystemInfoSync().windowHeight;
    
    this.setData({
      width: width,
      height: height
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})