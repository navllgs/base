require('./bootstrap');
import Vue from 'vue'
import mainComponent from './views/App'
import router from '../router/index'
import store from '../store/index'
import '../iview/index'

new Vue({
  el: '#app',
  router,
  store,
  components: { mainComponent }
})