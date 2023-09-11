import Home from '@/components/Index.vue'
import Login from '@/components/login/index.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    {
      path: '/login',
      component: Login
    }
  ]
})
export default router
