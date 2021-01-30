<template>
  <div>
    <!-- Form -->
    <form @submit.prevent="signup">
      <!-- Username -->
      <InputTextAuth id="username" :class="this.class" :icon="this.iconUsername" type="text" placeholder="Enter your username" @focus="focusInput" @input="inputUsername"/>
      <div class="mb-70 w-100"></div>
      <!-- Email -->
      <InputTextAuth id="email" :class="this.class" :icon="this.iconEmail" type="email" placeholder="Enter your e-mail" @focus="focusInput" @input="inputEmail"/>
      <div class="mb-70 w-100">
        <div class="mb-8"></div>
        <div class="error-z-c" v-if="isEmail === 1">Email format is incorrect</div>
      </div>
      <!-- Password -->
      <InputPassAuth :class="this.class" :icon="this.iconPassword" :eye="this.iconEye" :type="type" placeholder="Enter your password" @focus="focusInput" @input="inputPassword" @changeType="changeType" />
      <div>
        <div class="mb-8"></div>
        <p class="error-z-c mb-2" v-if="isPassword1 === 1">{{validatePassword1}}</p>
        <p class="error-z-c mb-2" v-if="isPassword2 === 1">{{validatePassword2}}</p>
        <p class="error-z-c mb-2" v-if="isPassword3 === 1">{{validatePassword3}}</p>
        <p class="error-z-c mb-2" v-if="isPassword4 === 1">{{validatePassword4}}</p>
      </div>
      <!-- If Email has already registered -->
      <div class="mb-90 w-100 d-flex justify-content-center align-items-center ">
        <h6 class="invalid" v-if="this.message === 'Email Has Already Registered!'">Email Has Already Registered!</h6>
      </div>
      <!-- Button Sign Up -->
      <BtnAuth title="Sign Up" :class="this.class === 'input-text-active' || this.class === 'input-text-error' ? 'primary-z primary-z-c':'deny-z deny-z-c'" />
    </form>
  </div>
</template>

<script>
// Components
import InputTextAuth from '@/components/auth/base/InputTextAuth'
import InputPassAuth from '@/components/auth/base/InputPassAuth'
import BtnAuth from '@/components/auth/base/BtnAuth'
// Mixins
import signup from '@/mixins/auth/signup'
import regexPassword from '@/mixins/auth/regexPassword'
import regexEmail from '@/mixins/auth/regexEmail'
import changeColor from '@/mixins/auth/changeColor'
import inputValue from '@/mixins/auth/inputValue'

export default {
  name: 'FormSignup',
  components: {
    InputTextAuth,
    InputPassAuth,
    BtnAuth
  },
  mixins: [signup, regexPassword, regexEmail, changeColor, inputValue]
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/auth/formauth.css';

</style>
