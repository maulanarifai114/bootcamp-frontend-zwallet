<template>
  <div class="history">
    <!-- Title -->
    <div class="wrap-title-history d-flex align-items-center justify-content-between">
      <h3 class="title-history">Transaction History</h3>
      <h6 @click="goHistory" class="see-all">See All</h6>
    </div>
    <!-- Start Loop -->
    <div @click="goHistory" class="d-flex wrap-all" v-for="(item, index) in data" :key="index" >
      <!-- Avatar -->
      <figure class="wrap-img">
        <img :src="item.photo === '' ? image : item.photo" alt="img">
      </figure>
      <div class=" d-flex flex-column justify-content-center">
        <div class="name-history">
          <h4>{{item.name}}</h4>
        </div>
        <h6 class="date-history">{{getDay(item.date)}}</h6>
      </div>
      <div class="flex-fill d-flex align-items-center justify-content-end">
        <h4 class="receive" v-if="item.receiverId === currentId">+Rp{{item.amount.toLocaleString('id-ID')}}</h4>
        <h4 class="send" v-else>-Rp{{item.amount.toLocaleString('id-ID')}}</h4>
      </div>
    </div>
    <!-- End Loop -->
  </div>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'HistoryModule',
  data () {
    return {
      image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      data: []
    }
  },
  methods: {
    goHistory () {
      this.$router.push('/main/history')
    },
    getDay (day) {
      return moment(day).format('ll')
    },
    getAllHistory () {
      axios.get(`${process.env.VUE_APP_BASE_URL}/history?id=${this.$store.getters['profile/getId']}&sort=new`)
        .then((res) => {
          const array = res.data.result
          this.data = array.slice(0, 4)
        })
        .catch((err) => {
          Swal.fire('Failed', err.response.data.err, 'error')
        })
    }
  },
  mounted () {
    this.getAllHistory()
  },
  computed: {
    ...mapGetters({ currentId: 'profile/getId' })
  },
  watch: {
    currentId (newValue) {
      newValue !== '' ? this.getAllHistory() : this.getAllHistory()
    }
  }
}
</script>

<style lang="scss" scoped>

.history {
  // width: 44.5%;
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  padding: 30px
}

.wrap-all {
  margin: 0 0 40px 0
}

.wrap-all:last-child {
  margin: 0
}

.wrap-all:hover {
  opacity: .8;
  cursor: pointer
}

.wrap-title-history {
  margin: 0 0 40px 0
}

.title-history {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #3A3D42;
}

.see-all {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #6379F4;
  cursor: pointer
}

.see-all:hover {
  opacity: .8;
}

.wrap-img {
  width: 56px;
  height: 56px;
  overflow: hidden;
  border-radius: 10px;
  margin: 0 15px 0 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.name-history {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: #4D4B57;
  margin: 0 0 9px 0;
  h4 {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.date-history {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #7A7886;
}

.receive {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  text-align: right;
  color: #1EC15F;
}

.send {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  text-align: right;
  color: #FF5B37;
}

@media (max-width: 991px) {
  .history {
    width: 100%;
  }
}

@media (max-width: 375px) {
  .history {
    padding: 30px 15px
  }

  .receive, .send, .date-history {
    font-size: 13px;
  }

  .name-history {
    font-size: 15px;
  }

  .name-history h4 {
    width: 100px;
  }
}

</style>
