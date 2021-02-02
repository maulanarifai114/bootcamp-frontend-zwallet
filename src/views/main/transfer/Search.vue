<template>
  <div class="search-box">
    <!-- Title History -->
    <h3 class="title-search">Search Receiver</h3>
    <div class="search d-flex w-100">
      <div>
        <img src="../../../assets/img/home/search.svg" alt="icon">
      </div>
      <input ref="receiver" type="text" class="w-100" placeholder="Search receiver here">
    </div>
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

export default {
  title: 'Search',
  name: 'Search',
  data () {
    return {
      image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      data: [
        {
          id: '2',
          name: 'Lisa Margarita',
          photo: '',
          phone: '+6283991026758'
        },
        {
          id: '3',
          name: 'John Doe',
          photo: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          phone: '+6289548274953'
        },
        {
          id: '4',
          name: 'Sherman Suzyyyy',
          photo: 'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          phone: '+6285771836849'
        },
        {
          id: '5',
          name: 'Brozan Billy',
          photo: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=344&q=80',
          phone: '+6285342513759'
        }
      ]
    }
  },
  methods: {
    ...mapMutations({ receiver: 'transfer/SET_RECEIVER' }),
    focused () {
      this.$refs.receiver.focus()
    },
    phone (phone) {
      return parsePhoneNumber(phone).formatInternational()
    },
    getReceiver (item) {
      this.receiver(item)
      this.$router.push('/main/transfer')
    }
  },
  mounted () {
    this.focused()
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
