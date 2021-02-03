<template>
  <div class="transfer">
    <!-- Title -->
    <h3 ref="title" class="title-transfer">Transfer Money</h3>
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
    <!-- Paragraph -->
    <h5 class="paragraph-transfer">Type the amount you want to transfer and then press continue to the next steps.</h5>
    <!-- Input Amount -->
    <div class="d-flex w-100 justify-content-center">
      <!-- <h2 class="rupiah" v-if="money.length > 0">Rp.</h2> -->
      <input type="number" class="money w-100" placeholder="0.00" v-model="money">
    </div>
    <!-- Available -->
    <h6 class="available">Rp{{getBalance.toLocaleString('id-ID')}} Available</h6>
    <!-- Notes -->
    <div class="d-flex justify-content-center">
      <div class="d-flex align-items-center" :class="focused === 0 ? 'inactive-notes' : 'active-notes' ">
        <img :src="focused === 0 ? require('../../../assets/img/home/pen-inactive.svg') : require('../../../assets/img/home/pen-active.svg')" alt="icon">
        <input type="text" class="w-100" placeholder="Add some notes" v-model="notes" @focus="changeClass" @blur="changeClass">
      </div>
    </div>
    <!-- Button -->
    <div class="d-flex justify-content-end">
      <BtnTransfer label="Continue" @click="continueNext"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Swal from 'sweetalert2'
import moment from 'moment'
import BtnTransfer from '@/components/main/base/transfer/BtnTransfer.vue'

export default {
  title: 'Transfer',
  name: 'Transfer',
  components: {
    BtnTransfer
  },
  data () {
    return {
      image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      money: '',
      notes: '',
      focused: 0
    }
  },
  methods: {
    ...mapMutations({ setConfirmation: 'confirmation/SET_CONFIRMATION', removeReceiver: 'transfer/REMOVE_RECEIVER' }),
    checkReceiver () {
      if (this.$store.getters['transfer/getId'] === '') {
        this.$router.push('/main/search')
      }
    },
    changeClass () {
      this.focused === 0 ? this.focused = 1 : this.focused = 0
    },
    continueNext () {
      const data = {
        id: this.$store.getters['transfer/getId'],
        name: this.$store.getters['transfer/getName'],
        photo: this.$store.getters['transfer/getPhoto'],
        phone: this.$store.getters['transfer/getPhone'],
        amount: parseInt(this.money),
        notes: this.notes,
        date: ''
      }
      if (this.money === '') {
        Swal.fire('Failed', 'You must input a number', 'error')
      } else if (this.notes === '') {
        const amount = parseInt(this.money).toLocaleString('id-ID')
        const date = moment().locale('en').format('ll')
        const time = moment().locale('id').format('LT')
        data.notes = `Transfer ${amount} to ${this.$store.getters['transfer/getName']}`
        data.date = `${date} - ${time}`
        this.setConfirmation(data)
        this.$router.push('/main/confirmation')
      } else {
        const date = moment().locale('en').format('ll')
        const time = moment().locale('id').format('LT')
        data.date = `${date} - ${time}`
        this.setConfirmation(data)
        this.$router.push('/main/confirmation')
      }
    }
  },
  computed: {
    ...mapGetters({
      id: 'transfer/getId',
      name: 'transfer/getName',
      photo: 'transfer/getPhoto',
      phone: 'transfer/getPhone'
    }),
    getBalance () {
      return this.money === '' ? this.$store.getters['profile/getBalance'].toLocaleString('id-ID') : this.$store.getters['profile/getBalance'] - parseInt(this.money)
    }
  },
  mounted () {
    this.checkReceiver()
  },
  destroyed () {
    this.removeReceiver()
  }
}
</script>

<style lang="scss" scoped>

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

.transfer {
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  padding: 30px
}

.title-transfer {
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

.paragraph-transfer {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: #7A7886;
  width: 336px;
  margin: 0 0 65px 0
}

.rupiah {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 56px;
  text-align: center;
  color: #6379F4;
}

.money {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 56px;
  text-align: center;
  color: #6379F4;
  margin: 0 0 40px 0
}

.money::placeholder {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 56px;
  text-align: center;
  color: #B5BDCC;
}

.available {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: #3A3D42;
  text-align: center;
  margin: 0 0 60px 0
}

.active-notes, .inactive-notes {
  width: 340px;
  height: 40px;
  padding: 10px 0;
  margin: 0 0 85px 0;
  img {
    margin: 0 15px 0 0
  }
  input {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 27px;
    color: #3A3D42;
  }
  input::placeholder {
    color: rgba(169, 169, 169, 0.8);
  }
}

.active-notes {
  border-bottom: 1.5px solid #6379F4;
}

.inactive-notes {
  border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
}

@media (max-width: 425px) {
  .active-notes, .inactive-notes {
    width: 100%;
  }
  .name {
    width: 144px;
  }
  .paragraph-transfer {
    width: 100%;
  }
}

@media (max-width: 375px) {
  .transfer {
    padding: 30px 15px
  }

  .phone {
    font-size: 14px;
  }
}

</style>
