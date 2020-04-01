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
    email: 'wang950907@gmail.com',
    address: '',
    skills: [
      { name: 'JavaScript', percent: 75 },
      { name: 'HTML/CSS', percent: 60 },
      { name: 'Vue', percent: 70 },
      { name: 'Webpack', percent: 30 },
      { name: 'Git', percent: 80 }
    ]
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