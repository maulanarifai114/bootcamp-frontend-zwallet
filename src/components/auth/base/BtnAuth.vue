<template>
  <button type="submit" class="btn-auth w-100 d-flex justify-content-center align-items-center" @click="$emit('click')">
    <Loading1 :isLoading="isLoading"/>
    <div v-if="isLoading === 0" :isLoading="isLoading">
      {{title}}
    </div>
  </button>
</template>

<script>
import Loading1 from '../../../components/loading/Loading1'
export default {
  name: 'BtnAuth',
  props: ['title', 'isLoading'],
  components: {
    Loading1
  }
}
</script>

<style lang="scss" scoped>

.btn-auth {
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 12px;
  // padding: 16px 0;
  height: 60px;
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

.btn-auth:focus {
  opacity: .8;
}

</style>
