<template>
  <div @click="$emit('click')" class="box-detail d-flex justify-content-between align-items-center">
    <div>
      <h4 class="title-box-detail">{{title}}</h4>
      <h2 class="value-detail" v-if="type === 'value'">{{value}}</h2>
      <h2 class="value-detail" v-else-if="type === 'amount'">Rp{{amountbalance}}</h2>
    </div>
    <img class="icon" v-if="icon === 'icon'" src="../../../../assets/img/home/arrow-active.svg" height="35" alt="icon">
  </div>
</template>

<script>
export default {
  name: 'BoxDetail',
  props: ['title', 'value', 'amountbalance', 'type', 'icon']
}
</script>

<style lang="scss" scoped>

.icon {
  transform: rotate(90deg);
}

.box-detail {
  padding: 15px;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin: 0 0 20px 0
}

.box-detail:hover {
  cursor: pointer;
  opacity: .8;
}

.title-box-detail {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #7A7886;
  margin: 0 0 10px 0
}

.value-detail {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
  color: #514F5B;
}

@media (max-width: 375px) {
  .value-detail {
    font-size: 18px;
  }
}

</style>
