import Vue from 'vue'
import bootstrap from 'bootstrap'

import router from './router'
import store from './store/store'

import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('currency', val => `$ ${val.toLocaleString()}`)

Vue.filter('price', val => `Price: $${val}`)

Vue.filter('quantity', val => `Quantity: ${val}`)

new Vue({
  router,
  store,
  bootstrap,
  render: h => h(App),
}).$mount('#app')
