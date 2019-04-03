import 'font-awesome/css/font-awesome.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { sync } from 'vuex-router-sync'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' 

Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'md'
})

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
