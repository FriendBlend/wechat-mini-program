// frontend/components/menu/menu.js
Component({
  /**
   * External classes
   */
  externalClasses: ['position-class'],
  /**
   * Component properties
   */
  properties: {
    showMenu: {
      type: Boolean,
      value: false
    },
    type: {
      type: String,
      value: "none"
    },
    isFriend: {
      type: Boolean,
      value: false
    }
  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {
    hideMenu() {
      this.setData({
        showMenu: false
      });
    },
    toHome() {
      wx.redirectTo({
        url: '/frontend/pages/index/index',
      });
    },
    toProfile() {
      wx.redirectTo({
        url: '/frontend/pages/profile/profile',
      });
    },
    toEvents() {
      wx.redirectTo({
        url: '/frontend/pages/events/events',
      });
    }
  }
})
