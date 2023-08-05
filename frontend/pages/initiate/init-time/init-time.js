// index.js or index.ts
Page({
  data: {
    date: [],
    ampm: ['上午', '下午'],
    time: [],
    value: [0, 0, 0],
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    // Initialize date and time
    const date = [];
    const time = [];

    // Date (Next 7 days)
    const now = new Date();
    const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    for (let i = 0; i < 7; i++) {
      const futureDate = new Date(now.getTime() + i * 24 * 60 * 60 * 1000);
      date.push(`${futureDate.getFullYear()}年${futureDate.getMonth() + 1}月${futureDate.getDate()}日 ${week[futureDate.getDay()]}`);
    }

    // Time (Every half hour from 1:00 to 12:30)
    for (let i = 1; i < 13; i++) {
      for (let j = 0; j < 2; j++) {
        time.push(`${i}:${j === 0 ? '00' : '30'}`);
      }
    }

    this.setData({
      date,
      time,
    });
  },

  bindChange(e) {
    this.setData({
      value: e.detail.value,
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

  // Event handler for date picker change event
  onDateChange: function (event) {
    const selectedDate = event.detail.value;
    this.setData({
      selectedDate: selectedDate,
    });
  },

  // Event handler for time picker change event
  onTimeChange: function (event) {
    const selectedTime = event.detail.value;
    this.setData({
      selectedTime: selectedTime,
    });
  },

  // Event handler for Submit button click event
  onSubmit: function () {
    const { selectedDate, selectedTime } = this.data;

    if (!selectedDate || !selectedTime) {
      wx.showToast({
        title: "Please select both date and time.",
        icon: "none",
      });
      return;
    }

    // Combine the selected date and time into a single DateTime string
    const selectedDateTime = `${selectedDate} ${selectedTime}`;
    
    // Use the selectedDateTime as needed (e.g., make an API call, perform further processing, etc.)
    // ...
    this.toLocation();
  },

  toElse:function() {
    wx.redirectTo({
      url: '../init-else/init-else',
    })
  }, 
});
