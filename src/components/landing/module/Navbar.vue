<template>
  <div>
    <nav class="navbar navbar-expand-md fixed-top">
      <div class="container">
        <a class="navbar-brand" :href="local">Zwallet</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <div class="container-img">
            <img src="../../../assets/img/landing/hamburger.svg" alt="menu" class="hamburger">
          </div>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item ml-auto my-3 my-md-0 mr-md-4">
              <BtnOutline title="Login" @click="goLogin"/>
            </li>
            <li class="nav-item ml-auto">
              <BtnSolid title="Sign Up" @click="goSignup"/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import BtnOutline from '../base/button/BtnOutline'
import BtnSolid from '../base/button/BtnSolid'
import navbar from '@/mixins/landing/navbar'

export default {
  name: 'NavbarLanding',
  components: {
    BtnOutline,
    BtnSolid
  },
  mixins: [navbar]
}
</script>

<style lang="scss" scoped>

.container {
  padding: 30px 0;
}

.navbar {
  background: #fafcff00;
}

.navbar-brand {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 29px;
  line-height: 40px;
  color: #6379F4;
  cursor: pointer;
}

.navbar-brand:hover {
  color: #6379F4;
  opacity: .8;
}

.navbar-toggler {
  border: 2px solid rgba(99, 121, 244, 0.3);
  padding: 5px;
  border-radius: 10px;
  transition: .3s;
}

.navbar-toggler:focus {
  border: 2px solid #6379F4;
}

.container-img {
  width: 30px;
  height: 30px;
  .hamburger {
    width: 30px;
    height: 30px;
  }
}

</style>
