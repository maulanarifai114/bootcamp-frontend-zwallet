// Main
import Main from '../views/main/main/Main.vue'
import Dashboard from './main/dashboard'
import Transfer from './main/transfer'
import Profile from './main/profile'
import Topup from './main/topup'

export default {
  path: '/main',
  name: 'Main',
  component: Main,
  redirect: '/main/dashboard',
  children: [
    Dashboard.dashboard(),
    Dashboard.history(),
    Transfer.confirmation(),
    Transfer.failed(),
    Transfer.search(),
    Transfer.success(),
    Transfer.transfer(),
    Profile.addphone(),
    Profile.changepass(),
    Profile.changepin(),
    Profile.managephone(),
    Profile.personalinfo(),
    Profile.profile(),
    Topup.topup()
  ]
}
