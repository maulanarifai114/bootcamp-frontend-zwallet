<template>
  <div>
    <!-- Form -->
    <form @submit.prevent="reset">
      <!-- Password -->
      <InputPassAuth :class="this.class" :icon="this.iconPassword" :type="type" placeholder="Create new password" @focus="focusInput" @input="inputPassword" @changeType="changeType" />
      <div class="mb-70 w-100"></div>
      <!-- Password Two -->
      <InputPassAuth :class="this.class" :icon="this.iconPassword" :type="type" placeholder="Create new password" @focus="focusInput" @input="inputNewPassword" @changeType="changeType" />
      <!-- If Password are not same -->
      <div class="mb-90 w-100 d-flex justify-content-center align-items-center ">
        <h6 class="invalid" v-if="this.message === 'Passwords Are Not The Same!'">Passwords Are Not The Same!</h6>
      </div>
      <!-- Button New Pass -->
      <BtnAuth title="Reset Password" :class="this.class === 'input-text-active' || this.class === 'input-text-error' ? 'primary-z primary-z-c':'deny-z deny-z-c'" />
    </form>
  </div>
</template>

<script>
import InputPassAuth from '@/components/auth/base/InputPassAuth'
import BtnAuth from '@/components/auth/base/BtnAuth'
import newpass from '@/mixins/auth/newpass'

export default {
  name: 'FormNewPass',
  components: {
    InputPassAuth,
    BtnAuth
  },
  mixins: [newpass]
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/auth/formauth.css';

</style>
