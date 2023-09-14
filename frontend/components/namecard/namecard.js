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
      value: "../../images/event-avatars/default.png"
    },
    skin: {
      type: String,
      value: "var(--darkGrey)"
    },
    status: {
      type: String,
      value: null
    },
    hasShadow: {
      type: Boolean,
      value: true
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
