import Swal from 'sweetalert2'
// import axios from 'axios'

const forgot = {
  data () {
    return {
      message: ''
    }
  },
  methods: {
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
