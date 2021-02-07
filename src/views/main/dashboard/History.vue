<template>
  <div class="history d-flex flex-column">
    <!-- Title -->
    <div class="wrap-title-history d-flex align-items-center justify-content-between">
      <h3 class="title-history">Transaction History</h3>
      <div @click="sorting" class="d-flex align-items-center wrap-sort">
        <figure>
          <img src="../../../assets/img/home/arrow-active.svg" :class="sort === 'new' ? 'sort-new' : 'sort-old' " alt="icon">
        </figure>
        <h4 class="sort" v-if="sort === 'new'">Newest</h4>
        <h4 class="sort" v-else>Oldest</h4>
      </div>
    </div>
    <div class=" d-flex justify-content-center flex-fill align-items-center" v-if="data.length === 0">
      <h6 class="have-not">You haven't made a transaction</h6>
    </div>
    <!-- Start Loop -->
    <div class="d-flex wrap-all position-relative" v-for="(item, index) in data" :key="index" >
      <!-- Avatar -->
      <div>
        <figure class="wrap-img">
          <img :src="item.photo === '' ? image : item.photo" alt="img">
        </figure>
      </div>
      <!-- Name and Date -->
      <div class=" d-flex flex-column justify-content-center">
        <div class="name-history">
          <h4>{{item.name}}</h4>
        </div>
        <h6 class="date-history">{{getDay(item.date)}}</h6>
      </div>
      <!-- Amount -->
      <div class="flex-fill d-flex align-items-center justify-content-end">
        <h4 class="receive" v-if="item.receiverId === currentId">+Rp{{item.amount.toLocaleString('id-ID')}}</h4>
        <h4 class="send" v-else>-Rp{{item.amount.toLocaleString('id-ID')}}</h4>
      </div>
      <!-- Trash Icon -->
      <div @mouseover="showIcon(item.id)" @mouseleave="hideIcon" class="wrap-trash d-flex align-items-center justify-content-center position-absolute">
        <div @click="deleteTransaction(item.id)" v-if="icon === item.id" class="trash d-flex align-items-center justify-content-center">
          <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 7H5.83333H24.5" stroke="#BBBBBE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.33398 6.99967V4.66634C9.33398 4.0475 9.57982 3.45401 10.0174 3.01643C10.455 2.57884 11.0485 2.33301 11.6673 2.33301H16.334C16.9528 2.33301 17.5463 2.57884 17.9839 3.01643C18.4215 3.45401 18.6673 4.0475 18.6673 4.66634V6.99967M22.1673 6.99967V23.333C22.1673 23.9518 21.9215 24.5453 21.4839 24.9829C21.0463 25.4205 20.4528 25.6663 19.834 25.6663H8.16732C7.54848 25.6663 6.95499 25.4205 6.5174 24.9829C6.07982 24.5453 5.83398 23.9518 5.83398 23.333V6.99967H22.1673Z" stroke="#BBBBBE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
    <!-- End Loop -->
  </div>
</template>

<script>
import moment from 'moment'
import Swal from 'sweetalert2'
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  title: 'History',
  name: 'History',
  data () {
    return {
      image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      data: [],
      sort: 'new',
      icon: null,
      bottom: false
    }
  },
  methods: {
    goHistory () {
      this.$router.push('/main/history')
    },
    getDay (day) {
      return moment(day).format('ll')
    },
    sorting () {
      if (this.sort === 'new') {
        this.sort = 'old'
      } else {
        this.sort = 'new'
      }
    },
    showIcon (index) {
      this.icon = index
    },
    hideIcon () {
      this.icon = null
    },
    deleteTransaction (itemId) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#6379F4',
        cancelButtonColor: '#ff5c37',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`${process.env.VUE_APP_BASE_URL}/history`, { data: { id: itemId } })
            .then((res) => {
              console.log(res.data)
              Swal.fire('Deleted!', 'History has been deleted.', 'success')
              this.getAllHistory()
            })
            .catch((err) => {
              console.log(err.response.data)
              Swal.fire('Failed', err.response.data.err, 'error')
            })
        }
      })
    },
    getAllHistory () {
      axios.get(`${process.env.VUE_APP_BASE_URL}/history?id=${this.$store.getters['profile/getId']}&sort=${this.sort}`)
        .then((res) => {
          this.data = res.data.result
        })
        .catch((err) => {
          Swal.fire('Failed', err.response.data.err, 'error')
        })
    },
    getAllHistoryLimit () {
      const last = this.data.length - 1
      axios.get(`${process.env.VUE_APP_BASE_URL}/history/limit?id=${this.$store.getters['profile/getId']}&sort=${this.sort}&date=${this.data[last].date}`)
        .then((res) => {
          res.data.result.forEach((value) => {
            this.data.push(value)
          })
        })
        .catch((err) => {
          Swal.fire('Failed', err.response.data.err, 'error')
        })
    },
    bottomVisible () {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY >= pageHeight
      return bottomOfPage || pageHeight < visible
    }
  },
  mounted () {
    this.getAllHistory()
  },
  created () {
    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible()
    })
  },
  watch: {
    bottom (isBottom) {
      if (isBottom === true) {
        this.getAllHistoryLimit()
      }
    },
    sort (typeSort) {
      typeSort === 'new' ? this.getAllHistory() : this.getAllHistory()
    },
    currentId (newValue) {
      newValue !== '' ? this.getAllHistory() : this.getAllHistory()
    }
  },
  computed: {
    ...mapGetters({ currentId: 'profile/getId' })
  }
}
</script>

<style lang="scss" scoped>

.have-not {
  color: rgba(122, 120, 134, 0.5);
  font-size: 24px;
  text-align: center;
  line-height: 1.3em;
}

.wrap-trash {
  top: -10px;
  bottom: -10px;
  right: -10px;
  left: -10px;
  border-radius: 10px;
}

.wrap-trash:hover {
  background-color: rgba(58, 61, 66, 0.1);
}

.trash {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #6379F4;
  svg {
    path {
      stroke: #fff;
    }
  }
}

.trash:hover {
  background-color: #ff5c37;
}

.sort-new {
  transform: rotate(0deg)
}

.sort-old {
  transform: rotate(180deg)
}

.history {
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

.wrap-sort:hover {
  cursor: pointer
}

.sort {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 1em;
  color: #6379F4;
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
