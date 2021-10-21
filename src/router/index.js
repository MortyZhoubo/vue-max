// 1、导入vue-router
import VueRouter from 'vue-router'
// 2、导入vue
import Vue from 'vue'
// 3、安装
Vue.use(VueRouter)
// 4、创建VueRouter实例-路由对象

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

const Home = () => import(/*webpackChunkName:'index'*/'@@/components/home.vue')
const Login = () => import(/*webpackChunkName:'index'*/'@@/components/login.vue')

const router = new VueRouter({
    // 5、配置路由
    //5.1配置路模式
    mode:"history",
    // 5.2 配置路由对象数组
    routes: [
        // 待配置-使用懒加载
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
    ]
})
router.beforeEach((to, from, next) => {
    console.log(to)
    console.log(from)
    console.log(next)
    if(!window.sessionStorage.getItem('token')){
        if(to.path !== '/login'){
            return next("/login")
        }
        next()
    }else{
        next()
    }
})

// 6、导出路由对象
export default router;