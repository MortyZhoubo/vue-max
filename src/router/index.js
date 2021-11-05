// 1、导入vue-router
import VueRouter from 'vue-router'
// 2、导入vue
import Vue from 'vue'
// 3、安装
Vue.use(VueRouter)
// 4、创建VueRouter实例-路由对象
import { constantRoutes } from "@/config/route-config"
//重写路由push方法，解决相同路径跳转报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch((err) => err)
}
// 如果你的改了push还是没有生效，可以考虑改replace方法
// 修改路由replace方法,阻止重复点击报错
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location, onResolve, onReject) {
    if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
    return originalReplace.call(this, location).catch((err) => err)
}

export const router = new VueRouter({
    // 5、配置路由
    //5.1配置路模式
    mode:"history",
    // 5.2 配置路由对象数组
    routes: constantRoutes
    
})

// 6、导出路由对象
export default router;