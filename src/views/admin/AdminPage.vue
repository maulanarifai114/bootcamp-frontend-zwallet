<template>
  <div class="container-fluid">
    <NavbarAdmin/>
    <div class="container">
      <div class="big-box-admin w-100 d-flex flex-column">
        <div class="wrap-title-admin d-flex justify-content-between align-items-center">
          <h3 class="title-admin">All Users</h3>
          <div @click="logout" class="wrap-logout d-flex align-items-center">
            <h5 class="logout mr-3">Log out</h5>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 24.5H5.83333C5.21449 24.5 4.621 24.2542 4.18342 23.8166C3.74583 23.379 3.5 22.7855 3.5 22.1667V5.83333C3.5 5.21449 3.74583 4.621 4.18342 4.18342C4.621 3.74583 5.21449 3.5 5.83333 3.5H10.5" stroke="#3A3D42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.6667 19.8337L24.5 14.0003L18.6667 8.16699" stroke="#3A3D42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M24.5 14H10.5" stroke="#3A3D42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <!-- Start Loop -->
        <div class="d-flex wrap-all align-items-center" v-for="(item, index) in data" :key="index" >
          <!-- Avatar -->
          <div>
            <figure class="wrap-img">
              <img :src="item.photo === '' ? image : item.photo" alt="img">
            </figure>
          </div>
          <!-- Name and Date -->
          <div class=" d-flex flex-column justify-content-center">
            <div class="name-user">
              <h4>{{item.name}}</h4>
            </div>
            <h6 class="phone-user">{{getPhone(item.phone)}}</h6>
          </div>
          <!-- Trash Icon -->
          <div class="d-flex flex-fill align-items-center justify-content-end">
            <div @click="deleteUser(item.id)" class="trash d-flex align-items-center justify-content-center">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 7H5.83333H24.5" stroke="#BBBBBE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.33398 6.99967V4.66634C9.33398 4.0475 9.57982 3.45401 10.0174 3.01643C10.455 2.57884 11.0485 2.33301 11.6673 2.33301H16.334C16.9528 2.33301 17.5463 2.57884 17.9839 3.01643C18.4215 3.45401 18.6673 4.0475 18.6673 4.66634V6.99967M22.1673 6.99967V23.333C22.1673 23.9518 21.9215 24.5453 21.4839 24.9829C21.0463 25.4205 20.4528 25.6663 19.834 25.6663H8.16732C7.54848 25.6663 6.95499 25.4205 6.5174 24.9829C6.07982 24.5453 5.83398 23.9518 5.83398 23.333V6.99967H22.1673Z" stroke="#BBBBBE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        <!-- End Loop -->
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import NavbarAdmin from '@/components/main/module/NavbarAdmin'
import Footer from '@/components/main/module/Footer'
import parsePhoneNumber from 'libphonenumber-js'
import Swal from 'sweetalert2'
import axios from 'axios'

export default {
  title: 'Admin',
  name: 'Admin',
  components: {
    NavbarAdmin,
    Footer
  },
  data () {
    return {
      image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      data: [],
      bottom: false
    }
  },
  methods: {
    ...mapActions({ getProfile: 'profile/getProfile' }),
    getProfileZ () {
      if (this.$store.getters['profile/getId'] === '') {
        this.getProfile()
      }
    },
    logout () {
      localStorage.removeItem('token')
      localStorage.removeItem('id')
      Swal.fire('Success', 'Comeback anytime you want', 'success')
      this.$router.push('/auth/login')
    },
    getPhone (phone) {
      if (phone === '+62') {
        return phone
      } else {
        const phoneNumber = parsePhoneNumber(phone)
        return phoneNumber.formatInternational()
      }
    },
    deleteUser (itemId) {
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
          axios.delete(`${process.env.VUE_APP_BASE_URL}/admin`, { data: { id: itemId } })
            .then((res) => {
              Swal.fire('Deleted!', 'History has been deleted.', 'success')
              this.getAllUsers()
            })
            .catch((err) => {
              console.log(err.response.data)
              Swal.fire('Failed', err.response.data.err, 'error')
            })
        }
      })
    },
    bottomVisible () {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY >= pageHeight
      return bottomOfPage || pageHeight < visible
    },
    getAllUsers () {
      axios.get(`${process.env.VUE_APP_BASE_URL}/admin`)
        .then((res) => {
          this.data = res.data.result
        })
        .catch((err) => {
          Swal.fire('Failed', err.response.data.err, 'error')
        })
    },
    getAllUsersLimit () {
      const last = this.data.length - 1
      axios.get(`${process.env.VUE_APP_BASE_URL}/admin/limit?date=${this.data[last].date}`)
        .then((res) => {
          res.data.result.forEach((value) => {
            this.data.push(value)
          })
        })
        .catch((err) => {
          Swal.fire('Failed', err.response.data.err, 'error')
        })
    }
  },
  mounted () {
    this.getAllUsers()
  },
  created () {
    this.getProfileZ()
    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible()
    })
  },
  watch: {
    bottom (isBottom) {
      if (isBottom === true) {
        this.getAllUsersLimit()
      }
    },
    currentId (newValue) {
      newValue !== '' ? this.getAllUsers() : this.getAllUsers()
    }
  },
  computed: {
    ...mapGetters({ currentId: 'profile/getId' })
  }
}
</script>

<style lang="scss" scoped>

.wrap-logout {
  cursor: pointer;
  padding: 10px;
  background-color: #6379F4;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #fff;
  border-radius: 10px;
  svg {
    width: 22px;
    height: 22px;
    path {
      stroke: #fff;
      stroke-width: 2.5;
    }
  }
}

.wrap-logout:hover {
  opacity: .8;
}

.container-fluid {
  padding: 0;
  background: #FAFCFF;
}

.container {
  padding: 180px 0 0 0;
  min-height: 100vh;
  margin-bottom: 35px;
}

.big-box-admin  {
  padding: 30px;
  min-height: 678px;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
}

.wrap-title-admin {
  margin: 0 0 25px 0
}

.title-admin {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 25px;
  color: #3A3D42;
}

.wrap-main {
  min-height: 678px;
}

.wrap-all {
  margin: 0 0 40px 0;
  border-radius: 10px;
  box-shadow: 0 0 0 10px rgba(58, 61, 66, 0);
}

.wrap-all:last-child {
  margin: 0
}

.wrap-all:hover {
  cursor: pointer;
  background-color: rgba(58, 61, 66, 0.05);
  box-shadow: 0 0 0 10px rgba(58, 61, 66, 0.05);
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

.name-user {
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

.phone-user {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #7A7886;
}

.trash {
  width: 40px;
  height: 40px;
  border-radius: 25%;
  background-color: #ff5c37;
  svg {
    path {
      stroke: #fff;
    }
  }
}

@media (max-width: 375px) {
  .big-box-admin {
    padding: 30px 15px
  }

  .phone-user {
    font-size: 13px;
  }

  .name-user {
    font-size: 15px;
  }

  .name-user h4 {
    width: 100px;
  }
}

@media (max-width: 575px) {
  .container {
    padding: 140px 2.5% 0
  }
}

</style>
