// frontend/components/namecard/namecard.js
Component({
  options: {
    addGlobalClass: true
  },
  externalClasses: [
    "external-class"
  ],
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
      value: "../../images/large-namecard/brady-avatar.JPG"
    },
    skin: {
      type: String,
      value: "#979797"
    },
    status: {
      type: String,
      value: null
    },
    hasShadow: {
      type: Boolean,
      value: true
    },
    width: {
      type: String,
      value: "161.8px"
    },
    height: {
      type: String,
      value: "100px"
    },
    fontSize: {
      type: String,
      value: "13px"
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
