<template>
  <div>
    <button @click="$emit('click')" class="btn-landing btn-custom">{{title}}</button>
  </div>
</template>

<script>
export default {
  name: 'BtnOutline',
  props: ['title']
}
</script>

<style lang="scss" scoped>
@import '../../../../assets/css/landing/navbar/btn-landing.css';

.btn-custom {
  background: #FFFFFF;
  border: 2px solid #6379F4;
  color: #6379F4;
}
</style>
