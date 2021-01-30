<template>
  <div>
    <!-- Form -->
    <form @submit.prevent="createPin">
      <div class=" w-100 d-flex justify-content-between">
        <!-- Pin 1 -->
        <InputPin ref="one" id="pinOne" :class="this.class" type="text" @focus="focusInput" @input="inputPinOne"/>
        <!-- Pin 2 -->
        <InputPin ref="two" id="pinTwo" :class="this.class" type="text" @focus="focusInput" @input="inputPinTwo"/>
        <!-- Pin 3 -->
        <InputPin ref="three" id="pinThree" :class="this.class" type="text" @focus="focusInput" @input="inputPinThree"/>
        <!-- Pin 4 -->
        <InputPin ref="four" id="pinFour" :class="this.class" type="text" @focus="focusInput" @input="inputPinFour"/>
        <!-- Pin 5 -->
        <InputPin ref="five" id="pinFive" :class="this.class" type="text" @focus="focusInput" @input="inputPinFive"/>
        <!-- Pin 6 -->
        <InputPin ref="six" id="pinSix" :class="this.class" type="text" @focus="focusInput" @input="inputPinSix"/>
      </div>
      <div class="mb-70 w-100"></div>
      <!-- Button Sign Up -->
      <BtnAuth ref="button" title="Confirm" :class="this.class === 'input-text-active' || this.class === 'input-text-error' ? 'primary-z primary-z-c':'deny-z deny-z-c'" />
      <div class="mb-50"></div>
    </form>
  </div>
</template>

<script>
import InputPin from '@/components/auth/base/InputPin'
import BtnAuth from '@/components/auth/base/BtnAuth'
import pin from '@/mixins/auth/pin'

export default {
  name: 'FormPin',
  components: {
    InputPin,
    BtnAuth
  },
  mixins: [pin]
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/auth/formauth.css';

</style>
