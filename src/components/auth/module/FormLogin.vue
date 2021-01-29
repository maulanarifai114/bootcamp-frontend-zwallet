<template>
  <div>
    <!-- Form -->
    <form @submit.prevent="login">
      <!-- Email -->
      <InputTextAuth :class="this.class" :icon="this.iconEmail" type="email" placeholder="Enter your e-mail" @focus="focusInput" @input="inputEmail"/>
      <div class="mb-70 w-100">
        <div class="mb-2"></div>
        <div class="error-z-c" v-if="isEmail === 1">Email format is incorrect</div>
      </div>
      <!-- Password -->
      <InputPassAuth :class="this.class" :icon="this.iconPassword" :eye="this.iconEye" :type="type" placeholder="Enter your password" @focus="focusInput" @input="inputPassword" @changeType="changeType" />
      <div class="mb-20 w-100">
        <div class="mb-2"></div>
        <p class="error-z-c" v-if="isPassword1 === 1">{{validatePassword1}}</p>
        <p class="error-z-c" v-if="isPassword2 === 1">{{validatePassword2}}</p>
        <p class="error-z-c" v-if="isPassword3 === 1">{{validatePassword3}}</p>
        <p class="error-z-c" v-if="isPassword4 === 1">{{validatePassword4}}</p>
      </div>
      <!-- Forgot Password -->
      <div class="d-flex justify-content-end">
        <h6 class="forgot" @click="goPageForgot">Forgot Password</h6>
      </div>
      <!-- If Invalid Email or Password -->
      <div class="mb-90 w-100 d-flex justify-content-center align-items-center ">
        <h6 class="invalid" v-if="this.message === 'Email Not Registered!'">Email Not Registered!</h6>
        <h6 class="invalid" v-if="this.message === 'Password Invalid!'">Password Invalid!</h6>
      </div>
      <!-- Button Login -->
      <BtnAuth title="Login" :class="this.class === 'input-text-active' || this.class === 'input-text-error' ? 'primary-z primary-z-c':'deny-z deny-z-c'" />
    </form>
  </div>
</template>

<script>
import InputTextAuth from '@/components/auth/base/InputTextAuth'
import InputPassAuth from '@/components/auth/base/InputPassAuth'
import BtnAuth from '@/components/auth/base/BtnAuth'
import login from '@/mixins/auth/login'

export default {
  name: 'FormLogin',
  components: {
    InputTextAuth,
    InputPassAuth,
    BtnAuth
  },
  mixins: [login]
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/auth/formauth.css';

</style>
