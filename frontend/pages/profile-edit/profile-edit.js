// frontend/pages/profile-edit/profile-edit.js
Page({

  /**
   * Page initial data
   */
  data: {
    properties: [
      "称呼","性别","MBTI","地区",
      "大学&毕业时间: eg. HKU 25’", 
      "身高","星座","职业","爱好",
      "待过的城市","宠物"
    ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '编辑资料',
    })
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

  save() {
    // TODO: save logic
    wx.navigateBack({
      url: "../profile/profile"
    });
  }
})