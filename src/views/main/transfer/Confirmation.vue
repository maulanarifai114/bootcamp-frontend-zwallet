<template>
  <div class="confirmation">
    <!-- Title -->
    <h3 class="title-detail">Transfer To</h3>
    <!-- Receiver -->
    <div class="receiver w-100 d-flex">
      <figure>
        <img :src="photo === '' ? image : photo" alt="">
      </figure>
      <div class="d-flex flex-column justify-content-center flex-fill">
        <h4 class="name">{{name}}</h4>
        <h6 class="phone">{{phone}}</h6>
      </div>
    </div>
    <!-- Title -->
    <h3 class="title-detail">Detail</h3>
    <!-- Amount -->
    <BoxDetail type="amount" title="Amount" :amountbalance="amount.toLocaleString('id-ID')"/>
    <!-- Balance -->
    <BoxDetail type="amount" title="Balance Left" :amountbalance="(balance-amount).toLocaleString('id-ID')"/>
    <!-- Date & Time -->
    <BoxDetail type="value" title="Date & Time" :value="date"/>
    <!-- Notes -->
    <BoxDetail type="value" title="Notes" :value="notes"/>
    <!-- Button -->
    <div class="wrap-btn d-flex justify-content-end">
      <BtnTransfer ref="button" label="Continue" @click="showPin"/>
    </div>
    <!-- Pin -->
    <ShowPin :showed="show" @click="closePin" @change="closePin"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BoxDetail from '@/components/main/base/transfer/BoxDetail.vue'
import BtnTransfer from '@/components/main/base/transfer/BtnTransfer.vue'
import ShowPin from '@/components/main/base/transfer/ShowPin.vue'

export default {
  title: 'Confirmation',
  name: 'Confirmation',
  components: {
    BoxDetail,
    BtnTransfer,
    ShowPin
  },
  data () {
    return {
      image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      show: 0
    }
  },
  methods: {
    checkReceiver () {
      if (this.$store.getters['transfer/getId'] === '') {
        this.$router.push('/main/search')
      }
    },
    showPin () {
      this.show = 1
    },
    closePin () {
      this.show = 0
    }
  },
  computed: {
    ...mapGetters({
      id: 'transfer/getId',
      name: 'transfer/getName',
      photo: 'transfer/getPhoto',
      phone: 'transfer/getPhone',
      amount: 'transfer/getAmount',
      notes: 'transfer/getNotes',
      date: 'transfer/getDate',
      balance: 'profile/getBalance'
    })
  },
  mounted () {
    this.checkReceiver()
  }
}
</script>

<style lang="scss" scoped>

.wrap-btn {
  padding: 35px 0 0 0;
  width: 100%;
}

.confirmation {
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  padding: 30px
}

.title-detail {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #3A3D42;
  margin: 0 0 25px 0
}

.receiver {
  padding: 20px;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin: 0 0 40px 0
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
  .confirmation {
    padding: 30px 15px
  }

  .phone {
    font-size: 14px;
  }
}
</style>
