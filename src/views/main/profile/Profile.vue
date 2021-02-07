<template>
  <div class="profile d-flex align-items-center flex-column">
    <!-- Change Photo -->
    <label for="photo" class="d-flex align-items-center flex-column">
      <figure class="position-relative">
        <img :src="photo === '' ? image : photo" alt="photo">
        <div :class="isLoading === 1 ? 'loading-image':'' " class="position-absolute d-flex justify-content-center align-items-center">
          <Loading2 :isLoading="isLoading"/>
        </div>
      </figure>
      <div class="d-flex align-items-center">
        <img src="../../../assets/img/home/edit-2.svg" alt="icon">
        <h6 class="edit">Edit</h6>
      </div>
      <input type="file" name="photo" id="photo" class="d-none" @change="changeImage">
    </label>
    <!-- Name -->
    <h2 class="name">{{`${firstName} ${lastName}`}}</h2>
    <h6 class="phone">{{phone}}</h6>
    <!-- Personal Information -->
    <button @click="goPersonal" class="button mb-20 d-flex justify-content-between align-items-center">
      <h4>Personal Information</h4>
      <img src="../../../assets/img/home/arrow-right.svg" alt="icon">
    </button>
    <!-- Change Password -->
    <button @click="goPassword" class="button mb-20 d-flex justify-content-between align-items-center">
      <h4>Change Password</h4>
      <img src="../../../assets/img/home/arrow-right.svg" alt="icon">
    </button>
    <!-- Change PIN -->
    <button @click="goPin" class="button mb-20 d-flex justify-content-between align-items-center">
      <h4>Change PIN</h4>
      <img src="../../../assets/img/home/arrow-right.svg" alt="icon">
    </button>
    <!-- Logout -->
    <button @click="logout" class="button d-flex justify-content-between align-items-center">
      <h4>Logout</h4>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Swal from 'sweetalert2'
import axios from 'axios'
import Loading2 from '@/components/loading/Loading2'

export default {
  title: 'Profile',
  name: 'Profile',
  components: {
    Loading2
  },
  data () {
    return {
      image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      isLoading: 0
    }
  },
  methods: {
    ...mapMutations({ setPhoto: 'profile/SET_PHOTO' }),
    changeImage (e) {
      this.isLoading = 1
      const type = e.target.files[0].type
      const size = e.target.files[0].size
      const byte = 1024 * 1024 * 1
      if (type !== 'image/jpeg' && type !== 'image/png' && type !== 'image/jpg') {
        this.isLoading = 0
        return Swal.fire('Failed', 'You must upload a JPEG / JPG / PNG', 'error')
      } else if (size > byte) {
        this.isLoading = 0
        return Swal.fire('Failed', 'You must upload less than 1 MB', 'error')
      } else {
        const data = new FormData()
        const reader = new FileReader()
        data.append('photo', e.target.files[0])
        data.append('id', this.$store.getters['profile/getId'])
        axios.patch(`${process.env.VUE_APP_BASE_URL}/user/photo`, data)
          .then(() => {
            reader.readAsDataURL(e.target.files[0])
            reader.onload = e => {
              this.setPhoto(e.target.result)
            }
            Swal.fire('Success', 'You have been change your avatar', 'success')
            this.isLoading = 0
          })
          .catch((err) => {
            Swal.fire('Failed', err.response.data.err, 'error')
            this.isLoading = 0
          })
      }
    },
    goPersonal () {
      this.$router.push('/main/personalinfo')
    },
    goPassword () {
      this.$router.push('/main/changepass')
    },
    goPin () {
      this.$router.push('/main/changepin')
    },
    logout () {
      localStorage.removeItem('token')
      localStorage.removeItem('id')
      this.$router.push('/auth/login').catch(() => {})
      Swal.fire('Success', 'Comeback anytime you want', 'success')
    }
  },
  computed: {
    ...mapGetters({
      photo: 'profile/getPhoto',
      firstName: 'profile/getFirstName',
      lastName: 'profile/getLastName',
      phone: 'profile/getPhone'
    })
  }
}
</script>

<style lang="scss" scoped>

.loading-image {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(58, 61, 66, 0.5);
}

label {
  margin: 0 0 15px 0
}

label:hover {
  cursor: pointer;
  opacity: .8;
}

.profile {
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  padding: 50px 30px 60px
}

figure {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 0 10px 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.edit {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 27px;
  text-align: center;
  color: #7A7886;
  margin: 0 0 0 10px
}

.name {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #4D4B57;
  margin: 0 0 10px 0
}

.phone {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 27px;
  text-align: center;
  color: #7A7886;
  margin: 0 0 50px 0
}

.button {
  padding: 0 20px;
  width: 433px;
  height: 64px;
  background: #E5E8ED;
  border-radius: 10px;
  h4 {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 28px;
    color: #4D4B57;
  }
}

.button:hover {
  opacity: .8;
}

.mb-20 {
  margin: 0 0 20px 0
}

@media (max-width: 575px) {
  .button {
    width: 100%;
  }
}

@media (max-width: 375px) {
  .profile {
    padding: 50px 15px 60px;
  }
}

</style>
