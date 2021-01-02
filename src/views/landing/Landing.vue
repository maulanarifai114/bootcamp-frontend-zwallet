<template>
  <div>
    <Navbar/>
    <Body/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../../components/landing/module/Navbar'
import Body from '../../components/landing/module/Body'
import Footer from '../../components/landing/module/Footer'

export default {
  name: 'Landing',
  components: {
    Navbar,
    Body,
    Footer
  }
}
</script>

<style lang="scss" scoped>

body {
  background: #FAFCFF;
}

</style>
