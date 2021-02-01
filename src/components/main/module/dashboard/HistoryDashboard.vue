<template>
  <div class="d-flex flex-column flex-lg-row flex-fill">
    <Chart/>
    <div class="w-20 d-none d-lg-block"></div>
    <HistoryModule/>
  </div>
</template>

<script>
import Chart from '../../base/dashboard/Chart'
import HistoryModule from '../../base/dashboard/HistoryModule'

export default {
  name: 'HistoryDashboard',
  components: {
    Chart,
    HistoryModule
  }
}
</script>

<style lang="scss" scoped>

.w-20 {
  width: 20px;
}

</style>
