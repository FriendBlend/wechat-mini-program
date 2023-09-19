// pages/profile/profile.js
Page({

  /**
   * Page initial data
   */
  data: {
    activeTab: "friends",
    skin: "#979797",
    photos: 
    [
      "../../images/large-namecard/brady.png",
      "../../images/large-namecard/brady2.jpeg",
      "../../images/large-namecard/brady3.jpeg"
    ],
    friends:
    [
      "", ""
    ],
    events:
    [
      "", "", "", "", "", ""
    ]
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
  
  tabClick(e) {
    this.setData({
      activeTab: e.currentTarget.id
    });
  },

  toEdit() {
    wx.navigateTo({
      url: '../namecard-edit/namecard-edit',
    })
  },
  toPhoto() {
    wx.navigateTo({
      url: '../photo-edit/photo-edit',
    })
  }
})