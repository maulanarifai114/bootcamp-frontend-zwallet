// Top Up
import Topup from '../../views/main/topup/Topup.vue'

const main = {
  topup: () => {
    return {
      path: 'topup',
      name: 'Topup',
      component: Topup,
      meta: { requiresAuth: true }
    }
  }
}

export default main
