// frontend/components/namecard/namecard.js
Component({
  options: {
    addGlobalClass: true
  },
  /**
   * Component properties
   */
  properties: {
    name: {
      type: String,
      value: null
    },
    avatarUrl: {
      type: String,
      value: "../../images/event-avatars/default.png"
    },
    skin: {
      type: String,
      value: "#979797"
    },
    status: {
      type: String,
      value: null
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

  }
})
