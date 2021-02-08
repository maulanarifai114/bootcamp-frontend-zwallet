<template>
  <div class="search-box">
    <!-- Title History -->
    <h3 class="title-search">Search Receiver</h3>
    <label for="search" class="search d-flex w-100" :class="classes">
      <div>
        <img src="../../../assets/img/home/search.svg" alt="icon">
      </div>
      <input v-model="search" @focus="changeClass" @blur="changeClass" @input="searching" id="search" type="text" class="w-100" placeholder="Search receiver here">
    </label>
    <!-- Start Loop -->
    <div class="receiver w-100 d-flex" v-for="(item, index) in data" :key="index" @click="getReceiver(item)">
      <figure>
        <img :src="item.photo === '' ? image : item.photo" alt="">
      </figure>
      <div class="d-flex flex-column justify-content-center flex-fill">
        <h4 class="name">{{item.name}}</h4>
        <h6 class="phone">{{phone(item.phone)}}</h6>
      </div>
    </div>
    <!-- End Loop -->
  </div>
</template>

<script>
import parsePhoneNumber from 'libphonenumber-js'
import { mapMutations } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  title: 'Search',
  name: 'Search',
  data () {
    return {
      image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      classes: '',
      data: [],
      search: '',
      bottom: false
    }
  },
  methods: {
    ...mapMutations({ receiver: 'transfer/SET_RECEIVER' }),
    phone (phone) {
      if (phone === '+62') {
        return phone
      } else {
        return parsePhoneNumber(phone).formatInternational()
      }
    },
    getReceiver (item) {
      this.receiver(item)
      this.$router.push('/main/transfer')
    },
    changeClass () {
      this.classes === ''
        ? this.classes = 'search-focused'
        : this.classes = ''
    },
    searching (e) {
      if (this.search === '') {
        this.getAllUser()
      } else {
        axios.get(`${process.env.VUE_APP_BASE_URL}/user/search?keyword=${e.target.value}`)
          .then((res) => {
            this.data = res.data.result
          })
          .catch((err) => {
            Swal.fire('Failed', err.response.data.err, 'error')
          })
      }
    },
    getAllUser () {
      axios.get(`${process.env.VUE_APP_BASE_URL}/user/alluser`)
        .then((res) => {
          this.data = res.data.result
        })
        .catch((err) => {
          Swal.fire('Failed', err.response.data.err, 'error')
        })
    },
    getAllUserLimit () {
      const last = this.data.length - 1
      axios.get(`${process.env.VUE_APP_BASE_URL}/user/alluserlimit?date=${this.data[last].date}`)
        .then((res) => {
          res.data.result.forEach((value) => {
            this.data.push(value)
          })
        })
        .catch((err) => {
          Swal.fire('Failed', err.response.data.err, 'error')
        })
    },
    updateUser () {
      this.search === '' ? this.getAllUser() : this.searching()
    },
    bottomVisible () {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY >= pageHeight
      return bottomOfPage || pageHeight < visible
    }
  },
  created () {
    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible()
    })
    this.getAllUser()
  },
  watch: {
    bottom (isBottom) {
      if (isBottom === true) {
        this.getAllUserLimit()
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.search-box {
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  padding: 30px
}

.title-search {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #3A3D42;
  margin: 0 0 25px 0
}

.search {
  height: 54px;
  background: rgba(58, 61, 66, 0.1);
  border-radius: 12px;
  padding: 15px;
  margin: 0 0 30px 0;
  img {
    margin: 0 15px 0 0
  }
  input::placeholder, input {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    background-color: rgba(255, 255, 255, 0);
  }
  input {
    color: rgb(58, 61, 66);
  }
  input::placeholder {
    color: rgba(58, 61, 66, 0.4);
  }
}

.search-focused {
  background-color: rgba(58, 61, 66, 0)!important;
  box-shadow: 0 0 0 3px rgba(99, 121, 244, 0.5);
}

.receiver {
  padding: 20px;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin: 0 0 20px 0
}

.receiver:last-child {
  margin: 0
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
  .search-box {
    padding: 30px 15px
  }

  .phone {
    font-size: 14px;
  }
}

</style>
