export default {
  data () {
    return {
      type: 'password',
      class: 'input-text-inactive',
      iconUsername: 'person-inactive',
      iconEmail: 'mail-inactive',
      iconPassword: 'lock-inactive',
      iconEye: 'eye-cross-inactive'
    }
  },
  methods: {
    focusInput () {
      this.class = 'input-text-active'
      this.iconUsername = 'person-active'
      this.iconEmail = 'mail-active'
      this.iconPassword = 'lock-active'
      this.type === 'password' ? this.iconEye = 'eye-cross-active' : this.iconEye = 'eye-active'
    },
    changeToEye () {
      this.class === 'input-text-inactive' ? this.iconEye = 'eye-inactive'
        : (this.class === 'input-text-active' ? this.iconEye = 'eye-active'
          : this.iconEye = 'eye-error')
    },
    changeToEyeCross () {
      this.class === 'input-text-inactive' ? this.iconEye = 'eye-cross-inactive'
        : (this.class === 'input-text-active' ? this.iconEye = 'eye-cross-active'
          : this.iconEye = 'eye-cross-error')
    },
    changeType () {
      if (this.type === 'password') {
        this.type = 'text'
        this.changeToEye()
      } else {
        this.type = 'password'
        this.changeToEyeCross()
      }
    }
  }
}
