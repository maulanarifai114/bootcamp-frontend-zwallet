<template>
  <div class="container-fluid">

    <section class="container con-5 d-flex flex-column justify-content-center align-items-center">

      <!-- Title -->
      <h1 class="text-center title-landing">What Users are <span class="span-landing"> Saying.</span> </h1>
      <p class="text-center paragraph-landing p-custom-5">We have some great features from the application and it’s totally free to use by all users around the world.</p>

      <!-- Big Box -->
      <div class="big-box d-flex flex-column justify-content-center w-100 align-items-center">
        <img src="../../../../assets/img/landing/profile.png" alt="profile" width="120px" height="120px">
        <h4 class="text-center">Alex Hansinburg</h4>
        <h6>Designer</h6>
        <p>
          “This is the most outstanding app that I’ve ever try in my live, this app is such an amazing masterpiece
          and it’s suitable for you who is bussy with their bussiness and must transfer money to another person
          aut there. Just try this app and see the power!”
        </p>
        <div class="container-arrow a-left d-none d-xl-flex">
          <img src="../../../../assets/img/landing/arrow-left.svg" alt="left">
        </div>
        <div class="container-arrow a-right d-none d-xl-flex">
          <img src="../../../../assets/img/landing/arrow-right.svg" alt="right">
        </div>
      </div>

    </section>

  </div>
</template>

<script>
export default {
  name: 'SectionFive'
}
</script>

<style lang="scss" scoped>
@import '../../../../assets/css/landing/body/title.css';
@import '../../../../assets/css/landing/body/paragraph.css';
@import '../../../../assets/css/landing/body/sectionfive.css';

.container-fluid {
  background-color: #FAFCFF;
  padding: 120px 0;
}

</style>
