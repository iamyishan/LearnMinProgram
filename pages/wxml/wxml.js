// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: "hello",
    firstname: 'kobe',
    lastname: 'bryant',
    nowTime:new Date().toLocaleDateString(),
    isActive: false,
    isShow:true,
    score: 45,
    movies: ['星际穿越', '盗梦空间', '大话西游'],
    nums: [
      [10, 14, 11, 18],
      [20, 24, 31, 48],
      [110, 124, 211, 318],
    ],
    letters: ['a', 'b', 'c']
  },
  handleSwitchColor(){
    this.setData({
      isActive:!this.data.isActive
    })
  },
  handleSwitchShow(){
    this.setData({
    isShow:!this.data.isShow
  })
},
handleIncrement() {
  this.setData({
    score: this.data.score + 6
  })
}
})