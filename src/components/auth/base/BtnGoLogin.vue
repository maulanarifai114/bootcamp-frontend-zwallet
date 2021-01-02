<template>
  <button type="button" class="btn-auth w-100" @click="$emit('click')">{{title}}</button>
</template>

<script>
export default {
  name: 'BtnGoLogin',
  props: ['title']
}
</script>

<style lang="scss" scoped>

.btn-auth {
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 12px;
  padding: 16px 0;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
}

.btn-auth:hover {
  opacity: .8;
}

</style>
