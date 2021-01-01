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
  background:#6379F4;
  color: #ffffff;
}
</style>
