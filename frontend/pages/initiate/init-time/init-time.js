// index.js or index.ts
Page({
  data: {
    date: [],
    ampm: [],
    time: [],
    value: [0, 0, 0],
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    // Initialize date and time
    const date = [];
    const ampm = [];
    const time = [];

    // Date (Next 7 days)
    const now = new Date();
    const week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    date.push(`今天 ${week[now.getDay()]}`);
    date.push(`明天 ${week[now.getDay()+1]}`);
    for (let i = 2; i < 7; i++) {
      const futureDate = new Date(now.getTime() + i * 24 * 60 * 60 * 1000);
      date.push(`${futureDate.getMonth() + 1}月${futureDate.getDate()}日 ${week[futureDate.getDay()]}`);
    }
    
    // AM/PM
    const hour = now.getHours();
    if (hour <= 12) {
      ampm.push('上午');
    }
    ampm.push('下午');

    // Time (Every half hour from now to 12:00pm)
    if (hour > 12) {
      for (let i = hour - 12; i < 12; i++) {
        time.push(`${i}:00`);
        time.push(`${i}:30`);
      }
    } else {
      for (let i = hour; i < 13; i++) {
        time.push(`${i}:00`);
        time.push(`${i}:30`);
      }
    }
    
    this.setData({
      date,
      ampm,
      time,
    });
  },

  bindChange(e) {
    let date_i = e.detail.value[0];
    let ampm_i = e.detail.value[1];
    let now = new Date();
    let newAmpm = [];
    let newTime = [];
    // ampm
    if (date_i != 0 || now.getHours() <= 12) {
      newAmpm.push('上午');
    }
    newAmpm.push('下午');
    // time
    if (date_i != 0) {        // Other days
      if (ampm_i == 0) {      // AM
        for (let i = 0; i < 13; i++) {
          newTime.push(`${i}:00`);
          newTime.push(`${i}:30`);
        }
      } else {                // PM
        for (let i = 1; i < 12; i++) {
          newTime.push(`${i}:00`);
          newTime.push(`${i}:30`);
        }
      }
    } else {                  // Today
      if (ampm_i == 0) {      // AM
        for (let i = now.getHours(); i < 13; i++) {
            newTime.push(`${i}:00`);
            newTime.push(`${i}:30`);
        }
      } else {                // PM
        let j = 1;
        if (now.getHours() > 12) {
            j = now.getHours() - 12;
        }
        for (let i = j; i < 12; i++) {
            newTime.push(`${i}:00`);
            newTime.push(`${i}:30`);
        }
      }
    }
    
    this.setData({
      value: e.detail.value,
      ampm: newAmpm,
      time: newTime
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

  toElse:function() {
    wx.redirectTo({
      url: '../init-else/init-else',
    })
  }, 
});
