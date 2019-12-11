import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueHead from 'vue-head'
 
Vue.use(VueHead)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
