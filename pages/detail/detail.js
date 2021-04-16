// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: ''
  },
  onLoad: function (options) {
    console.log(options)
  },
  onUnload() {
    const pages = getCurrentPages()
    console.log(pages)
    const home = pages[pages.length - 2]
    // 2.调用页面对象的setData
    home.setData({
      title: "呵呵呵"
    })
  },

  handleBackHome() {
    wx.navigateBack({
      delta: 1,
    })
  }

})