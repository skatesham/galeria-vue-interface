import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import VueSession from 'vue-session'
import Auth from '@/packages/auth/Auth.js'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueSession)
Vue.use(Auth)
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
