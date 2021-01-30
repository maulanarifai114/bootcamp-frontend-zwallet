<template>
  <div class="container-fluid">
    <Navbar/>
    <div class="container">
      <div class="w-100 wrap-main">
        <h1>Main</h1>
        <router-view/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/main/module/Navbar'
import Footer from '@/components/main/module/Footer'
export default {
  name: 'Main',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss" scoped>

.container-fluid {
  padding: 0;
  background: #FAFCFF;
}

.container {
  padding-top: 180px;
  min-height: 100vh;
}

.wrap-main {
  min-height: 678px;
}

</style>
