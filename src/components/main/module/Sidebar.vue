<template>
  <aside class="left-side flex-grow-1 d-lg-flex flex-column d-none">
    <!-- Dashboard -->
    <div @click="goDashboard" class="left-tab">
      <div :class="dashboard"></div>
      <img class="icon" :src="dashboardIcon" alt="icon">
      <h3 :class="dashboardKey">Dashboard</h3>
    </div>
    <div class="mb-48"></div>
    <!-- Transfer -->
    <div @click="goSearch" class="left-tab">
      <div :class="transfer"></div>
      <img class="icon" :src="transferIcon" alt="icon">
      <h3 :class="transferKey">Transfer</h3>
    </div>
    <div class="mb-48"></div>
    <!-- Top Up -->
    <div @click="goTopup" class="left-tab">
      <div :class="topup"></div>
      <img class="icon" :src="topupIcon" alt="icon">
      <h3 :class="topupKey">Top Up</h3>
    </div>
    <div class="mb-48"></div>
    <!-- Profile -->
    <div @click="goProfile" class="left-tab">
      <div :class="profile"></div>
      <img class="icon" :src="profileIcon" alt="icon">
      <h3 :class="profileKey">Profile</h3>
    </div>
    <div class="mb-48"></div>
    <!-- Logout -->
    <div @click="logout" class="left-tab">
      <div class="inactive-tab"></div>
      <img class="icon" src="../../../assets/img/home/logout.svg" alt="icon">
      <h3 class="inactive-tab-key">Log out</h3>
    </div>
    <div class="mb-48"></div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
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
    dashboardKey () {
      return this.$route.path === '/main/dashboard' || this.$route.path === '/main/history' ? 'active-tab-key' : 'inactive-tab-key'
    },
    dashboardIcon () {
      return this.$route.path === '/main/dashboard' || this.$route.path === '/main/history' ? require('../../../assets/img/home/grid-active.svg') : require('../../../assets/img/home/grid-inactive.svg')
    },
    // Transfer
    transfer () {
      return this.$route.path === '/main/transfer' || this.$route.path === '/main/success' || this.$route.path === '/main/failed' || this.$route.path === '/main/search' || this.$route.path === '/main/confirmation' ? 'active-tab' : 'inactive-tab'
    },
    transferKey () {
      return this.$route.path === '/main/transfer' || this.$route.path === '/main/success' || this.$route.path === '/main/failed' || this.$route.path === '/main/search' || this.$route.path === '/main/confirmation' ? 'active-tab-key' : 'inactive-tab-key'
    },
    transferIcon () {
      return this.$route.path === '/main/transfer' || this.$route.path === '/main/success' || this.$route.path === '/main/failed' || this.$route.path === '/main/search' || this.$route.path === '/main/confirmation' ? require('../../../assets/img/home/arrow-active.svg') : require('../../../assets/img/home/arrow-inactive.svg')
    },
    // Top Up
    topup () {
      return this.$route.path === '/main/topup' ? 'active-tab' : 'inactive-tab'
    },
    topupKey () {
      return this.$route.path === '/main/topup' ? 'active-tab-key' : 'inactive-tab-key'
    },
    topupIcon () {
      return this.$route.path === '/main/topup' ? require('../../../assets/img/home/plus-active.svg') : require('../../../assets/img/home/plus-inactive.svg')
    },
    // Profile
    profile () {
      return this.$route.path === '/main/profile' || this.$route.path === '/main/personalinfo' || this.$route.path === '/main/managephone' || this.$route.path === '/main/changepin' || this.$route.path === '/main/changepass' || this.$route.path === '/main/addphone' ? 'active-tab' : 'inactive-tab'
    },
    profileKey () {
      return this.$route.path === '/main/profile' || this.$route.path === '/main/personalinfo' || this.$route.path === '/main/managephone' || this.$route.path === '/main/changepin' || this.$route.path === '/main/changepass' || this.$route.path === '/main/addphone' ? 'active-tab-key' : 'inactive-tab-key'
    },
    profileIcon () {
      return this.$route.path === '/main/profile' || this.$route.path === '/main/personalinfo' || this.$route.path === '/main/managephone' || this.$route.path === '/main/changepin' || this.$route.path === '/main/changepass' || this.$route.path === '/main/addphone' ? require('../../../assets/img/home/user-active.svg') : require('../../../assets/img/home/user-inactive.svg')
    }
  }
}
</script>

<style lang="scss" scoped>

.left-side {
  margin-right: 20px;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  padding: 45px 0 0 0;
  .mb-48 {
    height: 48px;
  }
}

.left-tab {
  display: flex;
  align-items: center;
  cursor: pointer;
  .active-tab {
    width: 5px;
    height: 35px;
    background: #6379F4;
    margin: 0 30px 0 0;
  }
  .inactive-tab {
    width: 5px;
    height: 35px;
    background: #6379f400;
    margin: 0 30px 0 0;
  }
  .icon {
    margin: 0 20px 0 0;
  }
  .active-tab-key {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #6379F4;
  }
  .inactive-tab-key {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(58, 61, 66, 0.8);
  }
}

.left-tab:hover {
  opacity: .8;
}

@media (max-width: 1199px) {
  .left-side {
    width: 270px;
  }
}

</style>
