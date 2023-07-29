// index.js or index.ts
Page({
  data: {
    selectedDate: "", // Stores the selected date
    selectedTime: "", // Stores the selected time
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

  toLocation:function() {
    wx.redirectTo({
      url: '../init-location/init-location',
    })
  }, 
});
