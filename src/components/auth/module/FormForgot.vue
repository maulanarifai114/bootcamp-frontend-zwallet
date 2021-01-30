<template>
  <div>
    <!-- Form -->
    <form @submit.prevent="confirm">
      <!-- Email -->
      <InputTextAuth :class="this.class" :icon="this.iconEmail" type="email" placeholder="Enter your e-mail" @focus="focusInput" @input="inputEmail"/>
      <!-- If Email not registered -->
      <div class="mb-90">
        <div class="mb-8"></div>
        <div class="error-z-c" v-if="isEmail === 1">Email format is incorrect</div>
        <div class="w-100 h-100 d-flex justify-content-center align-items-center">
          <h6 class="invalid" v-if="this.message === 'Email Not Registered!'">Email Not Registered!</h6>
        </div>
      </div>
      <!-- Button Confirm -->
      <BtnAuth title="Confirm" :class="this.class === 'input-text-active' || this.class === 'input-text-error' ? 'primary-z primary-z-c':'deny-z deny-z-c'" />
    </form>
  </div>
</template>

<script>
// Components
import InputTextAuth from '@/components/auth/base/InputTextAuth'
import BtnAuth from '@/components/auth/base/BtnAuth'
// Mixins
import forgot from '@/mixins/auth/forgot'
import regexEmail from '@/mixins/auth/regexEmail'
import changeColor from '@/mixins/auth/changeColor'
import inputValue from '@/mixins/auth/inputValue'

export default {
  name: 'FormForgot',
  components: {
    InputTextAuth,
    BtnAuth
  },
  mixins: [forgot, regexEmail, changeColor, inputValue]
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/auth/formauth.css';

</style>
