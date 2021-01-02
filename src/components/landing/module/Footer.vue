<template>
  <footer class="container-fluid">
    <div class="container footer-landing">

      <!-- First Row -->
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-4">
          <h4 class="title-footer">Zwallet</h4>
          <p class="p-footer-landing-1">Simplify financial needs and saving much time in banking needs with one single app.</p>
        </div>
      </div>

      <!-- Line -->
      <hr>

      <!-- Second Row -->
      <div class="row">
        <div class="p-footer-landing-2 col-12 col-lg-6">2020 Zwallet. All right reserved.</div>
        <div class="col-12 col-lg-6 d-lg-flex justify-content-lg-end">
          <p class="p-footer-landing-2">+62 5637 8882 9901</p>
          <p class="p-footer-landing-2 ml-lg-5">contact@zwallet.com</p>
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterLanding'
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/landing/footer/footer.css';

.container-fluid {
  background-color: #6379F4;
}

</style>
