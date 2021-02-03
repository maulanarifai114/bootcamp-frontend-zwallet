<template>
  <nav class="w-100 position-fixed">
    <div class="container d-flex justify-content-between align-items-center h-100">
      <h1 @click="zwallet">Zwallet</h1>
      <div @click="goProfile" class="d-flex justify-content-center align-items-center wrap-profile">
        <div>
          <div class="wrap-img">
            <img :src="photo === '' ? image : photo" alt="photo">
          </div>
        </div>
        <div class="wrap-contact d-flex flex-column align-items-start">
          <h4>{{`${firstName} ${lastName}`}}</h4>
          <h6>{{phone}}</h6>
        </div>
        <!-- <img class="bell" src="../../../assets/img/home/bell.svg" alt="bell"> -->
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  data () {
    return {
      image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    }
  },
  methods: {
    zwallet () {
      this.$router.push('/main/dashboard').catch(() => {})
    },
    goProfile () {
      this.$router.push('/main/profile').catch(() => {})
    }
  },
  computed: {
    ...mapGetters({
      photo: 'profile/getPhoto',
      firstName: 'profile/getFirstName',
      lastName: 'profile/getLastName',
      phone: 'profile/getPhone'
    })
  }
}
</script>

<style lang="scss" scoped>

nav {
  height: 140px;
  border-radius: 0 0 25px 25px;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  z-index: 1000;
}

h1 {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 29px;
  line-height: 40px;
  color: #6379F4;
  cursor: pointer;
}

h1:hover {
  opacity: .8;
}

h4 {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 31px;
  text-align: center;
  color: #3A3D42;
}

h6 {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 24px;
  color: rgba(58, 60, 65, 0.9);
}

.wrap-profile {
  cursor: pointer;
}

.wrap-profile:hover {
  opacity: .8;
}

.wrap-contact {
  margin: 0 0 0 20px
}

.wrap-img {
  height: 52px;
  width: 52px;
  overflow: hidden;
  border-radius: 10px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.bell {
  margin: 0 0 0 30px
}

@media (max-width: 575px) {
  nav {
    height: 100px;
  }
  .wrap-contact {
    display: none!important;
  }
}

</style>
