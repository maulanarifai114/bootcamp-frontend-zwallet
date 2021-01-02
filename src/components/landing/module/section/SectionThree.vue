<template>
  <div class="container-fluid">

    <section class="container">

      <!-- Title -->
      <div class="row">
        <div class="col-12 px-5 px-lg-0 d-flex align-items-center flex-column">
          <h1 class="text-center title-landing"><span class="span-landing">About </span>the Application.</h1>
          <p class="text-center px-sm-5 px-md-0 paragraph-landing p-custom-3">We have some great features from the application and it’s totally free to use by all users around the world.</p>
        </div>
      </div>

      <!-- Feature -->
      <div class="row">

        <!-- Feature One -->
        <div class="col-lg-4 col-md-6 order-md-1 order-lg-1 px-4 px-lg-0">
          <div class="box box-inactive">
            <img src="../../../../assets/img/landing/phone.svg" alt="phone">
            <h3 class="title-box">24/7 Support</h3>
            <p class="paragraph-landing text-center p-custom-4">We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
          </div>
        </div>

        <!-- Feature Two -->
        <div class="col-lg-4 col-md-6 order-md-4 order-lg-2 px-4 px-lg-0">
          <div class="box box-active">
            <img src="../../../../assets/img/landing/lock.svg" alt="lock">
            <h3 class="title-box">Data Privacy</h3>
            <p class="paragraph-landing text-center p-custom-4">We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
          </div>
        </div>

        <!-- Empty Block -->
        <div class="col-md-3 d-md-block d-lg-none order-md-3"></div>

        <!-- Feature Three -->
        <div class="col-lg-4 col-md-6 order-md-2 order-lg-3 px-4 px-lg-0">
          <div class="box box-inactive">
            <img src="../../../../assets/img/landing/download.svg" alt="download">
            <h3 class="title-box">Easy Download</h3>
            <p class="paragraph-landing text-center p-custom-4">Zwallet is 100% totally free to use it’s now available on Google Play Store and App Store.</p>
          </div>
        </div>

        <!-- Empty Block -->
        <div class="col-md-3 d-md-block d-lg-none order-md-5"></div>

      </div>

    </section>

  </div>
</template>

<script>
export default {
  name: 'SectionThree'
}
</script>

<style lang="scss" scoped>
@import '../../../../assets/css/landing/body/title.css';
@import '../../../../assets/css/landing/body/paragraph.css';
@import '../../../../assets/css/landing/body/sectionthree.css';

.container-fluid {
  padding: 120px 0;
  background: #FAFCFF;
}

</style>
