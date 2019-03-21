import Vue from 'vue'
import App from './App.vue'
import VueAgile from 'vue-agile/dist/Agile.vue';


Vue.use(VueAgile);

new Vue({
  el: '#app',
  render: h => h(App)
})
