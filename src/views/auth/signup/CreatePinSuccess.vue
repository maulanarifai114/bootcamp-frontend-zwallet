<template>
  <div>
    <!-- Checklist -->
    <img src="../../../assets/img/auth/success.svg" alt="success" class="img-margin">
    <!-- Title -->
    <h2 class="title-right-auth">Your PIN Was Successfully Created</h2>
    <!-- Paragraph -->
    <h4 class="paragraph-right-auth">Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!</h4>
    <div class="mb-50 w-100"></div>
    <!-- Wrapper Form -->
    <div class="right-auth-form">
      <!-- Button Login -->
      <BtnGoLogin title="Login Now" class="primary-z primary-z-c" @click="goPageLogin" />
      <div class="mb-50 w-100"></div>
    </div>
  </div>
</template>

<script>
import BtnGoLogin from '@/components/auth/base/BtnGoLogin'
import pinsuccess from '@/mixins/auth/pinsuccess'

export default {
  name: 'CreatePinSuccess',
  components: {
    BtnGoLogin
  },
  mixins: [pinsuccess]
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/auth/formauth.css';

body {
  background: #FAFCFF;
}

</style>
