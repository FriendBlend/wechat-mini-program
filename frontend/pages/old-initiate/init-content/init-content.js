// frontend/pages/initiate/init-content/init-content.js
Page({

  /**
   * Page initial data
   */
  data: {
    selectedEvent: null,
    partyName: ""
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
    console.log('selected: ' + this.data.selectedEvent);
  },

  getNameInput(event) {
    this.setData({
      partyName: event.detail.value
    })
  },

  skip(event) {
    // TODO: implement skip logic here
    if (this.data.partyName == "") {
      this.setData({
        partyName: "[用户]的紧急派对"
      });
    }
    wx.setStorageSync('partyContent', this.data.selectedEvent);
    wx.setStorageSync('partyName', this.data.partyName);

    wx.navigateTo({
      url: '../init-location/init-location'
    });
  },

  toLocation:function() {
    if (this.data.partyName == "") {
      this.setData({
        partyName: "[用户]的紧急派对"
      });
    }
    if (this.data.selectedEvent == null) {
      wx.showToast({
        title: '请选择一个活动内容',
        icon: 'error'
      });
      return;
    }
    wx.setStorageSync('partyContent', this.data.selectedEvent);
    wx.setStorageSync('partyName', this.data.partyName);
    wx.navigateTo({
      url: '../init-location/init-location'
    });
  }, 
})