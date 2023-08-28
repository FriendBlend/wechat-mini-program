// pages/initiate/init-else/init-else.js
Page({

  /**
   * Page initial data
   */
  data: {
    dollarCount: 0,
    partyName: "",  // 派对名称
    population: "",  // 人数
    remarks: ""  // 备注
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    // 从存储中检索地点和时间
    const locationData = wx.getStorageSync('partyLocation');
    const timeData = wx.getStorageSync('partyTime');

    this.setData({
      partyLocation: locationData.searchInput,
      partyTime: timeData.date + " " + timeData.ampm + " " + timeData.time
    });
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

  toRoom: function() {
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
    const {
      partyName, population, dollarCount, remarks
    } = this.data;
  
    wx.setStorageSync('partyDetails', {
      partyName: partyName,
      population: population,
      dollarCount: dollarCount,
      remarks: remarks
    });
  }
  
})