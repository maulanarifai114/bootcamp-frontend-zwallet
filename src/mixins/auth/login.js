import Swal from 'sweetalert2'
import axios from 'axios'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    ...mapMutations({ setProfile: 'profile/SET_PROFILE' }),
    goPageForgot () {
      this.$router.push('/auth/forgot')
    },
    goPageSignup () {
      this.$router.push('/auth/signup')
    },
    login () {
      const email = this.email
      const password = this.password
      const send = {
        email,
        password
      }
      if (this.isEmail === 1) {
        Swal.fire('Failed', 'Email Does Not Qualify', 'error')
      } else if (this.isPassword1 === 1 || this.isPassword2 === 1 || this.isPassword3 === 1 || this.isPassword4 === 1) {
        Swal.fire('Failed', 'Password Does Not Qualify', 'error')
      } else {
        this.isLoading = 1
        axios.post(`${process.env.VUE_APP_BASE_URL}/auth/login`, send)
          .then((res) => {
            console.log(res)
            const token = res.data.result.token
            const id = res.data.result.id
            const result = res.data.result
            console.log(token)
            console.log(result)
            const data = {
              id: result.id,
              photo: result.photo,
              firstName: result.firstName,
              lastName: result.lastName,
              balance: result.balance,
              phone: result.phone,
              email: result.email
            }
            localStorage.setItem('token', token)
            localStorage.setItem('id', id)
            this.setProfile(data)
            if (result.firstTime === 'false') {
              this.isLoading = 0
              Swal.fire('Success', 'Let\'s Fill Your Wallet', 'success')
              this.$router.push('/main/dashboard')
            } else {
              axios.patch(`${process.env.VUE_APP_BASE_URL}/auth/first`, { id })
                .then(() => {
                  this.isLoading = 0
                  Swal.fire('Congratulations', 'This is the first time for you to use this application, we will reward you IDR 100k', 'success')
                  this.$router.push('/main/dashboard')
                })
                .catch((err) => {
                  console.log(err)
                  Swal.fire('Failed', err.response.data.err, 'error')
                })
            }
          })
          .catch((err) => {
            this.isLoading = 0
            console.log(err)
            Swal.fire('Failed', err.response.data.err, 'error')
          })
      }
    }
  }
}
