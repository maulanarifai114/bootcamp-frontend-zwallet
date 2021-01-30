// Transfer
import Confirmation from '../../views/main/transfer/Confirmation.vue'
import Failed from '../../views/main/transfer/Failed.vue'
import Search from '../../views/main/transfer/Search.vue'
import Success from '../../views/main/transfer/Success.vue'
import Transfer from '../../views/main/transfer/Transfer.vue'

const main = {
  confirmation: () => {
    return {
      path: 'confirmation',
      name: 'Confirmation',
      component: Confirmation,
      meta: { requiresAuth: true }
    }
  },
  failed: () => {
    return {
      path: 'failed',
      name: 'Failed',
      component: Failed,
      meta: { requiresAuth: true }
    }
  },
  search: () => {
    return {
      path: 'search',
      name: 'Search',
      component: Search,
      meta: { requiresAuth: true }
    }
  },
  success: () => {
    return {
      path: 'success',
      name: 'Success',
      component: Success,
      meta: { requiresAuth: true }
    }
  },
  transfer: () => {
    return {
      path: 'transfer',
      name: 'Transfer',
      component: Transfer,
      meta: { requiresAuth: true }
    }
  }
}

export default main
