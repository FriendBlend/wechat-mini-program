Page({
  data: {
    longitude: 113.324520,
    latitude: 23.099994,
    markers: [],
    searchInput: "",
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
          iconPath: "/images/marker.png", // Replace with your custom marker icon
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

    // Implement your location search logic here, using map service API (e.g., Tencent Maps API)

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
          iconPath: "/images/marker.png", // Replace with your custom marker icon
          width: 32,
          height: 32,
        },
      ],
    });
  },

  toElse:function() {
    wx.redirectTo({
      url: '../init-else/init-else',
    })
  }, 
})