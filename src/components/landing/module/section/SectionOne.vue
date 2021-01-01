<template>
  <div class="container-fluid">

    <div class="container">

      <div class="row">

        <!-- Left Side (Phone) -->
        <div class="col-12 col-lg-6 d-none d-lg-block">
        <!-- <div class="col-xl-6 col-md-12 order-lg-0 order-1 d-none d-md-block"> -->
          <img src="../../../../assets/img/landing/phone-section-1.png" alt="">
        </div>

        <!-- Right Side -->
        <div class="col-12 col-lg-6 d-flex flex-column justify-content-center px-5 px-lg-0">
        <!-- <div class="col-xl-6 col-md-12 order-lg-1 order-0 d-flex justify-content-center flex-column pl-lg-5 px-5 px-lg-0"> -->
          <!-- Title -->
          <h1 class="title-landing">Awesome App For Saving <span class="span-landing"> Time.</span></h1>
          <!-- Paragraph -->
          <p class="paragraph p-custom-1">We bring you a mobile app for banking problems that oftenly wasting much of your times.</p>
          <!-- Button -->
          <button class="btn-try btn-try-custom">Try It Free</button>
          <!-- Paragraph -->
          <p class="paragraph p-custom-2">Available on</p>
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
@import '../../../../assets/css/landing/body/btn-try.css';
@import '../../../../assets/css/landing/body/paragraph.css';
@import '../../../../assets/css/landing/body/title.css';

.container-fluid {
  padding: 126px 0 120px 0;
  background: #FAFCFF;
}

.p-custom-1 {
  margin-bottom: 50px;
}

.p-custom-2 {
  margin-bottom: 20px;
}

.btn-try-custom {
  color: #ffffff;
  background-color: #6379F4;
  margin: 0 0 50px 0;
}

.img-1 {
  margin-right: 25px;
}

</style>
