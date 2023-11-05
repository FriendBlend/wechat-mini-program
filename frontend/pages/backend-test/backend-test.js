// frontend/pages/backend-test/backend-test.js
var currentId = 3;

Page({

  /**
   * Page initial data
   */
  data: {
    dataList: [
      { id: 0, name: "sample data" },
      { id: 1, name: "sample data" },
      { id: 2, name: "sample data" }
    ],
    inputValue: "",
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

  /* Other functions */

  inputChange(e) {
    this.setData({ inputValue: e.detail.value });
  },
  addData() {
    const { dataList, inputValue } = this.data;
    if (inputValue) {
      dataList.push({id: currentId++, name: inputValue});
      this.setData({ dataList, inputValue: '' });
    }
  },
  deleteData(e) {
    const index = e.currentTarget.dataset.index;
    const { dataList } = this.data;
    dataList.splice(index, 1);
    this.setData({ dataList });
  },
})