import Vue from 'vue'
import App from './App.vue';
import router from './router/index'
import 'static/css/base.css';

new Vue({
  el:'#app',
  router,
  render:h=>h(App)
})