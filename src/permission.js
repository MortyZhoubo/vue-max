import { router } from "@/router/index"
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
router.beforeEach(async(to, from, next) => {
    // debugger
    NProgress.start()
    console.log(to)
    console.log(from)
    console.log(next)
    if(!window.sessionStorage.getItem('token')){
        if(to.path !== '/login'){
           next("/login")
        }else{
            next()
        }
        NProgress.done()
    }else{
        console.log(store.state)
        // debugger
        if(store.state.permission.routes.length > 0){
            next()
        }else{
            const accessRoutes = await store.dispatch('permission/generateRoutes')
            router.addRoutes(accessRoutes)
            next({ ...to, replace: true })
        }
        NProgress.done()
    }
})