Page({
  data: {
    tabs: ['content', 'time', 'location', 'detail'],
    activeTabIndex: 0,
    activeTabOffset: 0,
    userInfo: {
      userName: "xyr"
    },
    partyName: "",
    partyContent: "",
    partyLocation: "",
    partyTime: "",
    /* 事件 */
    nameWordCount: 0,
    /* 时间 */
    date: [],
    ampm: [],
    time: [],
    selectedPickerIndices: [0, 0, 0],
    timeRange: [],
    /* 详情 */
    population: 0,
    expenseLevel: 0,
    payMethod: "",

  },
  /* global functions */
  onLoad: function () {
    /* set up time picker */
    // Initialize date and time
    const date = [];
    const ampm = [];
    const time = [];
    // Date (Next 7 days)
    const now = new Date();
    const week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六', '周日'];
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
  /* 通用 */
  updateTabOffset(newActiveTabIndex) {
    let newOffset = 0;
    if (this.data.tabs[newActiveTabIndex] == "time") {
      newOffset = 155;
    } else if (this.data.tabs[newActiveTabIndex] == "location") {
      newOffset = 2 * 155;
    } else if (this.data.tabs[newActiveTabIndex] == "detail") {
      newOffset = 3 * 150;
    }
    this.setData({
      activeTabOffset: newOffset
    });
  },
  tabClick(e) {
    let newActiveTabIndex = e.currentTarget.dataset.index;
    this.updateTabOffset(newActiveTabIndex);
    this.setData({
      activeTabIndex: newActiveTabIndex
    });
  },
  skip(event) {
    if (this.data.partyName == "") {
      this.setData({
        partyName: this.data.userInfo.userName + "的紧急派对",
      });
    }
    this.nextPage(event);
  },
  nextPage(event) {
    let newActiveTabIndex = this.data.activeTabIndex + 1;
    if (newActiveTabIndex >= 4) {
      this.finishInitialize();
    }
    this.updateTabOffset(newActiveTabIndex);
    this.setData({
      activeTabIndex: newActiveTabIndex
    });
  },
  prevPage(event) {
    let newActiveTabIndex = this.data.activeTabIndex - 1;
    this.updateTabOffset(newActiveTabIndex);
    this.setData({
      activeTabIndex: newActiveTabIndex
    });
  },

  /* 事件 */
  getNameInput(event) {
    this.setData({
      partyName: event.detail.value,
      nameWordCount: event.detail.value.length
    })
  },
  onSelection(event) {
    this.setData({
      partyContent: event.currentTarget.id
    });
  },

  /* 时间 */
  onPickerChange(e) {
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
      if (this.data.ampm.length > 1 && ampm_i == 0) {   // AM
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
      if (this.data.ampm.length > 1 && ampm_i == 0) {   // AM
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
      selectedPickerIndices: e.detail.value,
      ampm: newAmpm,
      time: newTime
    });
    const selectedDate = this.data.date[this.data.selectedPickerIndices[0]];
    const selectedAmpm = this.data.ampm[this.data.selectedPickerIndices[1]];
    const selectedTime = this.data.time[this.data.selectedPickerIndices[2]];
    const output = selectedDate.split(" ")[0] + " " + selectedAmpm + " " + selectedTime;
    this.setData({
      partyTime: output
    })
  },
  selectTimeRange(e) {
    let newRange = this.data.timeRange;
    let time = e.currentTarget.id;
    if (newRange.includes(time)) {
      newRange.splice(newRange.indexOf(time), 1);
    } else {
      newRange.push(time);
    }
    console.log(newRange);
    this.setData({
      timeRange: newRange
    });
  },

  /* 地点 */
  onMapInput(e) {
    // TODO: 搜索输入的信息
    /* 以下是测试用，可删除 */
    let searchWord = e.detail.value;
    this.setData({
      partyLocation: searchWord
    })
  },

  /* 详情 */
  setPopulation(event) {
    this.setData({
      population: event.detail.value
    });
  },
  selectPayMethod(event) {
    this.setData({
      payMethod: event.currentTarget.id
    });
  },
  minusExpense() {
    if (this.data.expenseLevel > 0) {
      this.setData({
        expenseLevel: this.data.expenseLevel - 1,
      });
    }
  },
  plusExpense() {
    if (this.data.expenseLevel < 3) {
      this.setData({
        expenseLevel: this.data.expenseLevel + 1,
      });
    }
  },
  finishInitialize() {
    // TODO
    wx.redirectTo({
      url: '/frontend/pages/room/room',
    })
  }

})
