<template>
  <div class="history">
    <h1>History Module</h1>
  </div>
</template>

<script>
export default {
  name: 'HistoryModule',
  directives: {
    box: {
      inserted (el) {
        console.log(el)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.history {
  width: 44.5%;
  height: 100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  padding: 30px
}

@media (max-width: 991px) {
  .history {
    width: 100%;
  }
}

</style>
