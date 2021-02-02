<template>
  <div v-if="showed === 1" class="position-fixed d-flex justify-content-center align-items-center show-pin">
    <div class="wrap-pin position-relative">
      <h3 class="title-pin">Enter PIN to Transfer</h3>
      <img class="closed position-absolute" src="@/assets/img/home/close.svg" alt="icon" @click="$emit('click')">
      <p class="paragraph-pin">Enter your 6 digits PIN for confirmation to continue transferring money.</p>
      <div class=" w-100 d-flex justify-content-between wrap-pin-box">
        <!-- Pin 1 -->
        <InputPin ref="one" id="pinOne" :class="this.class" @focus="focusInput" @input="inputPinOne"/>
        <!-- Pin 2 -->
        <InputPin ref="two" id="pinTwo" :class="this.class" @focus="focusInput" @input="inputPinTwo"/>
        <!-- Pin 3 -->
        <InputPin ref="three" id="pinThree" :class="this.class" @focus="focusInput" @input="inputPinThree"/>
        <!-- Pin 4 -->
        <InputPin ref="four" id="pinFour" :class="this.class" @focus="focusInput" @input="inputPinFour"/>
        <!-- Pin 5 -->
        <InputPin ref="five" id="pinFive" :class="this.class" @focus="focusInput" @input="inputPinFive"/>
        <!-- Pin 6 -->
        <InputPin ref="six" id="pinSix" :class="this.class" @focus="focusInput" @input="inputPinSix"/>
      </div>
      <div class="d-flex justify-content-end">
        <BtnTransfer ref="button" label="Continue" @click="confirm"/>
      </div>
    </div>
  </div>
</template>

<script>
import InputPin from '@/components/auth/base/InputPin.vue'
import BtnTransfer from './BtnTransfer'
import Swal from 'sweetalert2'

export default {
  name: 'ShowPin',
  props: ['showed'],
  components: {
    InputPin,
    BtnTransfer
  },
  data () {
    return {
      pinBox: {
        pinOne: '',
        pinTwo: '',
        pinThree: '',
        pinFour: '',
        pinFive: '',
        pinSix: ''
      },
      type: 'password',
      class: 'input-text-inactive'
    }
  },
  methods: {
    focusInput () {
      this.class = 'input-text-active'
    },
    inputPinOne (e) {
      this.pinBox.pinOne = e
      this.$refs.two.$el.children[0].focus()
    },
    inputPinTwo (e) {
      this.pinBox.pinTwo = e
      this.$refs.three.$el.children[0].focus()
    },
    inputPinThree (e) {
      this.pinBox.pinThree = e
      this.$refs.four.$el.children[0].focus()
    },
    inputPinFour (e) {
      this.pinBox.pinFour = e
      this.$refs.five.$el.children[0].focus()
    },
    inputPinFive (e) {
      this.pinBox.pinFive = e
      this.$refs.six.$el.children[0].focus()
    },
    inputPinSix (e) {
      this.pinBox.pinSix = e
      this.$refs.button.$el.focus()
    },
    confirm () {
      const regex = /^[0-9]+$/
      const pinBox = this.pinBox
      const pin = `${pinBox.pinOne}${pinBox.pinTwo}${pinBox.pinThree}${pinBox.pinFour}${pinBox.pinFive}${pinBox.pinSix}`
      const failed = () => {
        Swal.fire('Failed', 'Pin must be number', 'error')
        this.pinBox = {
          pinOne: '',
          pinTwo: '',
          pinThree: '',
          pinFour: '',
          pinFive: '',
          pinSix: ''
        }
      }
      const success = () => {
        this.$emit('change')
        // axios.post()
        Swal.fire('Success', 'You\'ve been transfer to your friend', 'success')
        // Swal.fire('Failed', 'An error occurred', 'error')
        this.$router.push('/main/success')
        // this.$router.push('/main/failed')
      }
      !regex.test(pin) ? failed() : success()
    }
  }
}
</script>

<style lang="scss" scoped>

.show-pin {
  top: 0;
  bottom: 100%;
  left: 0;
  right: 100%;
  width: 100%;
  height: 100%;
  background: rgba(58, 61, 66, 0.5);
  z-index: 1001;
}

.title-pin {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #3A3D42;
  margin: 0 0 20px 0
}

.paragraph-pin {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  color: rgba(58, 61, 66, 0.6);
  margin: 0 0 50px 0
}

.wrap-pin {
  max-width: 500px;
  padding: 35px;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
}

.wrap-pin-box {
  margin: 0 0 70px 0
}

.closed {
  top: 35px;
  right: 35px;
  cursor: pointer;
}

.closed:hover {
  opacity: .8;
}

@media (max-width: 515px) {
  .show-pin {
    padding: 0 15px
  }
}

</style>
