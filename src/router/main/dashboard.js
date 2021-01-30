// Dashboard
import Dashboard from '../../views/main/dashboard/Dashboard.vue'
import History from '../../views/main/dashboard/History.vue'

const main = {
  dashboard: () => {
    return {
      path: 'dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { requiresAuth: true }
    }
  },
  history: () => {
    return {
      path: 'history',
      name: 'History',
      component: History,
      meta: { requiresAuth: true }
    }
  }
}

export default main
