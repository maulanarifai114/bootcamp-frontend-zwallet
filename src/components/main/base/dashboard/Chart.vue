<template>
  <div class="chart">
    <h1>Chart</h1>
  </div>
</template>

<script>
export default {
  name: 'Chart'
}
</script>

<style lang="scss" scoped>

.chart {
  width: 55.5%;
  height: 100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  padding: 30px
}

@media (max-width: 991px) {
  .chart {
    width: 100%;
    margin: 0 0 20px 0
  }
}

</style>
