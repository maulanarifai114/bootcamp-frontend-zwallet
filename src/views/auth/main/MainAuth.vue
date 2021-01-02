<template>
  <section class="container-fluid">
    <div class="row">
      <!-- Left Side -->
      <aside class="left-auth d-none d-md-flex flex-column col-xl-7 col-lg-6 col-md-4 ">
        <h1 class="title-left-auth">Zwallet</h1>

        <div class="wrap-phone position-relative d-flex w-100">
          <div class="phone-1 position-relative">
            <img src="../../../assets/img/auth/phone1.png" alt="phone">
          </div>
          <div class="phone-2 position-absolute">
            <img src="../../../assets/img/auth/phone2.png" alt="phone">
          </div>
        </div>

        <div class="left-paragraph-auth">
          <div class="left-p-1">
            App that Covering Banking Needs.
          </div>
          <div class="left-p-2">
            Zwallet is an application that focussing in banking needs for all users
            in the world. Always updated and always following world trends.
            5000+ users registered in Zwallet everyday with worldwide
            users coverage.
          </div>
        </div>
      </aside>

      <!-- Right Side -->
      <main class="right-auth col-xl-5 col-lg-6 col-md-8 col-sm-12">
        <router-view/>
      </main>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainAuth'
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/auth/mainauth.css';

</style>
