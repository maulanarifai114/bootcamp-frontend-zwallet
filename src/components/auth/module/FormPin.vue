<template>
  <div>
    <!-- Form -->
    <form @submit.prevent="createPin">
      <div class=" w-100 d-flex justify-content-lg-between">
        <!-- Pin 1 -->
        <InputPin id="pinOne" :class="this.class" type="text" @keyup="moveOnMax($event, 'pinTwo')" @focus="focusInput" @input="inputPinOne"/>
        <!-- Pin 2 -->
        <InputPin id="pinTwo" :class="this.class" type="text" @keyup="moveOnMax($event, 'pinThree')" @focus="focusInput" @input="inputPinTwo"/>
        <!-- Pin 3 -->
        <InputPin id="pinThree" :class="this.class" type="text" @keyup="moveOnMax($event, 'pinFour')" @focus="focusInput" @input="inputPinThree"/>
        <!-- Pin 4 -->
        <InputPin id="pinFour" :class="this.class" type="text" @keyup="moveOnMax($event, 'pinFive')" @focus="focusInput" @input="inputPinFour"/>
        <!-- Pin 5 -->
        <InputPin id="pinFive" :class="this.class" type="text" @keyup="moveOnMax($event, 'pinSix')" @focus="focusInput" @input="inputPinFive"/>
        <!-- Pin 6 -->
        <InputPin id="pinSix" :class="this.class" type="text" @keyup="moveOnMax($event, 'pinSix')" @focus="focusInput" @input="inputPinSix"/>
      </div>
      <div class="mb-70 w-100"></div>
      <!-- Button Sign Up -->
      <BtnAuth title="Confirm" :class="this.class === 'input-text-active' || this.class === 'input-text-error' ? 'primary-z primary-z-c':'deny-z deny-z-c'" />
    </form>
  </div>
</template>

<script>
import InputPin from '@/components/auth/base/InputPin'
import BtnAuth from '@/components/auth/base/BtnAuth'
// import BtnReset from '@/components/auth/base/BtnReset'
import pin from '@/mixins/auth/pin'

export default {
  name: 'FormSignup',
  components: {
    InputPin,
    BtnAuth
    // BtnReset
  },
  mixins: [pin]
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/auth/formauth.css';

</style>
