// pages/join/join.js
Page({

  /**
   * Page initial data
   */
  data: {
    partyId: ""  // 用于存储用户输入的房间号
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {

  },

  // 当用户在输入框中输入时更新数据
  onInput(event) {
    this.setData({
        partyId: event.detail.value
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

  joinRoom() {
    if (this.data.partyId.length !== 10) {
      wx.showToast({
          title: '请输入有效的10位房间号',
          icon: 'none',
          duration: 2000
      });
      return;
  }

  wx.cloud.callFunction({
      name: 'id_get_party',
      data: {
          party_id: Number(this.data.partyId)  // 将字符串转为数字
      },
      success: res => {
          if (res.result.success) {
              // 将用户重定向到room页面，并将party的信息传递给room页面
              wx.navigateTo({
                  url: `../room/room?partyId=${this.data.partyId}`  // 请替换为您的room页面的路径，并传递partyId作为参数
              });
          } else {
            wx.showToast({
              title: res.result.message + '\n请输入有效的房间号',
              icon: 'none',
              duration: 2000
            });
          }
      },
      fail: err => {
          wx.showToast({
              title: '获取房间信息失败，请重试',
              icon: 'none',
              duration: 2000
          });
      }
  });
}
})