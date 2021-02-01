export default {
  methods: {
    cbTopup (el, binding) {
      if (binding.value.path === '/main/topup' && binding.value.tab === 'topup') {
        el.children[0].className = 'active-tab'
        el.children[1].src = require('@/assets/img/home/plus-active.svg')
        el.children[2].className = 'active-tab-key'
      } else if (binding.value.path !== '/main/topup' && binding.value.tab === 'topup') {
        el.children[0].className = 'inactive-tab'
        el.children[1].src = require('@/assets/img/home/plus-inactive.svg')
        el.children[2].className = 'inactive-tab-key'
      }
    }
  }
}
