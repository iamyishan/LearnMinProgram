// pages/home/home.js
// getApp()获取App()产生的示例对象
// const app = getApp()

// const name = app.globalData.name;
// const age = app.globalData.age;

// 注册一个页面
// 页面也有自己的生命周期函数
Page({
  // ------------ 2.初始化数据 -------------------
  data: {
    message: '哈哈哈',
    list: []
  },
  onLoad() {
    console.log('onLoad')
    console.log(this)
    const _this = this;
    wx.request({
      url: 'http://152.136.185.210:7878/api/m5/recommend',
      success: function (res) {
        console.log(res)
        const data = res.data.data.list;
        _this.setData({
          list: data
        })
      }
    })
  },
  // 页面显示出来时
  onShow() {
    console.log('onShow')
  },
  // 页面初次渲染完成时
  onReady() {
    console.log('onReady')
  },
  // 当页面隐藏起来时
  onHide() {
    console.log('onHide')
  },
  onUnload() {
    console.log('onUnload')
  },

  // ------------ 3.监听wxml中相关的一些事件 -------------------
  handleGetUserInfo(event) {
    console.log(event.detail.userInfo)
  },
  handleViewClick() {
    console.log('哈哈哈被点击了')
  },
  // ------------ 4.其他事件 -------------------
  // 监听页面的滚动
  onPageScroll(obj){
    console.log(obj)
  },
  onReachBottom(){
    console.log('页面滚动到顶部')
  },
  onPullDownRefresh() {
    console.log('下拉刷新的事件')
  }
})