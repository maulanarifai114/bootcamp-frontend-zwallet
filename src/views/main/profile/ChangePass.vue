<template>
  <div class="changepass d-flex flex-column align-items-center">
    <!-- Title -->
    <h3 class="title-pass align-self-start">Change Password</h3>
    <p class="paragraph-pass align-self-start">
      You must enter your current password and then type your new password twice.
    </p>
    <!-- Input Password -->
    <div class="wrap-pass">
      <!-- Current Password -->
      <InputPassAuth :class="this.class" :icon="this.iconPassword" :eye="this.iconEye" :type="type" placeholder="Current Password" @focus="focusInput" @input="inputCurrentPassword" @changeType="changeType" />
      <div class="mb-60 w-100">
        <div class="mb-8"></div>
        <p class="error-z-c mb-2" v-if="isPassword9 === 1">{{validatePassword1}}</p>
        <p class="error-z-c mb-2" v-if="isPassword10 === 1">{{validatePassword2}}</p>
        <p class="error-z-c mb-2" v-if="isPassword11 === 1">{{validatePassword3}}</p>
        <p class="error-z-c mb-2" v-if="isPassword12 === 1">{{validatePassword4}}</p>
      </div>
      <!-- New Password -->
      <InputPassAuth :class="this.class" :icon="this.iconPassword" :eye="this.iconEye" :type="type" placeholder="New password" @focus="focusInput" @input="inputPassword" @changeType="changeType" />
      <div class="mb-60 w-100">
        <div class="mb-8"></div>
        <p class="error-z-c mb-2" v-if="isPassword1 === 1">{{validatePassword1}}</p>
        <p class="error-z-c mb-2" v-if="isPassword2 === 1">{{validatePassword2}}</p>
        <p class="error-z-c mb-2" v-if="isPassword3 === 1">{{validatePassword3}}</p>
        <p class="error-z-c mb-2" v-if="isPassword4 === 1">{{validatePassword4}}</p>
      </div>
      <!-- Repeat Password -->
      <InputPassAuth :class="this.class" :icon="this.iconPassword" :eye="this.iconEye" :type="type" placeholder="Repeat new password" @focus="focusInput" @input="inputNewPassword" @changeType="changeType" />
      <div class="mb-70 w-100">
        <div class="mb-8"></div>
        <p class="error-z-c mb-2" v-if="isPassword5 === 1">{{validatePassword1}}</p>
        <p class="error-z-c mb-2" v-if="isPassword6 === 1">{{validatePassword2}}</p>
        <p class="error-z-c mb-2" v-if="isPassword7 === 1">{{validatePassword3}}</p>
        <p class="error-z-c mb-2" v-if="isPassword8 === 1">{{validatePassword4}}</p>
      </div>
      <!-- Button New Pass -->
      <BtnAuth :isLoading="isLoading" @click="changeNewPassword" title="Change Password" :class="this.class === 'input-text-active' || this.class === 'input-text-error' ? 'primary-z primary-z-c':'deny-z deny-z-c'" />
    </div>
  </div>
</template>

<script>
import InputPassAuth from '@/components/auth/base/InputPassAuth'
import BtnAuth from '@/components/auth/base/BtnAuth'
import regexPassword from '@/mixins/auth/regexPassword'
import changeColor from '@/mixins/auth/changeColor'
import inputValue from '@/mixins/auth/inputValue'
import Swal from 'sweetalert2'
import loading from '@/mixins/auth/loading'
import axios from 'axios'

export default {
  title: 'Change Password',
  name: 'ChangePass',
  components: {
    InputPassAuth,
    BtnAuth
  },
  mixins: [regexPassword, changeColor, inputValue, loading],
  methods: {
    changeNewPassword () {
      if (this.password === '' || this.newpassword === '' || this.currentpassword === '') {
        Swal.fire('Oops!', 'You haven\'t filled in the form completely', 'error')
      } else if (this.currentpassword === this.password) {
        Swal.fire('Same Password!', 'You have the same password at current password!', 'error')
      } else if (this.password !== this.newpassword) {
        Swal.fire('Failed', 'Passwords Are Not Same!', 'error')
      } else if (
        this.isPassword1 === 1 ||
        this.isPassword2 === 1 ||
        this.isPassword3 === 1 ||
        this.isPassword4 === 1 ||
        this.isPassword5 === 1 ||
        this.isPassword6 === 1 ||
        this.isPassword7 === 1 ||
        this.isPassword8 === 1 ||
        this.isPassword9 === 1 ||
        this.isPassword10 === 1 ||
        this.isPassword11 === 1 ||
        this.isPassword12 === 1
      ) {
        Swal.fire('Failed', 'Password Does Not Qualify', 'error')
      } else {
        this.isLoading = 1
        const data = {
          currentpassword: this.currentpassword,
          password: this.password,
          repeatpassword: this.newpassword,
          id: this.$store.getters['profile/getId']
        }
        axios.patch(`${process.env.VUE_APP_BASE_URL}/user/password`, data)
          .then(() => {
            this.isLoading = 0
            Swal.fire('Success', 'You have change your password', 'success')
            this.$router.push('/main/profile')
          })
          .catch((err) => {
            this.isLoading = 0
            Swal.fire('Failed', err.response.data.result, 'error')
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.mb-70 {
  min-height: 70px;
}

.mb-60 {
  min-height: 60px;
}

.changepass {
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  padding: 30px
}

.title-pass {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #3A3D42;
  margin: 0 0 25px 0
}

.paragraph-pass {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: #7A7886;
  width: 342px;
  margin: 0 0 100px 0
}

.wrap-pass {
  width: 431px;
}

@media (max-width: 575px) {
  .paragraph-pass {
    width: 100%;
  }
  .wrap-pass {
    width: 100%;
  }
}

@media (max-width: 375px) {
  .changepass {
    padding: 30px 15px
  }
}

</style>
