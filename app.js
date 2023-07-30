// app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('云服务错误')
    } else {
      wx.cloud.init({
        env: 'qucikpartyproject-2e7ne84e8accb7',
        traceUser: true,
      })
    }
    this.globalData = {}
  }
})
