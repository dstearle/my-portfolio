import Vue from 'vue';
import App from './App.vue';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import jQuery from 'jquery';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Vuelidate from 'vuelidate';
import VueClipboard from 'vue-clipboard2'

import { routes } from './routes';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuelidate);
Vue.use(VueClipboard);

// VueResource link to firebase database
Vue.http.options.root = 'https://vuejs2-27f10.firebaseio.com/';

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