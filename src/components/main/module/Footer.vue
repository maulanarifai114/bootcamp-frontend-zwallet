<template>
  <footer class="w-100 d-flex">
    <div class="container p-3 d-flex flex-column flex-sm-row justify-content-end justify-content-sm-between align-items-sm-center flex-grow-1">
      <h1>2020 Zwallet. All right reserved.</h1>
      <div class="d-flex flex-column flex-md-row">
        <h2>+62 5637 8882 9901</h2>
        <div class="w-40 d-none d-md-block"></div>
        <h2>contact@zwallet.com</h2>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>

footer {
  min-height: 68px;
  background: #6379F4;
  // position: relative;
}

h1 {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: rgba(239, 239, 239, 0.9);
}

h2 {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  color: #EFEFEF;
}

.w-40 {
  width: 40px;
}

@media (max-width: 767px) {
  h1, h2 {
    font-size: 14px;
  }
}

</style>
