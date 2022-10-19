import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('./components/Register')
  }
];

const scrollBehavior = function () {
  return {
    x: 0,
    y: 0
  }
};

const router = new VueRouter({
  scrollBehavior,
  routes,
  mode: 'history',
})

export default router
