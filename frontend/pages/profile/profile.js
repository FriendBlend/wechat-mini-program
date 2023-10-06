// pages/profile/profile.js
Page({

  /**
   * Page initial data
   */
  data: {
    isCurrentUser: false,
    isFriend: false,
    showMenu: false,
    activeTab: "friends",
    activeEventsTab: "future",
    currentUser: {
      name: '仁喆',
      skin: '#979797',
      avatar: "/frontend/images/large-namecard/brady-avatar.JPG",
      photos: [
        '../../images/large-namecard/brady.png',
        '../../images/large-namecard/brady2.jpeg',
        '../../images/large-namecard/brady3.jpeg'
      ]
    },
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
      {
        partyId: "1234567890",
        partyType: "桌游",
        partyTypeEng: "board-game",
        partySkin: "#10AEFF",
        partyName: "Brady的紧急派对",
        partyYear: "2023",
        partyMonth: "8",
        partyDate: "1",
        partyWeekday: "星期二",
        partyAmPm: "下午",
        partyTime: "3",
        partyLocation: { city: "北京市", district: "海淀区", detail: "领站购物广场 3楼 Room201"}
      }, 
      {
        partyId: "1234567891",
        partyType: "桌游",
        partyTypeEng: "board-game",
        partySkin: "#10AEFF",
        partyName: "xyr的紧急派对",
        partyYear: "2023",
        partyMonth: "8",
        partyDate: "1",
        partyWeekday: "星期二",
        partyAmPm: "下午",
        partyTime: "2",
        partyLocation: { city: "北京市", district: "海淀区", detail: "领站购物广场 3楼 Room201"}
      }, 
      {
        partyId: "1234567892",
        partyType: "桌游",
        partyTypeEng: "board-game",
        partySkin: "#979797",
        partyName: "Mike的紧急派对",
        partyYear: "2023",
        partyMonth: "8",
        partyDate: "5",
        partyWeekday: "星期二",
        partyAmPm: "下午",
        partyTime: "3",
        partyLocation: { city: "北京市", district: "海淀区", detail: "领站购物广场 3楼 Room201"}
      }, 
      {
        partyId: "1234567893",
        partyType: "桌游",
        partyTypeEng: "board-game",
        partySkin: "#10AEFF",
        partyName: "drz的紧急派对",
        partyYear: "2023",
        partyMonth: "8",
        partyDate: "15",
        partyWeekday: "星期二",
        partyAmPm: "下午",
        partyTime: "3",
        partyLocation: { city: "北京市", district: "海淀区", detail: "领站购物广场 3楼 Room201"}
      }
    ],
    historyEvents:
    [
      {
        partyId: "1234567890",
        partyType: "桌游",
        partyTypeEng: "board-game",
        partySkin: "#10AEFF",
        partyName: "Brady的紧急派对",
        partyYear: "2023",
        partyMonth: "5",
        partyDate: "31",
        partyWeekday: "星期二",
        partyAmPm: "下午",
        partyTime: "3",
        partyLocation: { city: "北京市", district: "海淀区", detail: "领站购物广场 3楼 Room201"}
      }, 
      {
        partyId: "1234567891",
        partyType: "桌游",
        partyTypeEng: "board-game",
        partySkin: "#10AEFF",
        partyName: "xyr的紧急派对",
        partyYear: "2023",
        partyMonth: "6",
        partyDate: "1",
        partyWeekday: "星期二",
        partyAmPm: "下午",
        partyTime: "2",
        partyLocation: { city: "北京市", district: "海淀区", detail: "领站购物广场 3楼 Room201"}
      }, 
      {
        partyId: "1234567892",
        partyType: "桌游",
        partyTypeEng: "board-game",
        partySkin: "#979797",
        partyName: "Mike的紧急派对",
        partyYear: "2023",
        partyMonth: "6",
        partyDate: "5",
        partyWeekday: "星期二",
        partyAmPm: "下午",
        partyTime: "3",
        partyLocation: { city: "北京市", district: "海淀区", detail: "领站购物广场 3楼 Room201"}
      }, 
      {
        partyId: "1234567893",
        partyType: "桌游",
        partyTypeEng: "board-game",
        partySkin: "#10AEFF",
        partyName: "drz的紧急派对",
        partyYear: "2023",
        partyMonth: "6",
        partyDate: "11",
        partyWeekday: "星期二",
        partyAmPm: "下午",
        partyTime: "3",
        partyLocation: { city: "北京市", district: "海淀区", detail: "领站购物广场 3楼 Room201"}
      },
      {
        partyId: "1234567894",
        partyType: "桌游",
        partyTypeEng: "board-game",
        partySkin: "#10AEFF",
        partyName: "drz的紧急派对2",
        partyYear: "2023",
        partyMonth: "6",
        partyDate: "11",
        partyWeekday: "星期二",
        partyAmPm: "下午",
        partyTime: "5",
        partyLocation: { city: "北京市", district: "海淀区", detail: "领站购物广场 3楼 Room201"}
      }
    ],
    groupedFutureEvents: [],
    groupedHistoryEvents: [],
    commonEvents:
    [
      {eid: 0}, {eid: 1}, {eid: 2}
    ],
    tags: [ "香港大学'25", "180cm", "猫🐱", "19岁", "QDHS'21" ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    const tab = options.initTab;
    if (tab) {
      var that = this;
      that.setData({
        activeTab: tab
      });
    }
    this.getGroupedEvents();
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

  addFriend(event) {
    console.log("friend added");
    // TODO: 加好友功能
    this.setData({
      isFriend: true
    });
  },
  deleteFriend(event) {
    // TODO: 删好友功能
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
  },

  showMenu() {
    this.setData({
      showMenu: true
    });
  },

  /* 事件列表制作 */
  getGroupedEvents() {
    let futureEvents = this.data.futureEvents;
    let historyEvents = this.data.historyEvents;
    const sortedFutureEvents = futureEvents.sort(this.compareEvents);
    const sortedHistoryEvents = historyEvents.sort(this.compareEvents);
    const groupedSortedFutureEvents = this.groupByDate(sortedFutureEvents);
    const groupedSortedHistoryEvents = this.groupByDate(sortedHistoryEvents);
    this.setData({
      groupedFutureEvents: groupedSortedFutureEvents,
      groupedHistoryEvents: groupedSortedHistoryEvents
    });
  },
  compareEvents(event1, event2) {
    if (event1.partyYear != event2.partyYear) {
      return parseInt(event1.partyYear) - parseInt(event2.partyYear);
    } else if (event1.partyMonth != event2.partyMonth) {
      return parseInt(event1.partyMonth) - parseInt(event2.partyMonth);
    } else if (event1.partyAmPm != event2.partyAmPm) {
      return event1.partyAmPm == "上午" ? -1 : 1;
    } else {
      return parseInt(event1.partyTime) - parseInt(event2.partyTime);
    }
  },
  groupByDate(events) {
    const groupedEvents = {};
    events.forEach(event => {
      const dateKey = `${event.partyYear}-${event.partyMonth}-${event.partyDate}`;
      if (!groupedEvents[dateKey]) {
        groupedEvents[dateKey] = [];
      }
      groupedEvents[dateKey].push(event);
    });
    return Object.values(groupedEvents);
  }
  
})