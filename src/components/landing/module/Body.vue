<template>
  <div>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    <SectionFour/>
    <SectionFive/>
  </div>
</template>

<script>
import SectionOne from '@/components/landing/module/section/SectionOne'
import SectionTwo from '@/components/landing/module/section/SectionTwo'
import SectionThree from '@/components/landing/module/section/SectionThree'
import SectionFour from '@/components/landing/module/section/SectionFour'
import SectionFive from '@/components/landing/module/section/SectionFive'

export default {
  name: 'Body',
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFive
  }
}
</script>

<style lang="scss" scoped>
</style>
