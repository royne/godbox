import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

// Vue.http.options.root = 'http://localhost:3000'

Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.http.headers.common['Accept-Language'] = 'es'
Vue.http.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
Vue.http.headers.common['Access-Control-Allow-Headers'] = 'X-Requested-With, X-Prototype-Version, Token, Auth-Token, Email, X-Device-ID, Authorization'
