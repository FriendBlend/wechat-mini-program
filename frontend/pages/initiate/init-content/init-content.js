// frontend/pages/initiate/init-content/init-content.js
Page({

  /**
   * Page initial data
   */
  data: {
    selectedEvent: null,
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

  onSelection(event) {
    this.setData({
      selectedEvent: event.currentTarget.id
    });
    console.log(this.data.selectedEvent);
  },

  toLocation:function() {
    if (this.data.selectedEvent == null) {
      wx.showToast({
        title: '请选择一个活动内容',
      })
    }
    wx.navigateTo({
      url: '../init-location/init-location?dataEvent=' + this.data.selectedEvent
    })
  }, 
})