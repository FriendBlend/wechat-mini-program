// pages/index/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    upcomingEvent: {
      partyId: "1234567890",
      partyType: "桌游",
      partyTypeEng: "board-game",
      partySkin: "#10AEFF",
      partyName: "Brady的紧急派对",
      partyYear: "2023",
      partyMonth: "8",
      partyDate: "1",
      partyWeekday: "星期二",
      partyAmPm: "下午",
      partyTime: "3",
      partyLocation: { city: "北京市", district: "海淀区", detail: "领站购物广场 3楼 Room201"}
    },
    showNamecard: false,
    currentUser: {
      name: '仁喆',
      skin: '#979797',
      userPictures: [
        '../../images/large-namecard/brady.png',
        '../../images/large-namecard/brady2.jpeg',
        '../../images/large-namecard/brady3.jpeg'
      ]
    }
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
      url: '/frontend/pages/events/events',
    })
  },

  showNamecard(event) {
    this.setData({
      showNamecard: true
    });
  },
  hideNamecard() {
    this.setData({
      showNamecard: false
    });
  }
})