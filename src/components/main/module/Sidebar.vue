<template>
  <aside class="left-side flex-grow-1 d-lg-flex flex-column d-none">
    <!-- Dashboard -->
    <div ref="dash" @click="goDashboard" v-activetab="{path: this.$route.path, tab: 'dashboard', cb: cbDashboard}" class="left-tab">
      <div class="inactive-tab"></div>
      <img class="icon" src="../../../assets/img/home/grid-inactive.svg" alt="icon">
      <h3 class="inactive-tab-key">Dashboard</h3>
    </div>
    <div class="mb-48"></div>
    <!-- Transfer -->
    <div @click="goSearch" v-activetab="{path: this.$route.path, tab: 'transfer', cb: cbTransfer}" class="left-tab">
      <div class="inactive-tab"></div>
      <img class="icon" src="../../../assets/img/home/arrow-inactive.svg" alt="icon">
      <h3 class="inactive-tab-key">Transfer</h3>
    </div>
    <div class="mb-48"></div>
    <!-- Top Up -->
    <div @click="goTopup" v-activetab="{path: this.$route.path, tab: 'topup', cb: cbTopup}" class="left-tab">
      <div class="inactive-tab"></div>
      <img class="icon" src="../../../assets/img/home/plus-inactive.svg" alt="icon">
      <h3 class="inactive-tab-key">Top Up</h3>
    </div>
    <div class="mb-48"></div>
    <!-- Profile -->
    <div @click="goProfile" v-activetab="{path: this.$route.path, tab: 'profile', cb: cbProfile}" class="left-tab">
      <div class="inactive-tab"></div>
      <img class="icon" src="../../../assets/img/home/user-inactive.svg" alt="icon">
      <h3 class="inactive-tab-key">Profile</h3>
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
import dashboard from '../../../mixins/main/dashboard/sidebar/dashboard'
import transfer from '../../../mixins/main/dashboard/sidebar/transfer'
import topup from '../../../mixins/main/dashboard/sidebar/topup'
import profile from '../../../mixins/main/dashboard/sidebar/profile'
import Swal from 'sweetalert2'

export default {
  name: 'Sidebar',
  mixins: [dashboard, transfer, topup, profile],
  directives: {
    activetab: {
      update (el, binding) {
        binding.value.cb(el, binding)
      },
      inserted (el, binding) {
        binding.value.cb(el, binding)
      }
    }
  },
  methods: {
    goDashboard () {
      this.$router.push('/main/dashboard').catch(() => {})
    },
    goSearch () {
      this.$router.push('/main/search').catch(() => {})
    },
    goTopup () {
      this.$router.push('/main/topup').catch(() => {})
    },
    goProfile () {
      this.$router.push('/main/profile').catch(() => {})
    },
    logout () {
      localStorage.removeItem('token')
      localStorage.removeItem('id')
      Swal.fire('Success', 'Comeback anytime you want', 'success')
      this.$router.push('/auth/login').catch(() => {})
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
}

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

.left-tab:hover {
  opacity: .8;
}

@media (max-width: 1199px) {
  .left-side {
    width: 270px;
  }
}

</style>
