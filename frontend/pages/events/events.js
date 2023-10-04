// frontend/pages/events/events.js
Page({

  /**
   * Page initial data
   */
  data: {
    activeTab: "followed",
    activeSmallTab: "init",
    futureEventsJoined:
    [
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
    historyEventsJoined:
    [
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
    futureEventsInitiated: [
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
    ],
    historyEventsInitiated: [
      {
        partyId: "2234567890",
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
        partyId: "2234567891",
        partyType: "桌游",
        partyTypeEng: "board-game",
        partySkin: "#10AEFF",
        partyName: "Brady的紧急派对2",
        partyYear: "2023",
        partyMonth: "5",
        partyDate: "31",
        partyWeekday: "星期二",
        partyAmPm: "下午",
        partyTime: "4",
        partyLocation: { city: "北京市", district: "海淀区", detail: "领站购物广场 3楼 Room201"}
      }, 
    ],
    groupedFutureJoinedEvents: [],
    groupedHistoryJoinedEvents: [],
    groupedFutureInitEvents: [],
    groupedHistoryInitEvents: [],
    followedEvents: [
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
    ],
    filteredFollow: [],
    filteredFutureJ: [],
    filteredFutureI: [],
    filteredHistoryJ: [],
    filteredHistoryI: []
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    this.getGroupedEvents();
    this.initFilteredLists();
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

  /* tabs */
  tabClick(e) {
    this.setData({
      activeTab: e.currentTarget.id
    });
  },
  smallTabClick(e) {
    this.setData({
      activeSmallTab: e.currentTarget.id
    })
  },

  /* 事件列表制作 */
  getGroupedEvents() {
    let futureEventsJ = this.data.futureEventsJoined;
    let historyEventsJ = this.data.historyEventsJoined;
    let futureEventsI = this.data.futureEventsInitiated;
    let historyEventsI = this.data.historyEventsInitiated;
    let listArray = [futureEventsJ, historyEventsJ, futureEventsI, historyEventsI];
    let resultsArray = [[], [], [], []];
    for (var i = 0; i < listArray.length; i++) {
      resultsArray[i] = this.groupByDate(listArray[i].sort(this.compareEvents));
    }
    this.setData({
      groupedFutureJoinedEvents: resultsArray[0],
      groupedHistoryJoinedEvents: resultsArray[1],
      groupedFutureInitEvents: resultsArray[2],
      groupedHistoryInitEvents: resultsArray[3],
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
  },

  /* 其他 */
  initFilteredLists() {
    this.setData({
      filteredFollow: this.data.followedEvents,
      filteredFutureJ: this.data.groupedFutureJoinedEvents,
      filteredFutureI: this.data.groupedFutureInitEvents,
      filteredHistoryJ: this.data.groupedHistoryJoinedEvents,
      filteredHistoryI: this.data.groupedHistoryInitEvents
    });
  },
  onSearchInput: function(event) {
    const searchQuery = event.detail.value.toLowerCase();
    let futureEventsJ = this.data.groupedFutureJoinedEvents;
    let historyEventsJ = this.data.groupedHistoryJoinedEvents;
    let futureEventsI = this.data.groupedFutureInitEvents;
    let historyEventsI = this.data.groupedHistoryInitEvents;
    let followedEvents = this.data.followedEvents;
    let listArray = [futureEventsJ, historyEventsJ, futureEventsI, historyEventsI];
    let resultsArray = [[], [], [], []]
    for (var i = 0; i < listArray.length; i++) {
      for (var j = 0; j < listArray[i].length; j++) {
        resultsArray[i].push(listArray[i][j].filter(f => {
          return f.partyName.toLowerCase().includes(searchQuery);
        }));
      }
    }
    followedEvents = followedEvents.filter(f => {
      return f.partyName.toLowerCase().includes(searchQuery);
    });
    this.setData({
      filteredFollow: followedEvents,
      filteredFutureJ: listArray[0],
      filteredHistoryJ: listArray[1],
      filteredFutureI: listArray[2],
      filteredHistoryI: listArray[3]
    });
  },
})