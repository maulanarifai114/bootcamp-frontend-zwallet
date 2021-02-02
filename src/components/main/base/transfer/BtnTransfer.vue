<template>
  <button class="btn-transfer" @click="$emit('click')">
    {{label}}
  </button>
</template>

<script>
export default {
  name: 'BtnTransfer',
  props: ['label']
}
</script>

<style lang="scss" scoped>

.btn-transfer {
  padding: 16px 40px;
  background: #6379F4;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 12px;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #FFFFFF;
}

.btn-transfer:hover {
  opacity: .8;
}

</style>
