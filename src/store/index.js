import Vue from 'vue'
// 导入vuex
import Vuex from 'vuex'
//挂载Vuex
Vue.use(Vuex)

//创建Vuex对象
const store = new Vuex.Store({
    state:{
        //存放的键值对就是所要管理的状态，待配置
    }
})
// 默认导出store
export default store