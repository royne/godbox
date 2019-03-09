// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './resource/index'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.http.interceptor.before = (request, next) => {
  console.log(request);
  next((response) => {
    console.log(response)
  })
}

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
