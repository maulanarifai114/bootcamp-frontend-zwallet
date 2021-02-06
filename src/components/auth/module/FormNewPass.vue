<template>
  <div>
    <!-- Form -->
    <form @submit.prevent="reset">
      <!-- Password -->
      <InputPassAuth :class="this.class" :icon="this.iconPassword" :eye="this.iconEye" :type="type" placeholder="Create new password" @focus="focusInput" @input="inputPassword" @changeType="changeType" />
      <div class="mb-70 w-100">
        <div class="mb-8"></div>
        <p class="error-z-c mb-2" v-if="isPassword1 === 1">{{validatePassword1}}</p>
        <p class="error-z-c mb-2" v-if="isPassword2 === 1">{{validatePassword2}}</p>
        <p class="error-z-c mb-2" v-if="isPassword3 === 1">{{validatePassword3}}</p>
        <p class="error-z-c mb-2" v-if="isPassword4 === 1">{{validatePassword4}}</p>
      </div>
      <!-- Password Two -->
      <InputPassAuth :class="this.class" :icon="this.iconPassword" :eye="this.iconEye" :type="type" placeholder="Create new password" @focus="focusInput" @input="inputNewPassword" @changeType="changeType" />
      <div class="mb-8"></div>
      <p class="error-z-c mb-2" v-if="isPassword5 === 1">{{validatePassword1}}</p>
      <p class="error-z-c mb-2" v-if="isPassword6 === 1">{{validatePassword2}}</p>
      <p class="error-z-c mb-2" v-if="isPassword7 === 1">{{validatePassword3}}</p>
      <p class="error-z-c mb-2" v-if="isPassword8 === 1">{{validatePassword4}}</p>
      <!-- If Password are not same -->
      <div class="mb-90 w-100 d-flex justify-content-center align-items-center ">
        <h6 class="invalid" v-if="this.message === 'Passwords Are Not Same!'">Passwords Are Not Same!</h6>
      </div>
      <!-- Button New Pass -->
      <BtnAuth :isLoading="isLoading" title="Reset Password" :class="this.class === 'input-text-active' || this.class === 'input-text-error' ? 'primary-z primary-z-c':'deny-z deny-z-c'" />
    </form>
  </div>
</template>

<script>
// Components
import InputPassAuth from '@/components/auth/base/InputPassAuth'
import BtnAuth from '@/components/auth/base/BtnAuth'
// Mixins
import newpass from '@/mixins/auth/newpass'
import regexPassword from '@/mixins/auth/regexPassword'
import changeColor from '@/mixins/auth/changeColor'
import inputValue from '@/mixins/auth/inputValue'
import loading from '@/mixins/auth/loading'

export default {
  name: 'FormNewPass',
  components: {
    InputPassAuth,
    BtnAuth
  },
  mixins: [newpass, regexPassword, changeColor, inputValue, loading]
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/auth/formauth.css';

</style>
