import Vue from 'vue'
import App from './App.vue'
//import router from './router'
//import store from './store'

//Vue.config.productionTip = false

//new Vue({
//  store,
//  render: h => h(App)
//}).$mount('#app')

new Vue({
  el: '#app',
  template: '<App />',
  components: {
    App,
  }
})