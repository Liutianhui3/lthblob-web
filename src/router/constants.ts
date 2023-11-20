export const constantRoutes: any = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "login" */ '@/views/home/index.vue'),
    meta: { title: 'Login' }
  }
]
