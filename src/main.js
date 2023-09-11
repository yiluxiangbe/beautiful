import Vue from 'vue'
import App from './App.vue'

// 导入全局组件
import Head from '@/page/head/index.vue'
import Nav from '@/page/nav/index.vue'
import router from '@/router/index.js'
Vue.component(Head.name, Head)
Vue.component(Nav.name, Nav)
Vue.use(router)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')
