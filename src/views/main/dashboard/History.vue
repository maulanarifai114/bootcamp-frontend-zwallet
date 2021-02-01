<template>
  <div class="history">
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
    <!-- Start Loop -->
    <div class="d-flex wrap-all" v-for="(item, index) in data" :key="index" >
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

export default {
  title: 'History',
  name: 'History',
  data () {
    return {
      image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      data: [
        {
          senderId: '2',
          receiverId: '1',
          name: 'Lisa Margarita',
          photo: '',
          date: '2021-01-11T00:00:00',
          amount: 50000
        },
        {
          senderId: '1',
          receiverId: '3',
          name: 'John Doe',
          photo: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          date: '2021-01-08T00:00:00',
          amount: 30000
        },
        {
          senderId: '4',
          receiverId: '1',
          name: 'Sherman Suzy',
          photo: 'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          date: '2021-01-05T00:00:00',
          amount: 225000
        },
        {
          senderId: '1',
          receiverId: '5',
          name: 'Brozan Billy',
          photo: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=344&q=80',
          date: '2021-01-02T00:00:00',
          amount: 40000
        },
        {
          senderId: '6',
          receiverId: '1',
          name: 'Natalie Hope',
          photo: 'https://images.unsplash.com/photo-1569124589354-615739ae007b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          date: '2020-12-29T00:00:00',
          amount: 600000
        },
        {
          senderId: '1',
          receiverId: '7',
          name: 'Stefan Tone',
          photo: 'https://images.unsplash.com/photo-1494708001911-679f5d15a946?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          date: '2020-12-26T00:00:00',
          amount: 80000
        },
        {
          senderId: '8',
          receiverId: '1',
          name: 'Michele Austin',
          photo: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80',
          date: '2020-12-24T00:00:00',
          amount: 90000
        },
        {
          senderId: '9',
          receiverId: '1',
          name: 'Sapphire Tou',
          photo: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80',
          date: '2020-12-21T00:00:00',
          amount: 180000
        },
        {
          senderId: '10',
          receiverId: '1',
          name: 'Joseph Gonzales',
          photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
          date: '2020-12-18T00:00:00',
          amount: 120000
        },
        {
          senderId: '1',
          receiverId: '11',
          name: 'Imansyah Putra',
          photo: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
          date: '2020-12-14T00:00:00',
          amount: 150000
        }
      ],
      sort: 'new'
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
    }
  },
  computed: {
    ...mapGetters({ currentId: 'profile/getId' })
  }
}
</script>

<style lang="scss" scoped>

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

.wrap-sort:hover {
  opacity: .8;
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
