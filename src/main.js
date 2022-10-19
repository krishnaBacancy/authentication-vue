import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import Vuelidate from 'vuelidate'
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"

Vue.use(Toast, {
  transition: "Vue-Toastification__fade",
  maxToasts: 2
})
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
