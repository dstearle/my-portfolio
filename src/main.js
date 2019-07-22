import Vue from 'vue';
import App from './App.vue';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import jQuery from 'jquery';
import VueRouter from 'vue-router';

import { routes } from './routes';

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter ({
  
  // Prevents hashtag from appearing in topbar directory
  mode: 'history',
  
  routes: routes
  
});

//global declaration of jquery
global.jQuery = jQuery
global.$ = jQuery

new Vue({
  
  el: '#app',
  router,
  render: h => h(App)
  
})