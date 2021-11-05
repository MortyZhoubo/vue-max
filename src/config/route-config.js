import Basic from "@/layouts/basicView"

export const constantRoutes = [
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login.vue')
    }
]
export const asyncRoutes = [
    {
        path: '/basic',
        component: Basic,
        redirect: '/myIntro/myMessage',
        children: [
          {
            path: '/myIntro/myMessage',
            component: () => import('@/views/myIntro/myMessage.vue'),
            name: 'MyMessage',
            meta: { title: 'MyMessage', icon: 'dashboard', affix: true }
          },
          {
            path: '/myIntro/projectMessage',
            component: () => import('@/views/myIntro/projectMessage.vue'),
            name: 'ProjectMessage',
            meta: { title: 'ProjectMessage', icon: 'dashboard', affix: true }
          }
        ]
    }
]