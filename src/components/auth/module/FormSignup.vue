<template>
  <div>
    <!-- Form -->
    <form @submit.prevent="signup">
      <!-- Username -->
      <InputTextAuth :class="this.class" :icon="this.iconUsername" type="text" placeholder="Enter your username" @focus="focusInput" @input="inputUsername"/>
      <div class="mb-70 w-100"></div>
      <!-- Email -->
      <InputTextAuth :class="this.class" :icon="this.iconEmail" type="email" placeholder="Enter your e-mail" @focus="focusInput" @input="inputEmail"/>
      <div class="mb-70 w-100"></div>
      <!-- Password -->
      <InputPassAuth :class="this.class" :icon="this.iconPassword" :eye="this.iconEye" :type="type" placeholder="Enter your password" @focus="focusInput" @input="inputPassword" @changeType="changeType" />
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
import InputTextAuth from '@/components/auth/base/InputTextAuth'
import InputPassAuth from '@/components/auth/base/InputPassAuth'
import BtnAuth from '@/components/auth/base/BtnAuth'
import signup from '@/mixins/auth/signup'

export default {
  name: 'FormSignup',
  components: {
    InputTextAuth,
    InputPassAuth,
    BtnAuth
  },
  mixins: [signup]
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/auth/formauth.css';

</style>
