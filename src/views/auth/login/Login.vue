<template>
  <div>
    <!-- Title -->
    <h2 class="title-right-auth">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h2>
    <!-- Paragraph -->
    <h4 class="paragraph-right-auth">Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</h4>
    <!-- Wrapper Form -->
    <div class="right-auth-form">
      <!-- Form Login -->
      <FormLogin/>
      <!-- Page Sign Up -->
      <div class="mb-40 w-100"></div>
      <h6 class="reason">Don’t have an account? Let’s <span @click="goPageSignup">Sign Up</span></h6>
      <div class="mb-50 w-100"></div>
    </div>
  </div>
</template>

<script>
import FormLogin from '@/components/auth/module/FormLogin'
import login from '@/mixins/auth/login'

export default {
  name: 'Login',
  components: {
    FormLogin
  },
  mixins: [login]
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/auth/formauth.css';

</style>
