<template>
  <div>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    <SectionFour/>
  </div>
</template>

<script>
import SectionOne from '../../../components/landing/module/section/SectionOne'
import SectionTwo from '../../../components/landing/module/section/SectionTwo'
import SectionThree from '../../../components/landing/module/section/SectionThree'
import SectionFour from '../../../components/landing/module/section/SectionFour'

export default {
  name: 'Body',
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour
  }
}
</script>

<style lang="scss" scoped>
</style>
