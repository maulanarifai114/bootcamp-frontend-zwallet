<template>
  <div class="position-fixed bottom-bar d-lg-none d-flex justify-content-between align-items-center">
    <!-- Dashboard -->
    <div @click="goDashboard" class="flex-column flex-grow-1 h-100 d-flex justify-content-between align-items-center">
      <div class="border-inactive"></div>
      <img :src="dashboardIcon" alt="icon">
      <div :class="dashboard"></div>
    </div>
    <!-- Transfer -->
    <div @click="goSearch" class="flex-column flex-grow-1 h-100 d-flex justify-content-between align-items-center">
      <div class="border-inactive"></div>
      <img :src="transferIcon" alt="icon">
      <div :class="transfer"></div>
    </div>
    <!-- Top Up -->
    <div @click="goTopup" class="flex-column flex-grow-1 h-100 d-flex justify-content-between align-items-center">
      <div class="border-inactive"></div>
      <img :src="topupIcon" alt="icon">
      <div :class="topup"></div>
    </div>
    <!-- Profile -->
    <div @click="goProfile" class="flex-column flex-grow-1 h-100 d-flex justify-content-between align-items-center">
      <div class="border-inactive"></div>
      <img :src="profileIcon" alt="icon">
      <div :class="profile"></div>
    </div>
    <!-- Logout -->
    <div @click="logout" class=" flex-column flex-grow-1 h-100 d-flex justify-content-between align-items-center">
      <div class="border-inactive"></div>
      <img src="../../../assets/img/home/logout.svg" alt="icon">
      <div class="border-inactive"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomBar',
  methods: {
    goDashboard () {
      this.$router.push('/main/dashboard')
    },
    goSearch () {
      this.$router.push('/main/search')
    },
    goTopup () {
      this.$router.push('/main/topup')
    },
    goProfile () {
      this.$router.push('/main/profile')
    },
    logout () {
      localStorage.removeItem('token')
      this.$router.push('/auth/login')
    }
  },
  computed: {
    // Dashboard
    dashboard () {
      return this.$route.path === '/main/dashboard' || this.$route.path === '/main/history' ? 'active-tab' : 'inactive-tab'
    },
    dashboardIcon () {
      return this.$route.path === '/main/dashboard' || this.$route.path === '/main/history' ? require('../../../assets/img/home/grid-active.svg') : require('../../../assets/img/home/grid-inactive.svg')
    },
    // Transfer
    transfer () {
      return this.$route.path === '/main/transfer' || this.$route.path === '/main/success' || this.$route.path === '/main/failed' || this.$route.path === '/main/search' || this.$route.path === '/main/confirmation' ? 'active-tab' : 'inactive-tab'
    },
    transferIcon () {
      return this.$route.path === '/main/transfer' || this.$route.path === '/main/success' || this.$route.path === '/main/failed' || this.$route.path === '/main/search' || this.$route.path === '/main/confirmation' ? require('../../../assets/img/home/arrow-active.svg') : require('../../../assets/img/home/arrow-inactive.svg')
    },
    // Top Up
    topup () {
      return this.$route.path === '/main/topup' ? 'active-tab' : 'inactive-tab'
    },
    topupIcon () {
      return this.$route.path === '/main/topup' ? require('../../../assets/img/home/plus-active.svg') : require('../../../assets/img/home/plus-inactive.svg')
    },
    // Profile
    profile () {
      return this.$route.path === '/main/profile' || this.$route.path === '/main/personalinfo' || this.$route.path === '/main/managephone' || this.$route.path === '/main/changepin' || this.$route.path === '/main/changepass' || this.$route.path === '/main/addphone' ? 'active-tab' : 'inactive-tab'
    },
    profileIcon () {
      return this.$route.path === '/main/profile' || this.$route.path === '/main/personalinfo' || this.$route.path === '/main/managephone' || this.$route.path === '/main/changepin' || this.$route.path === '/main/changepass' || this.$route.path === '/main/addphone' ? require('../../../assets/img/home/user-active.svg') : require('../../../assets/img/home/user-inactive.svg')
    }
  }
}
</script>

<style lang="scss" scoped>

.bottom-bar {
  bottom: 5px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 56px;
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 28px;
  padding: 0 33px;
}

.active-tab, .inactive-tab {
  height: 3px;
  width: 50%;
}

.active-tab {
  background: #6379F4;
}

</style>
