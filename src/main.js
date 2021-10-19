import Vue from 'vue'
import App from './App.vue'
// 导入路由，/index.js可以省略会自动加载
import router from './router'
// 导入store
import store from './store'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注入路由到vue实例中
  router,
  // 注入store到vue实例中
  store
}).$mount('#app')
