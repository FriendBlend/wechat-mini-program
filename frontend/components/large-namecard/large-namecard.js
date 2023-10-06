// frontend/components/large-namecard/large-namecard.js
Component({
  /**
   * Component properties
   */
  properties: {
    showNamecard: {
      type: Boolean,
      value: false
    },
    userName: {
      type: String,
      value: ""
    },
    userPictures: {
      type: Array,
      value: ["/frontend/images/large-namecard/brady.png",
              "/frontend/images/large-namecard/brady2.jpeg",
              "/frontend/images/large-namecard/brady3.jpeg"]
    },
    petName: {
      type: String,
      value: "宠物"
    },
    petPictures: {
      type: Array,
      value: ["../../images/large-namecard/dog.png"]
    },
    userSkin: {
      type: String,
      value: "var(--lightGrey)"
    },
    avatarUrl: {
      type: String,
      value: "../../images/event-avatars/default.png"
    }
  },

  /**
   * Component initial data
   */
  data: {
    indicatorDots: true,
    isCurrentUser: false,
    isFriend: false
  },

  /**
   * Component methods
   */
  methods: {
    addFriend(event) {
      // TODO: 加好友功能
      this.setData({
        isFriend: true
      });
    },
    deleteFriend() {
      // TODO: 删好友功能
    },

    hideNamecard() {
      this.setData({
        showNamecard: false
      });
    },

    toProfile() {
      wx.navigateTo({
        url: '/frontend/pages/profile/profile',
      })
    }
  }
})
