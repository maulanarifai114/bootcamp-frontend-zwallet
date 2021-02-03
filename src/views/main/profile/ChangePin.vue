<template>
  <div class="changepin">
    <!-- Title -->
    <h3 class="title-pin">Change Pin</h3>
    <p class="paragraph-pin">
      Enter your current 6 digits Zwallet PIN below to continue to the next steps.
    </p>
  </div>
</template>

<script>
export default {
  title: 'Change Pin',
  name: 'ChangePin'
}
</script>

<style lang="scss" scoped>

.changepin {
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  padding: 30px
}

.title-pin {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #3A3D42;
  margin: 0 0 25px 0
}

.paragraph-pin {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: #7A7886;
  width: 342px;
  margin: 0 0 100px 0
}

@media (max-width: 575px) {
  .paragraph-pin {
    width: 100%;
  }
}

@media (max-width: 375px) {
  .changepin {
    padding: 30px 15px
  }
}

</style>
