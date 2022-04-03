import Vue from 'vue'
import App from './App.vue'
import VuePapaParse from 'vue-papa-parse'

Vue.config.productionTip = false
Vue.use(VuePapaParse)

new Vue({
  render: h => h(App),
}).$mount('#app')
