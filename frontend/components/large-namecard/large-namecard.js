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
    userPicture: {
      type: String,
      value: "../../images/large-namecard/dog.png"
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

  },

  /**
   * Component methods
   */
  methods: {
    hideNamecard() {
      this.setData({
        showNamecard: false
      });
    }
  }
})
