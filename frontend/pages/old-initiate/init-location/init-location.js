Page({
  data: {
    location: "老地方",
    longitude: 113.324520,
    latitude: 23.099994,
    markers: [],
    searchInput: "",
    partyContent: "",
    partyName: ""
  },

  onMapTap: function (event) {
    const { longitude, latitude } = event.detail;
    this.setData({
      longitude: longitude,
      latitude: latitude,
      markers: [
        {
          id: 0,
          longitude: longitude,
          latitude: latitude,
          title: "Selected Location",
          iconPath: "icons/map-marker.png",
          width: 32,
          height: 32,
        },
      ],
    });
  },

  onSearch: function (event) {
    const searchQuery = event.detail.value;
    if (!searchQuery) {
      wx.showToast({
        title: "Please enter a valid location",
        icon: "none",
      });
      return;
    }

    // TODO: Implement your location search logic here, using map service API (e.g., Tencent Maps API)

    // For demo purposes, let's assume we have fetched the longitude and latitude of the searched location
    const longitude = 113.123456;
    const latitude = 22.654321;

    this.setData({
      longitude: longitude,
      latitude: latitude,
      markers: [
        {
          id: 0,
          longitude: longitude,
          latitude: latitude,
          title: "Searched Location",
          iconPath: "icons/map-marker.png",
          width: 32,
          height: 32,
        },
      ],
    });
  },

  onLoad() {
    this.setData({
      partyContent: wx.getStorageSync('partyContent'),
      partyName: wx.getStorageSync('partyName')
    });
    console.log(this.data.partyContent)
  },

  skip(event) {
    // TODO: implement skip logic here
    wx.navigateTo({
      url: '../init-time/init-time'
    });
  },

  // 当用户点击“下一步”时触发的事件
  toTime: function() {
    // 保存用户选择的地址和坐标到本地存储
    wx.setStorageSync('partyLocation', {
      name: this.data.location,
      latitude: this.data.latitude,
      longitude: this.data.longitude,
      markers: this.data.markers
    });
    
    // 跳转到下一个页面
    wx.navigateTo({
      url: '../init-time/init-time'
    });
  }
})