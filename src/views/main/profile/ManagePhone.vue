<template>
  <div class="manage">
    <!-- Title -->
    <h3 class="title-manage">Manage Phone Number</h3>
    <p class="paragraph-manage">
      You can only delete the phone number and then you must add another phone number.
    </p>
    <BoxDetail @click="goEditPhone" type="value" icon="edit" title="Primary" :value="phone"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BoxDetail from '@/components/main/base/transfer/BoxDetail.vue'

export default {
  title: 'Manage Phone',
  name: 'ManagePhone',
  components: {
    BoxDetail
  },
  methods: {
    goEditPhone () {
      this.$router.push('/main/addphone')
    }
  },
  computed: {
    ...mapGetters({
      phone: 'profile/getPhone'
    })
  }
}
</script>

<style lang="scss" scoped>

.manage {
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  padding: 30px
}

.title-manage {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #3A3D42;
  margin: 0 0 25px 0
}

.paragraph-manage {
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
  .paragraph-manage {
    width: 100%;
  }
}

@media (max-width: 375px) {
  .manage {
    padding: 30px 15px
  }
}

</style>
