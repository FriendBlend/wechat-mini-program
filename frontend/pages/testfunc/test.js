// frontend/pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '原始文字',
    textList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  /**
   * test函数 
   */
  test_click() {
    const that = this; // 保存当前页面上下文
    wx.cloud.callFunction({
      name: "test", // 必须和云函数名称一样
      data: {},
      success(res) {
        console.log('请求成功', res);

        // 提取msg字段
        const msg = res.result.msg;

        // 修改text的值
        that.setData({
          text: '修改后的文字'
        });

        // 新增一个text组件，使用从云函数返回的msg字段
        let newTextList = that.data.textList.concat([msg]);
        that.setData({
          textList: newTextList
        });
      },
      fail(res) {
        console.log('请求错误', res);
      }
    });
  }
})