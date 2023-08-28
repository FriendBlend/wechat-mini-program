// pages/initiate/init-else/init-else.js
Page({

  /**
   * Page initial data
   */
  data: {
    dollarCount: 0,
    population: 0,
    selectedEvent: null,
    selectedLocation: null,
    selectedTime: null,
    selectedName: null,
    username: "xyr"
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    this.setData({
      selectedEvent: options.dataEvent,
      selectedLocation: options.dataLocation,
      selectedTime: options.dataTime
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

  getNameInput(event) {
    this.setData({
      selectedName: event.detail.value
    })
  },

  toRoom:function() {
    if (this.data.selectedName == null) {
      this.setData({
        selectedName: this.data.username + "的紧急派对"
      });
    }
    wx.redirectTo({
      url: '../../room/room?dataEvent=' + this.data.selectedEvent + '&dataLocation=' + this.data.selectedLocation + '&dataTime=' + this.data.selectedTime + '&dataName=' + this.data.selectedName
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
    const {
      partyName, population, dollarCount, remarks
    } = this.data;
  
    wx.setStorageSync('partyDetails', {
      partyName: partyName,
      population: population,
      dollarCount: dollarCount,
      remarks: remarks
    });
    console.log("完成！")
  }
})