<template>
  <div>
    <!-- Title -->
    <h2 class="title-right-auth">Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.</h2>
    <!-- Paragraph -->
    <h4 class="paragraph-right-auth">Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.</h4>
    <!-- Wrapper Form -->
    <div class="right-auth-form">
      <!-- Form Create Pin -->
      <FormPin/>
    </div>
  </div>
</template>

<script>
import FormPin from '@/components/auth/module/FormPin'
import pin from '@/mixins/auth/pin'

export default {
  title: 'Create Your Pin',
  name: 'CreatePin',
  components: {
    FormPin
  },
  mixins: [pin]
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/auth/formauth.css';

body {
  background: #FAFCFF;
}

</style>
