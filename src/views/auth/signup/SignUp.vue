<template>
  <div>
    <!-- Title -->
    <h2 class="title-right-auth">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h2>
    <!-- Paragraph -->
    <h4 class="paragraph-right-auth">Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</h4>
    <!-- Wrapper Form -->
    <div class="right-auth-form">
      <!-- Form Login -->
      <FormSignup/>
      <!-- Go Page Login -->
      <div class="mb-40 w-100"></div>
      <h6 class="reason">Already have an account? Let’s <span @click="goPageLogin">Login</span></h6>
      <div class="mb-50 w-100"></div>
    </div>
  </div>
</template>

<script>
import FormSignup from '@/components/auth/module/FormSignup'
import signup from '@/mixins/auth/signup'

export default {
  name: 'SignUp',
  components: {
    FormSignup
  },
  mixins: [signup]
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/auth/formauth.css';

body {
  background: #FAFCFF;
}

</style>
