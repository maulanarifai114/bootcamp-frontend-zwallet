<template>
  <section class="container-fluid">
    <div class="row">
      <!-- Left Side -->
      <aside class="left-auth d-none d-md-flex flex-column col-xl-7 col-lg-6 col-md-4 ">
        <div class="title-auth">Zwallet</div>

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

.left-auth {
  min-height: 100vh;
  background-image: url('../../../assets/img/auth/mask-group.svg');
  background-size: cover;
  overflow: hidden;
}

.title-auth {
  margin: 50px 0 40px 150px;
  font-family: Nunito Sans;
  font-size: 29px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
  color: #fff;
}

.wrap-phone {
  margin: 0 0 12px 0;
}

.phone-1 {
  margin: 0;
  width: fit-content;
  height: fit-content;
  left: 100px;
}

.phone-2 {
  margin: 0;
  width: fit-content;
  height: fit-content;
  left: 264px;
}

.left-paragraph-auth {
  margin: 12px 0 70px 150px;
  width: 60%;
}

.left-p-1 {
  font-family: Nunito Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
  margin: 0 0 30px 0;
}

.left-p-2 {
  font-family: Nunito Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
}

.right-auth {
  padding: 120px 50px 0 50px;
}

@media (max-width: 1199px) {

  .title-auth {
    margin: 50px 0 40px 50px;
  }

  .phone-1 {
    left: 0px;
  }

  .phone-2 {
    left: 120px;
  }

  .left-paragraph-auth {
    margin: 12px 0 70px 50px;
  }

}

</style>
