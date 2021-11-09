import Vue from 'vue'
import App from './App.vue'
// 导入路由，/index.js可以省略会自动加载
import router from './router'
// 导入store
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import Utils from './common/utils.js';
Vue.prototype.utils=Utils;
require("../src/assets/index.css")
require("../src/assets/glide.core.min.css")
require("../src/assets/glide.theme.min.css")
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Antd);
import './permission'
export const eventBus = new Vue()
new Vue({
  render: h => h(App),
  // 注入路由到vue实例中
  router,
  // 注入store到vue实例中
  store
}).$mount('#app')
