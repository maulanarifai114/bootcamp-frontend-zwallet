<template>
  <div>
    <!-- Title -->
    <h2 class="title-right-auth">Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</h2>
    <!-- Paragraph -->
    <h4 class="paragraph-right-auth">To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</h4>
    <!-- Wrapper Form -->
    <div class="right-auth-form">
      <!-- Form Forgot Password -->
      <FormForgot/>
      <div class="mb-50 w-100"></div>
    </div>
  </div>
</template>

<script>
import FormForgot from '@/components/auth/module/FormForgot'
import forgot from '@/mixins/auth/forgot'

export default {
  name: 'ForgotPass',
  components: {
    FormForgot
  },
  mixins: [forgot]
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/auth/formauth.css';

</style>
