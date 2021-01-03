import Swal from 'sweetalert2'
// import axios from 'axios'

const forgot = {
  data () {
    return {
      message: '',
      email: '',
      class: 'input-text-inactive',
      iconEmail: 'mail-inactive'
    }
  },
  methods: {
    focusInput () {
      this.class = 'input-text-active'
      this.iconEmail = 'mail-active'
    },
    inputEmail (e) {
      this.email = e
    },
    confirm () {
      Swal.fire('Success', 'Check your email now', 'success')
      this.$router.push('/auth/login')
    },
    goPageLogin () {
      this.$router.push('/auth/login')
    }
  }
}
export default forgot
