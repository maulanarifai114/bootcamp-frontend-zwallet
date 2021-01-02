<template>
  <section class="container-fluid">

    <div class="container">

      <div class="row">

        <!-- Left Side (Phone) -->
        <div class=" col-xl-5 col-lg-6 col-md-12 d-none d-lg-block">
          <img src="../../../../assets/img/landing/phone-section-4.png" alt="">
        </div>

        <!-- Right Side (Features) -->
        <div class=" col-xl-7 col-lg-6 col-md-12 d-flex justify-content-center flex-column">
          <h1 class="text-center text-lg-left title-landing">
            All The <span class="span-landing"> Great </span> <br class="d-none d-xl-block">
            Zwallet Features.
          </h1>
          <div class="box-features">
            <h3 class="title-box-features"><span>1.</span> Small Fee</h3>
            <p class="paragraph-landing">We only charge 5% of every success transaction done in Zwallet app.</p>
          </div>
          <div class="box-features">
            <h3 class="title-box-features"><span>2.</span> Data Secured</h3>
            <p class="paragraph-landing">All your data is secured properly in our system and it’s encrypted.</p>
          </div>
          <div class="box-features">
            <h3 class="title-box-features"><span>3.</span> User Friendly</h3>
            <p class="paragraph-landing">Zwallet come up with modern and sleek design and not complicated.</p>
          </div>
        </div>

      </div>

    </div>

  </section>
</template>

<script>
export default {
  name: 'SectionFour'
}
</script>

<style lang="scss" scoped>
@import '../../../../assets/css/landing/body/title.css';
@import '../../../../assets/css/landing/body/paragraph.css';
@import '../../../../assets/css/landing/body/sectionfour.css';

.container-fluid{
  background-color: rgba(71, 58, 209, 0.06);
  padding: 80px 0;
}

</style>
