<template>
  <button class="btn-transfer d-flex justify-content-center align-items-center" @click="$emit('click')">
    <Loading2 :isLoading="isLoading"/>
    <div v-if="isLoading === 0">
      {{label}}
    </div>
  </button>
</template>

<script>
import Loading2 from '@/components/loading/Loading2'
export default {
  name: 'BtnTransfer',
  props: ['label', 'isLoading'],
  components: {
    Loading2
  }
}
</script>

<style lang="scss" scoped>

.btn-transfer {
  width: 155px;
  height: 60px;
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
