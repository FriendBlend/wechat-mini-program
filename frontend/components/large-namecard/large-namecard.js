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
      value: ["../../images/large-namecard/dog.png"]
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
    activeTab: "person"
  },

  /**
   * Component methods
   */
  methods: {
    hideNamecard() {
      this.setData({
        showNamecard: false
      });
    },
    tabClick(e) {
      this.setData({
        activeTab: e.currentTarget.id
      })
    }
  }
})
