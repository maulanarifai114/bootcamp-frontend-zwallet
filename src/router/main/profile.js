// Profile
import AddPhone from '../../views/main/profile/AddPhone.vue'
import ChangePass from '../../views/main/profile/ChangePass.vue'
import ChangePin from '../../views/main/profile/ChangePin.vue'
import ManagePhone from '../../views/main/profile/ManagePhone.vue'
import PersonalInfo from '../../views/main/profile/PersonalInfo.vue'
import Profile from '../../views/main/profile/Profile.vue'

const main = {
  addphone: () => {
    return {
      path: 'addphone',
      name: 'AddPhone',
      component: AddPhone,
      meta: { requiresAuth: true }
    }
  },
  changepass: () => {
    return {
      path: 'changepass',
      name: 'ChangePass',
      component: ChangePass,
      meta: { requiresAuth: true }
    }
  },
  changepin: () => {
    return {
      path: 'changepin',
      name: 'ChangePin',
      component: ChangePin,
      meta: { requiresAuth: true }
    }
  },
  managephone: () => {
    return {
      path: 'managephone',
      name: 'ManagePhone',
      component: ManagePhone,
      meta: { requiresAuth: true }
    }
  },
  personalinfo: () => {
    return {
      path: 'personalinfo',
      name: 'PersonalInfo',
      component: PersonalInfo,
      meta: { requiresAuth: true }
    }
  },
  profile: () => {
    return {
      path: 'profile',
      name: 'Profile',
      component: Profile,
      meta: { requiresAuth: true }
    }
  }
}

export default main
