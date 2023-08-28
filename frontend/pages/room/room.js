// pages/room/room.wxml.js
Page({

  /**
   * Page initial data
   */
  data: {
    showNamecard: false,
    currentUser: null,
    currentSeatIndex: -1,
    showDropdown: false,
    selfStatus: 'owner',
    roomName: null,
    roomLocation: null,
    roomTime: null,
    roomAvatar: null,
    seats: [
      { occupied: true, user_id: 1, dropdown: false },
      { occupied: false },
      { occupied: true, user_id: 2, dropdown: false },
      { occupied: true, user_id: 3, dropdown: false },
      { occupied: true, user_id: 4, dropdown: false },
      { occupied: true, user_id: 5, dropdown: false },
      { occupied: true, user_id: 6, dropdown: false },
      { occupied: false },
      { occupied: true, user_id: 7, dropdown: false },
      { occupied: true, user_id: 8, dropdown: false },
      { occupied: true, user_id: 9, dropdown: false },
      { occupied: true, user_id: 10, dropdown: false },
      { occupied: true, user_id: 11, dropdown: false }
    ],
    users: [
      {
        id: 1,
        name: "Brady",
        status: "ready",
        avatar: "icons/empty-avatar.png",
        skin: "#10AEFF",
        userImage1: '../../images/large-namecard/brady.png',
        userImage2: '../../images/large-namecard/brady.png',
        userImage3: '../../images/large-namecard/brady.png'
      },
      {
        id: 2,
        name: "xyr",
        status: "joined",
        avatar: "icons/empty-avatar.png",
        skin: "#FF7966",
        userImage1: '../../images/large-namecard/brady.png',
        userImage2: '../../images/large-namecard/brady.png',
        userImage3: '../../images/large-namecard/brady.png'
      },
      {
        id: 3,
        name: "Jessie",
        status: "ready",
        avatar: "icons/empty-avatar.png",
        skin: "#10AEFF",
        userImage1: '../../images/large-namecard/brady.png',
        userImage2: '../../images/large-namecard/brady.png',
        userImage3: '../../images/large-namecard/brady.png'
      },
      {
        id: 4,
        name: "Renzhe",
        status: "host",
        avatar: "icons/empty-avatar.png",
        skin: "pink",
        userImage1: '../../images/large-namecard/brady.png',
        userImage2: '../../images/large-namecard/brady.png',
        userImage3: '../../images/large-namecard/brady.png'
      },
      {
        id: 5,
        name: "Jimmy",
        status: "ready",
        avatar: "icons/empty-avatar.png",
        skin: "#C7F5D8",
        userImage1: '../../images/large-namecard/brady.png',
        userImage2: '../../images/large-namecard/brady.png',
        userImage3: '../../images/large-namecard/brady.png'
      },
      {
        id: 6,
        name: "Tomy",
        status: "joined",
        avatar: "icons/empty-avatar.png",
        skin: "#FF7966",
        userImage1: '../../images/large-namecard/brady.png',
        userImage2: '../../images/large-namecard/brady.png',
        userImage3: '../../images/large-namecard/brady.png'
      },
      {
        id: 7,
        name: "Mike",
        status: "ready",
        avatar: "icons/empty-avatar.png",
        skin: "#37CD82",
        userImage1: '../../images/large-namecard/brady.png',
        userImage2: '../../images/large-namecard/brady.png',
        userImage3: '../../images/large-namecard/brady.png'
      },
      {
        id: 8,
        name: "忍者",
        status: "joined",
        avatar: "icons/empty-avatar.png",
        skin: "#FF7966",
        userImage1: '../../images/large-namecard/brady.png',
        userImage2: '../../images/large-namecard/brady.png',
        userImage3: '../../images/large-namecard/brady.png'
      },
      {
        id: 9,
        name: "Brady",
        status: "ready",
        avatar: "icons/empty-avatar.png",
        skin: "#37CD82",
        userImage1: '../../images/large-namecard/brady.png',
        userImage2: '../../images/large-namecard/brady.png',
        userImage3: '../../images/large-namecard/brady.png'
      },
      {
        id: 10,
        name: "xyr",
        status: "joined",
        avatar: "icons/empty-avatar.png",
        skin: "#10AEFF",
        userImage1: '../../images/large-namecard/brady.png',
        userImage2: '../../images/large-namecard/brady.png',
        userImage3: '../../images/large-namecard/brady.png'
      },
      {
        id: 11,
        name: "老玉米",
        status: "ready",
        avatar: "icons/empty-avatar.png",
        skin: "#C7F5D8",
        userImage1: '../../images/large-namecard/brady.png',
        userImage2: '../../images/large-namecard/brady.png',
        userImage3: '../../images/large-namecard/brady.png'
      },
      {
        id: 12,
        name: "Mike",
        status: "joined",
        avatar: "icons/empty-avatar.png",
        skin: "#AEF359",
        userImage1: '../../images/large-namecard/brady.png',
        userImage2: '../../images/large-namecard/brady.png',
        userImage3: '../../images/large-namecard/brady.png'
      },
    ],
    lastClickTime: 0
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    this.setData({
      roomName: options.dataName,
      roomLocation: options.dataLocation,
      roomTime: options.dataTime,
      roomAvatar: options.dataEvent
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

  toIndex:function() {
    wx.navigateTo({
      url: '../index/index',
    })
  }, 

  getReady() {
    // TODO: Implement ready button logic
    console.log("I am ready!");
  },

  getCancel() {
    // TODO: Implement cancel button logic
    console.log("I quit!");
  },

  onSeatTap(event) {
    const currentTime = event.timeStamp;
    var lastClickTime = this.data.lastClickTime
    const clickThreshold = 300;

    if (lastClickTime > 0 
      && currentTime - lastClickTime < clickThreshold) {  // double click
      clearTimeout(this.timeoutFunction);
      this.doubleClickSeat(event);
    } else {  // single click
      this.timeoutFunction = setTimeout(() => {
        this.singleClickSeat(event);
      }, clickThreshold);
    }
    this.setData({lastClickTime: currentTime});
  },

  doubleClickSeat(event) {
    // TODO: double click logic
    console.log("Double click detected!");
    const seatIndex = event.currentTarget.dataset.seatIndex;
    const seats = this.data.seats;

    wx.request({
      url: 'http://localhost/operate/joinParty',
      method: 'POST',
      data: {
        party_id: 1,
        user_id: 1
      }, // 请求参数
      success: function (res) {
        console.log(res.data);
        // 处理请求成功后的逻辑
        let newSeats = that.data.seats;
        newSeats[seatIndex].occupied = true;
        that.setData({
          seats: newSeats
        });
      },
      fail: function (res) {
        console.log('fail', res);
        // 处理请求失败后的逻辑
      }
    });
    if (!seats[seatIndex].occupied) {
      seats[seatIndex].occupied = true;
      seats[seatIndex].user_id = 12;
      this.setData({
        seats: seats,
      });
    } else if (seats[seatIndex].user_id == 12) {
      seats[seatIndex].occupied = false;
      this.setData({
        seats: seats,
      });
    }
  },

  singleClickSeat(event) {
    console.log("Single click detected!");
    console.log(event.currentTarget.dataset)
    if (event.currentTarget.dataset.occupied) {
      this.showDropdown(event);
    }
  },

  joinCorridor(event) {
    console.log("I joined the corridor")
  },

  showNamecard(event) {
    this.hideDropdown();
    this.setData({
      showNamecard: true
    });
  },

  hideNamecard() {
    this.setData({
      showNamecard: false
    });
  },

  showDropdown(event) {
    var index = event.currentTarget.dataset.seatIndex;
    let newSeats = this.data.seats;
    newSeats[index].dropdown = true;
    this.setData({
      currentUser: event.currentTarget.dataset.user,
      currentSeatIndex: event.currentTarget.dataset.seatIndex,
      seats: newSeats,
      showDropdown: true
    });
  },
  hideDropdown() {
    let newSeats = this.data.seats;
    for (let i = 0; i < newSeats.length; i++) {
      newSeats[i].dropdown = false;
    }
    this.setData({
      seats: newSeats,
      showDropdown: false
    });
  },

  deleteUser() {
    this.hideDropdown();
    let newSeats = this.data.seats;
    newSeats[this.data.currentSeatIndex].occupied = false;
    this.setData({
      seats: newSeats,
    });
    wx.showToast({
      title: '你做得对',
    })
  }
})