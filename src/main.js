import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueRouter from 'vue-router';

import { routes } from './routes';

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter ({
  
  // Prevents hashtag from appearing in topbar directory
  mode: 'history',
  
  routes: routes
  
});

new Vue({
  
  el: '#app',
  router,
  render: h => h(App)
  
})