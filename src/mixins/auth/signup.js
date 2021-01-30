import Swal from 'sweetalert2'
// import axios from 'axios'

const signup = {
  data () {
    return {
      message: ''
      // username: '',
      // email: '',
      // password: '',
      // type: 'password',
      // class: 'input-text-inactive',
      // iconUsername: 'person-inactive',
      // iconEmail: 'mail-inactive',
      // iconPassword: 'lock-inactive',
      // iconEye: 'eye-cross-inactive'
    }
  },
  methods: {
    // focusInput () {
    //   this.class = 'input-text-active'
    //   this.iconUsername = 'person-active'
    //   this.iconEmail = 'mail-active'
    //   this.iconPassword = 'lock-active'
    //   if (this.type === 'password') {
    //     this.iconEye = 'eye-cross-active'
    //   } else if (this.type === 'text') {
    //     this.iconEye = 'eye-active'
    //   }
    // },
    // inputUsername (e) {
    //   this.username = e
    // },
    // inputEmail (e) {
    //   this.email = e
    // },
    // inputPassword (e) {
    //   this.password = e
    // },
    // changeType () {
    //   if (this.type === 'password') {
    //     this.type = 'text'
    //     if (this.class === 'input-text-inactive') {
    //       this.iconEye = 'eye-inactive'
    //     } else if (this.class === 'input-text-active') {
    //       this.iconEye = 'eye-active'
    //     } else if (this.class === 'input-text-error') {
    //       this.iconEye = 'eye-error'
    //     }
    //   } else {
    //     this.type = 'password'
    //     if (this.class === 'input-text-inactive') {
    //       this.iconEye = 'eye-cross-inactive'
    //     } else if (this.class === 'input-text-active') {
    //       this.iconEye = 'eye-cross-active'
    //     } else if (this.class === 'input-text-error') {
    //       this.iconEye = 'eye-cross-error'
    //     }
    //   }
    // },
    goPageLogin () {
      this.$router.push('/auth/login')
    },
    signup () {
      const username = `@${this.username}`
      const email = this.email
      const password = this.password
      const data = {
        username,
        email,
        password
      }
      console.log(data)
      // axios.post()
      Swal.fire('Success', 'Check Your Email Now!', 'success')
      this.$router.push('/auth/login')
    }
  }
}
export default signup
