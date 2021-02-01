export default {
  methods: {
    cbTransfer (el, binding) {
      if (binding.value.path === '/main/transfer' && binding.value.tab === 'transfer') {
        el.children[0].className = 'active-tab'
        el.children[1].src = require('@/assets/img/home/arrow-active.svg')
        el.children[2].className = 'active-tab-key'
      } else if (binding.value.path === '/main/success' && binding.value.tab === 'transfer') {
        el.children[0].className = 'active-tab'
        el.children[1].src = require('@/assets/img/home/arrow-active.svg')
        el.children[2].className = 'active-tab-key'
      } else if (binding.value.path === '/main/failed' && binding.value.tab === 'transfer') {
        el.children[0].className = 'active-tab'
        el.children[1].src = require('@/assets/img/home/arrow-active.svg')
        el.children[2].className = 'active-tab-key'
      } else if (binding.value.path === '/main/search' && binding.value.tab === 'transfer') {
        el.children[0].className = 'active-tab'
        el.children[1].src = require('@/assets/img/home/arrow-active.svg')
        el.children[2].className = 'active-tab-key'
      } else if (binding.value.path === '/main/confirmation' && binding.value.tab === 'transfer') {
        el.children[0].className = 'active-tab'
        el.children[1].src = require('@/assets/img/home/arrow-active.svg')
        el.children[2].className = 'active-tab-key'
      } else if (binding.value.path !== '/main/transfer' && binding.value.tab === 'transfer') {
        el.children[0].className = 'inactive-tab'
        el.children[1].src = require('@/assets/img/home/arrow-inactive.svg')
        el.children[2].className = 'inactive-tab-key'
      } else if (binding.value.path !== '/main/success' && binding.value.tab === 'transfer') {
        el.children[0].className = 'inactive-tab'
        el.children[1].src = require('@/assets/img/home/arrow-inactive.svg')
        el.children[2].className = 'inactive-tab-key'
      } else if (binding.value.path !== '/main/failed' && binding.value.tab === 'transfer') {
        el.children[0].className = 'inactive-tab'
        el.children[1].src = require('@/assets/img/home/arrow-inactive.svg')
        el.children[2].className = 'inactive-tab-key'
      } else if (binding.value.path !== '/main/search' && binding.value.tab === 'transfer') {
        el.children[0].className = 'inactive-tab'
        el.children[1].src = require('@/assets/img/home/arrow-inactive.svg')
        el.children[2].className = 'inactive-tab-key'
      } else if (binding.value.path !== '/main/confirmation' && binding.value.tab === 'transfer') {
        el.children[0].className = 'inactive-tab'
        el.children[1].src = require('@/assets/img/home/arrow-inactive.svg')
        el.children[2].className = 'inactive-tab-key'
      }
    }
  }
}
