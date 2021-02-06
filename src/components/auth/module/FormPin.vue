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
      <BtnAuth :isLoading="isLoading" ref="button" title="Confirm" :class="this.class === 'input-text-active' || this.class === 'input-text-error' ? 'primary-z primary-z-c':'deny-z deny-z-c'" />
      <div class="mb-50"></div>
    </form>
    <div v-if="isLoadingActivate === 1" class="loading position-fixed d-flex justify-content-center align-items-center">
      <Loading1 :isLoading="isLoadingActivate"/>
    </div>
  </div>
</template>

<script>
import InputPin from '@/components/auth/base/InputPin'
import BtnAuth from '@/components/auth/base/BtnAuth'
import pin from '@/mixins/auth/pin'
import loading from '@/mixins/auth/loading'
import Loading1 from '@/components/loading/Loading1'
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'FormPin',
  components: {
    InputPin,
    BtnAuth,
    Loading1
  },
  mixins: [pin, loading],
  data () {
    return {
      isLoadingActivate: 1
    }
  },
  methods: {
    verifyAccount () {
      const token = this.$route.params.token
      localStorage.setItem('temporaryToken', token)
      const id = this.$route.params.id
      axios.patch(`${process.env.VUE_APP_BASE_URL}/auth/activate`, { id })
        .then((res) => {
          this.isLoadingActivate = 0
          Swal.fire('Success', res.data.result, 'success')
        })
        .catch((err) => {
          this.isLoadingActivate = 0
          Swal.fire('Failed', err.response.data.err, 'error')
          this.$router.push('/auth/signup')
        })
    }
  },
  mounted () {
    this.verifyAccount()
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/auth/formauth.css';

.loading {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

</style>
