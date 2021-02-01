export default {
  methods: {
    cbProfile (el, binding) {
      if (binding.value.path === '/main/profile' && binding.value.tab === 'profile') {
        el.children[0].className = 'active-tab'
        el.children[1].src = require('@/assets/img/home/user-active.svg')
        el.children[2].className = 'active-tab-key'
      } else if (binding.value.path === '/main/personalinfo' && binding.value.tab === 'profile') {
        el.children[0].className = 'active-tab'
        el.children[1].src = require('@/assets/img/home/user-active.svg')
        el.children[2].className = 'active-tab-key'
      } else if (binding.value.path === '/main/managephone' && binding.value.tab === 'profile') {
        el.children[0].className = 'active-tab'
        el.children[1].src = require('@/assets/img/home/user-active.svg')
        el.children[2].className = 'active-tab-key'
      } else if (binding.value.path === '/main/changepin' && binding.value.tab === 'profile') {
        el.children[0].className = 'active-tab'
        el.children[1].src = require('@/assets/img/home/user-active.svg')
        el.children[2].className = 'active-tab-key'
      } else if (binding.value.path === '/main/changepass' && binding.value.tab === 'profile') {
        el.children[0].className = 'active-tab'
        el.children[1].src = require('@/assets/img/home/user-active.svg')
        el.children[2].className = 'active-tab-key'
      } else if (binding.value.path === '/main/addphone' && binding.value.tab === 'profile') {
        el.children[0].className = 'active-tab'
        el.children[1].src = require('@/assets/img/home/user-active.svg')
        el.children[2].className = 'active-tab-key'
      } else if (binding.value.path !== '/main/profile' && binding.value.tab === 'profile') {
        el.children[0].className = 'inactive-tab'
        el.children[1].src = require('@/assets/img/home/user-inactive.svg')
        el.children[2].className = 'inactive-tab-key'
      } else if (binding.value.path !== '/main/personalinfo' && binding.value.tab === 'profile') {
        el.children[0].className = 'inactive-tab'
        el.children[1].src = require('@/assets/img/home/user-inactive.svg')
        el.children[2].className = 'inactive-tab-key'
      } else if (binding.value.path !== '/main/managephone' && binding.value.tab === 'profile') {
        el.children[0].className = 'inactive-tab'
        el.children[1].src = require('@/assets/img/home/user-inactive.svg')
        el.children[2].className = 'inactive-tab-key'
      } else if (binding.value.path !== '/main/changepin' && binding.value.tab === 'profile') {
        el.children[0].className = 'inactive-tab'
        el.children[1].src = require('@/assets/img/home/user-inactive.svg')
        el.children[2].className = 'inactive-tab-key'
      } else if (binding.value.path !== '/main/changepass' && binding.value.tab === 'profile') {
        el.children[0].className = 'inactive-tab'
        el.children[1].src = require('@/assets/img/home/user-inactive.svg')
        el.children[2].className = 'inactive-tab-key'
      } else if (binding.value.path !== '/main/addphone' && binding.value.tab === 'profile') {
        el.children[0].className = 'inactive-tab'
        el.children[1].src = require('@/assets/img/home/user-inactive.svg')
        el.children[2].className = 'inactive-tab-key'
      }
    }
  }
}
