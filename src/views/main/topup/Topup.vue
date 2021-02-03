<template>
  <div class="topup">
    <!-- Title -->
    <h3 class="title-topup">How To Top Up</h3>
    <!-- Start Loop -->
    <div class="box-topup d-flex align-items-center" v-for="(item, index) in loop" :key="index" >
      <span>{{index + 1}}</span>
      <h4>{{item.title}}</h4>
    </div>
    <!-- End -->
  </div>
</template>

<script>
export default {
  title: 'Top Up',
  name: 'Topup',
  data () {
    return {
      loop: [
        {
          title: 'Go to the nearest ATM or you can use E-Banking'
        },
        {
          title: 'Type your security number on the ATM or E-Banking'
        },
        {
          title: 'Select “Transfer” in the menu'
        },
        {
          title: 'Type the virtual account number that we provide you at the top'
        },
        {
          title: 'Type the amount of the money you want to top up'
        },
        {
          title: 'Read the summary details'
        },
        {
          title: 'Press transfer / top up'
        },
        {
          title: 'You can see your money in Zwallet within 3 hours'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.topup {
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  padding: 30px
}

.title-topup {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #3A3D42;
  margin: 0 0 25px 0
}

.box-topup {
  margin: 0 0 20px 0;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 20px;
  span {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #6379F4;
    margin: 0 25px 0 0
  }
  h4 {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
    color: #7A7886;
  }
}

.box-topup:last-child {
  margin: 0
}

@media (max-width: 375px) {
  .topup {
    padding: 30px 15px
  }
}

</style>
