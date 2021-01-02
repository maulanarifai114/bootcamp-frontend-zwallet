<template>
  <div class="container-fluid">

    <div class="container">

      <div class="row">

        <!-- Left Side (Phone) -->
        <div class="col-12 col-lg-6 d-none d-lg-block">
          <img src="../../../../assets/img/landing/phone-section-1.png" alt="">
        </div>

        <!-- Right Side -->
        <div class="col-12 col-lg-6 d-flex flex-column justify-content-center px-5 px-lg-0">
          <!-- Title -->
          <h1 class="title-landing">Awesome App For Saving <span class="span-landing"> Time.</span></h1>
          <!-- Paragraph -->
          <p class="paragraph-landing p-custom-1">We bring you a mobile app for banking problems that oftenly wasting much of your times.</p>
          <!-- Button -->
          <button class="btn-try btn-try-custom">Try It Free</button>
          <!-- Paragraph -->
          <p class="paragraph-landing p-custom-2">Available on</p>
          <!-- Google Play and App Store -->
          <div class="store-place">
            <img class="img-1" src="../../../../assets/img/landing/gplay.svg" alt="Google Play">
            <img class="img-2" src="../../../../assets/img/landing/appstore.svg" alt="App Store">
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'SectionOne'
}
</script>

<style lang="scss" scoped>
@import '../../../../assets/css/landing/body/title.css';
@import '../../../../assets/css/landing/body/paragraph.css';
@import '../../../../assets/css/landing/body/btn-try.css';
@import '../../../../assets/css/landing/body/sectionone.css';

.container-fluid {
  padding: 126px 0 120px 0;
  background: #FAFCFF;
}

</style>
