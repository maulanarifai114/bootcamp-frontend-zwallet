export default {
  methods: {
    cbDashboard (el, binding) {
      if (binding.value.path === '/main/dashboard' && binding.value.tab === 'dashboard') {
        el.children[0].className = 'active-tab'
        el.children[1].src = require('@/assets/img/home/grid-active.svg')
        el.children[2].className = 'active-tab-key'
      } else if (binding.value.path === '/main/history' && binding.value.tab === 'dashboard') {
        el.children[0].className = 'active-tab'
        el.children[1].src = require('@/assets/img/home/grid-active.svg')
        el.children[2].className = 'active-tab-key'
      } else if (binding.value.path !== '/main/dashboard' && binding.value.tab === 'dashboard') {
        el.children[0].className = 'inactive-tab'
        el.children[1].src = require('@/assets/img/home/grid-inactive.svg')
        el.children[2].className = 'inactive-tab-key'
      } else if (binding.value.path !== '/main/history' && binding.value.tab === 'dashboard') {
        el.children[0].className = 'inactive-tab'
        el.children[1].src = require('@/assets/img/home/grid-inactive.svg')
        el.children[2].className = 'inactive-tab-key'
      }
    }
  }
}
