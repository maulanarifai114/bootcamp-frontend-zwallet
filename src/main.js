import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import titleMixin from './mixins/titleMixin'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
import infiniteScroll from 'vue-infinite-scroll'

Vue.config.productionTip = false
Vue.use(infiniteScroll)
Vue.mixin(titleMixin)
// Vue.use(AOS.init())

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
