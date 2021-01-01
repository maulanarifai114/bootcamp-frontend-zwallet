<template>
  <div>
    <Navbar/>
    <Body/>
  </div>
</template>

<script>
import Navbar from '../../components/landing/module/Navbar'
import Body from '../../components/landing/module/Body'

export default {
  name: 'Landing',
  components: {
    Navbar,
    Body
  }
}
</script>

<style lang="scss" scoped>

body {
  background: #FAFCFF;
}

</style>
