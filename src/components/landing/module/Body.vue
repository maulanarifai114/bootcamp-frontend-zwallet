<template>
  <div>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
  </div>
</template>

<script>
import SectionOne from '../../../components/landing/module/section/SectionOne'
import SectionTwo from '../../../components/landing/module/section/SectionTwo'
import SectionThree from '../../../components/landing/module/section/SectionThree'

export default {
  name: 'Body',
  components: {
    SectionOne,
    SectionTwo,
    SectionThree
  }
}
</script>

<style lang="scss" scoped>
</style>
