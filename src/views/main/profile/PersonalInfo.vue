<template>
  <div class="personal">
    <!-- Title -->
    <h3 class="title-personal">Personal Information</h3>
    <p class="paragraph-personal">
      We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.
    </p>
    <!-- First Name -->
    <BoxDetail type="value" title="First Name" :value="firstName"/>
    <!-- Last Name -->
    <BoxDetail type="value" title="Last Name" :value="lastName"/>
    <!-- Email -->
    <BoxDetail type="value" title="Verified E-mail" :value="email"/>
    <!-- Email -->
    <BoxDetail @click="goManagePhone" type="value" icon="icon" title="Phone Number" :value="phone"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BoxDetail from '@/components/main/base/transfer/BoxDetail.vue'

export default {
  title: 'Personal Information',
  name: 'PersonalInfo',
  components: {
    BoxDetail
  },
  methods: {
    goManagePhone () {
      this.$store.getters['profile/getPhone'] === '+62'
        ? this.$router.push('/main/addphone')
        : this.$router.push('/main/managephone')
    }
  },
  computed: {
    ...mapGetters({
      firstName: 'profile/getFirstName',
      lastName: 'profile/getLastName',
      email: 'profile/getEmail',
      phone: 'profile/getPhone'
    })
  }
}
</script>

<style lang="scss" scoped>

.personal {
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  padding: 30px
}

.title-personal {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #3A3D42;
  margin: 0 0 25px 0
}

.paragraph-personal {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: #7A7886;
  width: 342px;
  margin: 0 0 40px 0
}

@media (max-width: 575px) {
  .paragraph-personal {
    width: 100%;
  }
}

@media (max-width: 375px) {
  .personal {
    padding: 30px 15px
  }
}

</style>
