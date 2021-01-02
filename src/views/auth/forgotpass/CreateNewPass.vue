<template>
  <div>
    <!-- Title -->
    <h2 class="title-right-auth">Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</h2>
    <!-- Paragraph -->
    <h4 class="paragraph-right-auth">Now you can create a new password for your Zwallet account. Type your password twice so we can confirm your new passsword.</h4>
    <!-- Wrapper Form -->
    <div class="right-auth-form">
      <!-- Form New Password -->
      <FormNewPass/>
      <div class="mb-50 w-100"></div>
    </div>
  </div>
</template>

<script>
import FormNewPass from '@/components/auth/module/FormNewPass'
import newpass from '@/mixins/auth/newpass'

export default {
  name: 'CreateNewPass',
  components: {
    FormNewPass
  },
  mixins: [newpass]
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/auth/formauth.css';

</style>
