<template>
  <div class="d-flex flex-column h-100">
    <MainDashboard/>
    <HistoryDashboard/>
  </div>
</template>

<script>
import MainDashboard from '../../../components/main/module/dashboard/MainDashboard'
import HistoryDashboard from '../../../components/main/module/dashboard/HistoryDashboard'

export default {
  title: 'Zwallet',
  name: 'Dashboard',
  components: {
    MainDashboard,
    HistoryDashboard
  }
}
</script>

<style lang="scss" scoped>

</style>
