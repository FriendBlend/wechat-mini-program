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
    userSkin: {
      type: String,
      value: "#D9D9D9"
    }
  },

  /**
   * Component initial data
   */
  data: {
    indicatorDots: true
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
    onLoad() {
      if (this.data.imgUrls.length === 1) {
        this.setData({
          indicatorDots: false
        });
      }
    }
  }
})
