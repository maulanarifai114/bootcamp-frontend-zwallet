import Swal from 'sweetalert2'
// import axios from 'axios'

const newpass = {
  data () {
    return {
      message: '',
      password: '',
      newpassword: '',
      type: 'password',
      class: 'input-text-inactive',
      iconPassword: 'lock-inactive',
      iconEye: 'eye-cross-inactive'
    }
  },
  methods: {
    focusInput () {
      this.class = 'input-text-active'
      this.iconPassword = 'lock-active'
      if (this.type === 'password') {
        this.iconEye = 'eye-cross-active'
      } else if (this.type === 'text') {
        this.iconEye = 'eye-active'
      }
    },
    inputPassword (e) {
      this.password = e
    },
    inputNewPassword (e) {
      this.newpassword = e
    },
    changeType () {
      if (this.type === 'password') {
        this.type = 'text'
        if (this.class === 'input-text-inactive') {
          this.iconEye = 'eye-inactive'
        } else if (this.class === 'input-text-active') {
          this.iconEye = 'eye-active'
        } else if (this.class === 'input-text-error') {
          this.iconEye = 'eye-error'
        }
      } else {
        this.type = 'password'
        if (this.class === 'input-text-inactive') {
          this.iconEye = 'eye-cross-inactive'
        } else if (this.class === 'input-text-active') {
          this.iconEye = 'eye-cross-active'
        } else if (this.class === 'input-text-error') {
          this.iconEye = 'eye-cross-error'
        }
      }
    },
    reset () {
      if (this.password !== this.newpassword) {
        const password = this.password
        console.log(password)
        Swal.fire('Failed', 'Passwords Are Not Same!', 'error')
      } else {
        Swal.fire('Success', 'Let\'s go login', 'success')
        this.$router.push('/auth/login')
      }
    }
  }
}
export default newpass
