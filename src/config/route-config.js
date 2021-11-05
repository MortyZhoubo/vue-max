import Layout from '@/layout'
export const constantRoutes = {
    path: '/basicView',
    name: 'basicView',
    component: Layout,
    hidden: true,
    chilidren: [
        {
            path: '/redirect/:path(.*)',
            component: () => import('@/views/redirect/index')
        }
    ]
}
export const asyncRoutes = {

}