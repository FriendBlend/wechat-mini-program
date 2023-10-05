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
    userInfo: {
      userId: 12,
    },
    userStatus: "joined",
    activeTab: "people",
    readyNum: 0,
    joinedNum: 0,
    completedInfoNum: 0,
    countDown: {
      days: 0,
      hours: 0,
      minutes: 0
    },
    partyInfo: {
      partyId: "1234567890",
      partyType: "桌游",
      partyTypeEng: "board-game",
      partyName: "Brady的紧急派对",
      partyYear: "2023",
      partyMonth: "8",
      partyDate: "1",
      partyWeekday: "星期二",
      partyAmPm: "下午",
      partyTime: "3",
      partyTimeRange: ["day", "evening"],
      partyLocation: {
        city: "北京市",
        district: "海淀区",
        detail: "领站购物广场 3楼 Room201"
      },
      partyCost: {
        expenseLevel: 1,
        payMethod: "AA"
      },
      partyDescript: "狼人杀局，可转阿瓦隆，不卡颜。欢迎带朋友。无dress code。3狼3民3神。地铁5号口出来。"
    },
    seats: [
      { occupied: true, user_id: 1 },
      { occupied: false },
      { occupied: true, user_id: 2 },
      { occupied: true, user_id: 3 },
      { occupied: true, user_id: 4 },
      { occupied: true, user_id: 5 },
      { occupied: true, user_id: 6 },
      { occupied: false },
      { occupied: true, user_id: 7 },
      { occupied: true, user_id: 8 },
      { occupied: true, user_id: 9 },
      { occupied: true, user_id: 10 },
      { occupied: true, user_id: 11 }
    ],
    dollarSignArray: [ "white", "white", "white"],
    users: [
      {
        id: 1,
        name: "Brady",
        status: "ready",
        avatar: "../../images/large-namecard/brady2.jpeg",
        skin: "#10AEFF",
        userImage1: '../../images/large-namecard/brady.png',
        userImage2: '../../images/large-namecard/brady.png',
        userImage3: '../../images/large-namecard/brady.png'
      },
      {
        id: 2,
        name: "xyr",
        status: "joined",
        avatar: "../../images/namecard/empty-avatar.png",
        skin: "#FF7966",
        userImage1: '../../images/large-namecard/brady.png',
        userImage2: '../../images/large-namecard/brady.png',
        userImage3: '../../images/large-namecard/brady.png'
      },
      {
        id: 3,
        name: "Jessie",
        status: "ready",
        avatar: "../../images/namecard/empty-avatar.png",
        skin: "#10AEFF",
        userImage1: '../../images/large-namecard/brady.png',
        userImage2: '../../images/large-namecard/brady.png',
        userImage3: '../../images/large-namecard/brady.png'
      },
      {
        id: 4,
        name: "Renzhe",
        status: "host",
        avatar: "../../images/namecard/empty-avatar.png",
        skin: "pink",
        userImage1: '../../images/large-namecard/brady.png',
        userImage2: '../../images/large-namecard/brady.png',
        userImage3: '../../images/large-namecard/brady.png'
      },
      {
        id: 5,
        name: "Jimmy",
        status: "ready",
        avatar: "../../images/namecard/empty-avatar.png",
        skin: "#C7F5D8",
        userImage1: '../../images/large-namecard/brady.png',
        userImage2: '../../images/large-namecard/brady.png',
        userImage3: '../../images/large-namecard/brady.png'
      },
      {
        id: 6,
        name: "Tomy",
        status: "joined",
        avatar: "../../images/namecard/empty-avatar.png",
        skin: "#FF7966",
        userImage1: '../../images/large-namecard/brady.png',
        userImage2: '../../images/large-namecard/brady.png',
        userImage3: '../../images/large-namecard/brady.png'
      },
      {
        id: 7,
        name: "Mike",
        status: "ready",
        avatar: "../../images/namecard/empty-avatar.png",
        skin: "#37CD82",
        userImage1: '../../images/large-namecard/brady.png',
        userImage2: '../../images/large-namecard/brady.png',
        userImage3: '../../images/large-namecard/brady.png'
      },
      {
        id: 8,
        name: "忍者",
        status: "joined",
        avatar: "../../images/namecard/empty-avatar.png",
        skin: "#FF7966",
        userImage1: '../../images/large-namecard/brady.png',
        userImage2: '../../images/large-namecard/brady.png',
        userImage3: '../../images/large-namecard/brady.png'
      },
      {
        id: 9,
        name: "Brady",
        status: "ready",
        avatar: "../../images/namecard/empty-avatar.png",
        skin: "#37CD82",
        userImage1: '../../images/large-namecard/brady.png',
        userImage2: '../../images/large-namecard/brady.png',
        userImage3: '../../images/large-namecard/brady.png'
      },
      {
        id: 10,
        name: "xyr",
        status: "joined",
        avatar: "../../images/namecard/empty-avatar.png",
        skin: "#10AEFF",
        userImage1: '../../images/large-namecard/brady.png',
        userImage2: '../../images/large-namecard/brady.png',
        userImage3: '../../images/large-namecard/brady.png'
      },
      {
        id: 11,
        name: "老玉米",
        status: "ready",
        avatar: "../../images/namecard/empty-avatar.png",
        skin: "#C7F5D8",
        userImage1: '../../images/large-namecard/brady.png',
        userImage2: '../../images/large-namecard/brady.png',
        userImage3: '../../images/large-namecard/brady.png'
      },
      {
        id: 12,
        name: "Mike",
        status: "none",
        avatar: "../../images/namecard/empty-avatar.png",
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
  onLoad: function (options) {
    /* 初始化 */
    this.initUserStatus();
    this.initDollarSignArray();

    // 检查是否从URL获取了partyId
    if (options.partyId) {
      wx.showToast({
        title: '已根据ID打开派对！',
        icon: 'none',
        duration: 2000
      });
      this.setData({
        ['partyInfo.partyId']: options.partyId,
      });
      
      // 根据partyId从数据库获取相关的party信息
      this.getPartyInfo(options.partyId);
      
    } else {
        // 如果没有提供partyId，则为创建party

        // 从存储中获取之前页面保存的数据
      const partyDetails = wx.getStorageSync('partyDetails');
      
      // 若数据不存在，则提前退出
      if (!partyDetails) {
          console.error('未找到派对详情！');
          return;
      }

      // 解构数据
      const {
          partyName,
          population,
          dollarCount,
          remarks,
          partyLocation,
          partyTime,
          partyType
      } = partyDetails;

      // 更新页面数据
      this.setData({
        partyType: partyType,
        partyName: partyName,
        partyTime: partyTime,
        partyLocation: partyLocation
      })

      // 调用云函数
      wx.cloud.callFunction({
          name: 'add_party',
          data: {
              party_name: partyName,
              member_num: population,
              seat_list: Array(population).fill("no"),  // 暂时使用"no"填充座位列表
              time: partyTime,
              location: partyLocation,
              cost: dollarCount,
              description: remarks,
              type: partyType
          },
          success: res => {
              if (res.result.success) {
                  console.log('成功录入组局信息');
                  
                  // 更新room.wxml中对应的位置显示party_id
                  this.setData({
                      party_id: res.result.party_id
                  });
      
                  // 删除本地存储的派对详情
                  wx.removeStorageSync('partyDetails');
              } else {
                  console.error(res.result.message);
      
                  // 显示错误提示
                  wx.showToast({
                      title: res.result.message,
                      icon: 'none',
                      duration: 2000,
                      complete: () => {
                          // 跳转至"time"页
                          wx.navigateTo({
                              url: '../initiate/init-content/init-content'  // 替换为您的"time"页的路径
                          });
                      }
                  });
              }
          },
          fail: err => {
              console.error('调用云函数失败', err);
      
              // 显示错误提示
              wx.showToast({
                  title: '调用云函数失败，请重试',
                  icon: 'none',
                  duration: 2000,
                  complete: () => {
                      // 跳转至"time"页
                      wx.navigateTo({
                          url: '../initiate/init-content/init-content'  // 替换为您的"time"页的路径
                      });
                  }
              });
          }
      });
    }
  },

  initDollarSignArray() {
    let newDollarSignArray = this.data.dollarSignArray;
    for (let i = 0; i < newDollarSignArray.length; i++) {
      if (i < this.data.partyInfo.partyCost.expenseLevel) {
        newDollarSignArray[i] = "grey";
      } else {
        newDollarSignArray[i] = "white";
      }
    }
    this.setData({
      dollarSignArray: newDollarSignArray
    });
  },

  initUserStatus() {
    var status = "none"
    this.data.users.some(user => {
      if (user.id == this.data.userInfo.userId) {
        status = user.status;
        return true;
      }
      return false;
    });
    this.setData({
      userStatus: status
    });
  },

  getPartyInfo(partyId) {
    wx.cloud.callFunction({
        name: 'id_get_party',
        data: {
            party_id: Number(partyId)
        },
        success: res => {
            if (res.result.success) {
              const partyInfo = res.result.data;
              var updatedPartyInfo = this.data.partyInfo;
              updatedPartyInfo.partyType = partyInfo.type;
              updatedPartyInfo.partyName = partyInfo.party_name;
              updatedPartyInfo.partyLocation = partyInfo.location;
              updatedPartyInfo.partyTime = partyInfo.time;
              if (partyInfo != null) {
                this.setData({
                  partyInfo: updatedPartyInfo
                });
              }
            } else {
                wx.showToast({
                    title: res.result.message,
                    icon: 'none',
                    duration: 2000
                });
                return null;
            }
        },
        fail: err => {
            wx.showToast({
                title: '获取房间信息失败，请重试',
                icon: 'none',
                duration: 2000
            });
            return null;
        }
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
    this.updatePeopleProgress();
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
    this.setData({
      userStatus: "ready",
      readyNum: this.data.readyNum + 1,
      joinedNum: this.data.joinedNum - 1
    });
  },

  getCancel() {
    this.setData({
      userStatus: "joined",
      readyNum: this.data.readyNum - 1,
      joinedNum: this.data.joinedNum + 1
    });
  },

  updatePeopleProgress() {
    let numJoined = 0;
    let numReady = 0;
    for (let user of this.data.users) {
      if (["ready","host"].indexOf(user.status) > -1) {
        numReady += 1;
      } else if (user.status === "joined") {
        numJoined += 1;
      }
    }
    this.setData({
      readyNum: numReady,
      joinedNum: numJoined
    });
  },

  tabClick(e) {
    this.setData({
      activeTab: e.currentTarget.id
    })
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
    this.toggleSeat(seatIndex);
  },

  toggleSeat(seatIndex) {
    var seats = this.data.seats;
    var users = this.data.users;
    var userInfo = this.data.userInfo;

    if (!seats[seatIndex].occupied) {
      /* 入座 */
      seats[seatIndex].occupied = true;
      seats[seatIndex].user_id = userInfo.userId;
      users.some(user => {
        if (user.id == userInfo.userId) {
          user.status = "joined";
          return true;
        }
        return false;
      });
      seats[seatIndex].userStatus = "joined";
      this.setData({
        userStatus: "joined",
        users: users,
        seats: seats,
      });
    } else if (seats[seatIndex].user_id == userInfo.userId) {
      /* 离座 */
      if (this.data.userStatus == "ready") {
        wx.showToast({
          title: '准备状态中不能离座',
          icon: 'none'
        });
        return;
      }
      seats[seatIndex].occupied = false;
      users.some(user => {
        if (user.id == userInfo.userId) {
          user.status = "none";
          return true;
        }
        return false;
      });
      this.setData({
        userStatus: "none",
        users: users,
        seats: seats,
      });
    }
    this.updatePeopleProgress();
  },

  singleClickSeat(event) {
    console.log("Single click detected!");
    console.log(event.currentTarget.dataset)
    if (event.currentTarget.dataset.occupied) {
      this.showNamecard(event);
    }
  },

  showNamecard(event) {
    this.setData({
      showNamecard: true,
      currentUser: event.currentTarget.dataset.user
    });
  },

  hideNamecard() {
    this.setData({
      showNamecard: false
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
  },

  copyPartyId() {
    const { party_id } = this.data;
    wx.setClipboardData({
        data: String(party_id),
        success() {
            wx.showToast({
                title: 'ID已复制',
                icon: 'success',
                duration: 2000
            });
        }
    });
}
})