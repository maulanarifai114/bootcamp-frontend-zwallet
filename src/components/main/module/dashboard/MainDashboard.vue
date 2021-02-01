<template>
  <div class="dashboard w-100 d-flex justify-content-between">
    <div>
      <h5 class="balance">Balance</h5>
      <h3 class="current-balance">Rp{{balance.toLocaleString('id-ID')}}</h3>
      <h6 class="phone">{{phone}}</h6>
    </div>
    <div class="d-flex flex-column button-dashboard">
      <button @click="goTransfer" class="go-page d-flex align-items-center justify-content-between mb-3">
        <img src="@/assets/img/home/arrow-up.svg" alt="icon">
        <h4 class="button-title">Transfer</h4>
      </button>
      <button @click="goTopup" class="go-page d-flex align-items-center justify-content-between">
        <img src="@/assets/img/home/plus.svg" alt="icon">
        <h4 class="button-title">Top Up</h4>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MainDashboard',
  methods: {
    goTransfer () {
      this.$router.push('/main/search')
    },
    goTopup () {
      this.$router.push('/main/topup')
    }
  },
  computed: {
    ...mapGetters({
      balance: 'profile/getBalance',
      phone: 'profile/getPhone'
    })
  }
}
</script>

<style lang="scss" scoped>

.dashboard {
  padding: 30px;
  background: linear-gradient(180deg, #4927F2 0%, #444AB1 100%);
  border-radius: 20px;
  margin: 0 0 20px 0
}

.go-page {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 16px 28px;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #FFFFFF;
}

.go-page:hover {
  opacity: .8;
}

img {
  margin: 0 10px 0 0
}

.balance {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 31px;
  color: #E0E0E0;
  margin: 0 0 10px 0
}

.current-balance {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 55px;
  color: #FFFFFF;
  margin: 0 0 15px 0
}

.phone {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #DFDCDC;
}

@media (max-width: 550px) {
  .button-title {
    display: none;
  }

  .go-page {
    padding: 16px
  }

  img {
    margin: 0
  }
}

@media (max-width: 440px) {
  .button-dashboard {
    display: none!important;
  }
}

@media (max-width: 360px) {
  .current-balance {
    font-size: 32px;
  }
}

</style>
