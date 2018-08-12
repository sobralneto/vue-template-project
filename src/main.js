// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './infrastructure/router'
import store from './infrastructure/vuex/store'
import BootstrapVue from 'bootstrap-vue'
import money from 'v-money'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(money, {precision: 2})
Vue.use(BootstrapVue)
Vue.prototype.$http = axios

const token = sessionStorage.getItem(btoa(process.env.LABEL_TOKEN_STORAGE))

if (token) {
  axios.defaults.headers.common['Authorization'] = token
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
