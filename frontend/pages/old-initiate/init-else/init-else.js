// pages/initiate/init-else/init-else.js
Page({

  /**
   * Page initial data
   */
  data: {
    dollarCount: 0,
    partyName: "",  // 派对名称
    remarks: "",  // 备注
    population: 0,
    partyTime: "",
    partyLocation: "",
    partyContent: ""
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    // 从存储中检索地点和时间
    const locationData = wx.getStorageSync('partyLocation');
    const timeData = wx.getStorageSync('partyTime');
    
    this.setData({
      partyContent: wx.getStorageSync('partyContent'),
      partyLocation: locationData.name,
      partyName: wx.getStorageSync('partyName'),
      partyTime: timeData.full
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

  skip(event) {
    // TODO: implement skip logic here
    wx.redirectTo({
      url: '../../room/room'
    });
  },

  toRoom: function(e) {
    this.complete(e);
    wx.redirectTo({
      url: '../../room/room'
    });
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
      partyName, population, dollarCount, remarks, partyTime, partyLocation, partyContent
    } = this.data;

    wx.clearStorageSync();
  
    wx.setStorageSync('partyDetails', {
      partyName: partyName,
      population: population,
      dollarCount: dollarCount,
      remarks: remarks,
      partyLocation: partyLocation,
      partyTime: partyTime,
      partyType: partyContent
    });
    console.log("完成！")
  }
  
})