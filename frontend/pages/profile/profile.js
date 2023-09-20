// pages/profile/profile.js
Page({

  /**
   * Page initial data
   */
  data: {
    activeTab: "friends",
    activeEventsTab: "future",
    skin: "#979797",
    photos: 
    [
      "../../images/large-namecard/brady.png",
      "../../images/large-namecard/brady2.jpeg",
      "../../images/large-namecard/brady3.jpeg"
    ],
    commonFriends:
    [
      { uid: 0, name: "Brady" }, 
      { uid: 1, name: "Bradyy" }, 
      { uid: 2, name: "Bradyyy" }
    ],
    filteredCommonFriends: 
    [
      { uid: 0, name: "Brady" }, 
      { uid: 1, name: "Bradyy" }, 
      { uid: 2, name: "Bradyyy" }
    ],
    friends: 
    [
      { uid: 0, name: "Brady" }, 
      { uid: 1, name: "Bradyy" }, 
      { uid: 2, name: "Bradyyy" },
      { uid: 3, name: "Mike" }, 
      { uid: 4, name: "Zhiyi" }, 
      { uid: 5, name: "QiJie" }, 
      { uid: 6, name: "Yurui" }, 
      { uid: 7, name: "Rex Zhan" }, 
      { uid: 8, name: "iii" }
    ],
    filteredFriends: 
    [
      { uid: 0, name: "Brady" }, 
      { uid: 1, name: "Bradyy" }, 
      { uid: 2, name: "Bradyyy" },
      { uid: 3, name: "Mike" }, 
      { uid: 4, name: "Zhiyi" }, 
      { uid: 5, name: "QiJie" }, 
      { uid: 6, name: "Yurui" }, 
      { uid: 7, name: "Rex Zhan" }, 
      { uid: 8, name: "iii" }
    ],
    futureEvents:
    [
      {}, {}, {}, {}
    ],
    historyEvents:
    [
      {}, {}, {}, {}, {}, {}
    ],
    commonEvents:
    [
      {eid: 0}, {eid: 1}, {eid: 2}
    ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    console.log(this.data.commonEvents.length);
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
  
  tabClick(e) {
    this.setData({
      activeTab: e.currentTarget.id
    });
  },
  eventsTabClick(e) {
    this.setData({
      activeEventsTab: e.currentTarget.id
    })
  },

  onSearchInput: function(event) {
    const searchQuery = event.detail.value.toLowerCase();
    const filteredF = this.data.friends.filter(f => {
      return f.name.toLowerCase().includes(searchQuery);
    });
    const filteredCF = this.data.commonFriends.filter(cf => {
      return cf.name.toLowerCase().includes(searchQuery);
    });
    this.setData({
      filteredFriends: filteredF,
      filteredCommonFriends: filteredCF
    });
  }
})