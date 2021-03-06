import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Swiper from './plugins/swiper';

import store from './store'

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  Swiper,
  render: h => h(App)
}).$mount('#app')

