// pages/index/index.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  },

  toRoom:function() {
    wx.navigateTo({
      url: '../room/room',
    })
  }, 
  toProfile:function() {
    wx.navigateTo({
      url: '../profile/profile',
    })
  }, 
  toInitiate:function() {
    wx.navigateTo({
      url: '../initiate/initiate',
    })
  }, 
  toJoin:function() {
    wx.navigateTo({
      url: '../join/join',
    })
  }, 
  toEvents:function() {
    wx.navigateTo({
      url: '../myEvents/myEvents',
    })
  }
})