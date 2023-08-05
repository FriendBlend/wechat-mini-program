// pages/initiate/init-else/init-else.js
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
    wx.redirectTo({
      url: '../../room/room',
    })
  }, 

  setPopulation(event) {
    var population = -1;
    const button_id = event.currentTarget.id;
    if (button_id == "less-than-4") {
      population = 4;
    } else if (button_id == "5-8") {
      population = 8;
    } else if (button_id == "more-than-8") {
      population = 10;
    }
    console.log("初始座位数：" + population)
  },

  minusExpense(event) {
    console.log("消费降级")
  },

  plusExpense(event) {
    console.log("消费升级")
  },

  complete(event) {
    // TODO: Store all the above info into database.
    console.log("完成！")
  }
})