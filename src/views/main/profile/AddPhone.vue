<template>
  <div class="phone-add">
    <!-- Title -->
    <h3 class="title-phone-add">Edit Phone Number</h3>
    <p class="paragraph-phone-add">
      Add at least one phone number for the transfer ID so you can start transfering your money to another user.
    </p>
    <!-- Add Phone Number -->
    <div class="wrap-addphone w-100 d-flex align-items-center flex-column">
      <!-- Input -->
      <div class="d-flex align-items-center" :class="focused === 1 ? 'wrap-input-phone-focus':'wrap-input-phone'">
        <img v-if="focused === 1" src="../../../assets/img/home/phone-active.svg" alt="icon" class="environment" height="24" width="24">
        <img v-else src="../../../assets/img/home/phone.svg" alt="icon" class="environment" height="24" width="24">
        <h6 class="environment">+62</h6>
        <input max="13" ref="inputNumber" @change="resetPhone" @focus="changeClass" @keypress="checkNumber" @keyup="addNumber" type="number" class="w-100" placeholder="Enter your phone number" required>
      </div>
      <!-- Button -->
      <button @focus="focusedBtn" @click="editNumber" class="button-addphone d-flex justify-content-center align-items-center" :class="focused === 1 ? 'button-active' : 'button-inactive'">
        <div v-if="isLoading === 0">Edit Phone Number</div>
        <Loading2 :isLoading="isLoading"/>
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Swal from 'sweetalert2'
import parsePhoneNumber from 'libphonenumber-js'
import axios from 'axios'
import Loading2 from '@/components/loading/Loading2'

export default {
  title: 'Add Phone',
  name: 'AddPhone',
  components: {
    Loading2
  },
  data () {
    return {
      focused: 0,
      phone: '',
      isLoading: 0
    }
  },
  methods: {
    ...mapMutations({ setPhone: 'profile/SET_PHONE' }),
    goEditPhone () {
      this.$router.push('/main/addphone')
    },
    changeClass () {
      this.focused = 1
    },
    focusedBtn () {
      this.$refs.inputNumber.focus()
    },
    checkNumber (e) {
      const keyCode = e.which
      if (this.$refs.inputNumber.value.length === 0 && keyCode !== 56) {
        e.preventDefault()
      } else {
        this.phone = this.$refs.inputNumber.value
      }
    },
    addNumber (e) {
      if (this.$refs.inputNumber.value.length > 0) {
        this.phone = e.target.value
      }
    },
    resetPhone () {
      if (this.$refs.inputNumber.value.length === 0) {
        this.phone = ''
      }
    },
    editNumber () {
      this.isLoading = 1
      const phone = `+62${this.phone}`
      const parsePhone = parsePhoneNumber(phone).formatInternational()
      axios.patch(`${process.env.VUE_APP_BASE_URL}/user/phone`, { phone, id: this.$store.getters['profile/getId'] })
        .then(() => {
          this.isLoading = 0
          this.setPhone(phone)
          Swal.fire('Success', `Your phone number now is ${parsePhone}`, 'success')
          this.$router.push('/main/managephone')
        })
        .catch((err) => {
          this.isLoading = 0
          Swal.fire('Failed', err.response.data.err, 'error')
        })
    }
  }
}
</script>

<style lang="scss" scoped>

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  color: #3A3D42;
}

input::placeholder {
  color: rgba(169, 169, 169, 0.8);
}

.button-addphone {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 12px;
  width: 431px;
  height: 60px;
}

.button-addphone:hover {
  opacity: .8;
}

.button-inactive {
  color: #88888F;
  background: #DADADA;
}

.button-active {
  color: #ffffff;
  background: #6379F4;
}

.phone-add {
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  padding: 30px
}

.title-phone-add {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #3A3D42;
  margin: 0 0 25px 0
}

.paragraph-phone-add {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: #7A7886;
  width: 342px;
  margin: 0 0 120px 0
}

.wrap-addphone {
  width: 100%;
}

.wrap-input-phone {
  width: 431px;
  padding: 12px 0;
  border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
  margin: 0 0 70px 0
}

.wrap-input-phone-focus {
  width: 431px;
  padding: 12px 0;
  margin: 0 0 70px 0;
  border-bottom: 1.5px solid #6379F4!important;
}

.environment {
  margin: 0 15px 0 0;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  color: #3A3D42;
}

@media (max-width: 575px) {
  .paragraph-phone-add {
    width: 100%;
  }
  .wrap-input-phone, .wrap-input-phone-focus, .button-addphone {
    width: 100%;
  }
}

@media (max-width: 375px) {
  .phone-add {
    padding: 30px 15px
  }
}

</style>
