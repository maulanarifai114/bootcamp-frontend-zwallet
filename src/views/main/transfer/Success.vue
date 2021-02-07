<template>
  <div class="status">
    <div class=" d-flex flex-column align-items-center">
      <img class="icon-status" src="../../../assets/img/home/success.svg" alt="icon" width="70">
      <h2 class="title-status">Transfer Success</h2>
    </div>
    <!-- Amount -->
    <BoxDetail type="amount" title="Amount" :amountbalance="amount.toLocaleString('id-ID')"/>
    <!-- Balance -->
    <BoxDetail type="amount" title="Balance Left" :amountbalance="balance.toLocaleString('id-ID')"/>
    <!-- Date & Time -->
    <BoxDetail type="value" title="Date & Time" :value="date"/>
    <!-- Notes -->
    <BoxDetail type="value" title="Notes" :value="notes"/>
    <!-- Transfer to -->
    <h3 class="title-status-to">Transfer to</h3>
    <div class="receiver w-100 d-flex">
      <div>
        <figure>
          <img :src="photo === '' ? image : photo" alt="">
        </figure>
      </div>
      <div class="d-flex flex-column justify-content-center flex-fill">
        <h4 class="name">{{name}}</h4>
        <h6 class="phone">{{phone}}</h6>
      </div>
    </div>
    <!-- Button -->
    <div class="wrap-btn d-flex justify-content-end">
      <BtnTransfer :isLoading="isLoading" ref="button" label="Back to Home" @click="goDashboard"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BoxDetail from '@/components/main/base/transfer/BoxDetail.vue'
import BtnTransfer from '@/components/main/base/transfer/BtnTransfer.vue'

export default {
  title: 'Success',
  name: 'Success',
  components: {
    BoxDetail,
    BtnTransfer
  },
  data () {
    return {
      image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      isLoading: 0
    }
  },
  methods: {
    goDashboard () {
      this.$router.push('/main/dashboard')
    },
    checkReceiver () {
      if (this.$store.getters['status/getId'] === '') {
        this.$router.push('/main/dashboard')
      }
    }
  },
  computed: {
    ...mapGetters({
      id: 'status/getId',
      name: 'status/getName',
      photo: 'status/getPhoto',
      phone: 'status/getPhone',
      amount: 'status/getAmount',
      notes: 'status/getNotes',
      date: 'status/getDateDisplay',
      balance: 'profile/getBalance'
    })
  }
}
</script>

<style lang="scss" scoped>

.status {
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  padding: 60px 30px 30px
}

.icon-status {
  margin: 0 0 30px 0
}

.title-status {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
  text-align: center;
  color: #4D4B57;
  margin: 0 0 40px 0
}

.title-status-to {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #514F5B;
  margin: 0 0 40px 0;
  padding: 20px 0 0 0
}

.receiver {
  padding: 20px;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin: 0 0 90px 0
}

.receiver:hover {
  cursor: pointer;
  opacity: .8;
}

figure {
  width: 70px;
  height: 70px;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 20px 0 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.name{
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #4D4B57;
  margin: 0 0 10px 0;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.phone {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #7A7886;

}

@media (max-width: 425px) {
  .name {
    width: 144px;
  }
}

@media (max-width: 375px) {
  .status {
    padding: 30px 15px
  }
}

</style>
