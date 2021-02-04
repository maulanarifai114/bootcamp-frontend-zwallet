<template>
  <div class="changepin d-flex flex-column align-items-center">
    <!-- Title -->
    <h3 class="title-pin align-self-start">Change Pin</h3>
    <p v-if="displayNext === 0" class="paragraph-pin align-self-start">
      Enter your current 6 digits Zwallet PIN below to continue to the next steps.
    </p>
    <p v-else class="paragraph-pin align-self-start">
      Type your new 6 digits security PIN to use in Zwallet.
    </p>
    <!-- Input Pin -->
    <div class="change-pin">
      <div class=" d-flex justify-content-between">
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
      <div class="mb-70"></div>
      <BtnAuth ref="button" v-if="displayNext === 0" @click="checkPin" title="Continue" :class="this.class === 'input-text-active' || this.class === 'input-text-error' ? 'primary-z primary-z-c':'deny-z deny-z-c'" />
      <BtnAuth ref="button2" v-else @click="changePin" title="Change PIN" :class="this.class === 'input-text-active' || this.class === 'input-text-error' ? 'primary-z primary-z-c':'deny-z deny-z-c'" />
    </div>
  </div>
</template>

<script>
import InputPin from '@/components/auth/base/InputPin'
import BtnAuth from '@/components/auth/base/BtnAuth'
import pin from '@/mixins/auth/pin'

export default {
  title: 'Change Pin',
  name: 'ChangePin',
  components: {
    InputPin,
    BtnAuth
  },
  mixins: [pin]
}
</script>

<style lang="scss" scoped>

.mb-70 {
  height: 70px;
  width: 100%;
}

.change-pin {
  width: 432px;
}

.changepin {
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  padding: 30px
}

.title-pin {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #3A3D42;
  margin: 0 0 25px 0
}

.paragraph-pin {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: #7A7886;
  width: 342px;
  margin: 0 0 100px 0
}

@media (max-width: 575px) {
  .paragraph-pin {
    width: 100%;
  }
  .change-pin {
    width: 100%;
  }
}

@media (max-width: 375px) {
  .changepin {
    padding: 30px 15px
  }
}

</style>
