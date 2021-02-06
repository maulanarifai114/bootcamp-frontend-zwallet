<template>
  <div class="container-fluid">
    <Navbar/>
    <BottomBar/>
    <div class="container">
      <div class="w-100 wrap-main d-flex">
        <Sidebar/>
        <!-- Right Side -->
        <aside class="right-side">
          <router-view/>
        </aside>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from '@/components/main/module/Navbar'
import Footer from '@/components/main/module/Footer'
import Sidebar from '@/components/main/module/Sidebar'
import BottomBar from '@/components/main/module/BottomBar'

export default {
  name: 'Main',
  components: {
    Navbar,
    Footer,
    Sidebar,
    BottomBar
  },
  methods: {
    ...mapActions({ getProfile: 'profile/getProfile' }),
    getProfileZ () {
      if (this.$store.getters['profile/getId'] === '') {
        this.getProfile()
      }
    }
  },
  mounted () {
    this.getProfileZ()
  }
}
</script>

<style lang="scss" scoped>

.right-side {
  width: 850px;
}

.container-fluid {
  padding: 0;
  background: #FAFCFF;
}

.container {
  padding: 180px 0 0 0;
  min-height: 100vh;
  margin-bottom: 35px;
}

.wrap-main {
  min-height: 678px;
}

@media (max-width: 575px) {
  .container {
    padding: 140px 0 0 0
  }

  .right-side {
    padding: 0 2.5%;
  }
}

</style>
