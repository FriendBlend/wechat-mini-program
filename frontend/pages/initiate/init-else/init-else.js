// pages/initiate/init-else/init-else.js
Page({

  /**
   * Page initial data
   */
  data: {
    dollarCount: 0,
    population: 0
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
    var newPopulation = 0;
    const button_id = event.currentTarget.id;
    if (button_id == "less-than-4") {
      newPopulation = 4;
    } else if (button_id == "5-8") {
      newPopulation = 8;
    } else if (button_id == "more-than-8") {
      newPopulation = 10;
    }
    this.setData({
      population: newPopulation
    });
    console.log("初始座位数：" + this.data.population);
  },

  minusExpense(event) {
    if (this.data.dollarCount > 0) {
      this.setData({
        dollarCount: this.data.dollarCount - 1,
      });
    }
  },

  plusExpense(event) {
    if (this.data.dollarCount < 3) {
      this.setData({
        dollarCount: this.data.dollarCount + 1,
      });
    }
  },

  complete(event) {
    // TODO: Store all the above info into database.
    console.log("完成！")
  }
})