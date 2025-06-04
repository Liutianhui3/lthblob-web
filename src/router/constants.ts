export const constantRoutes: any = [
  {
    path: '/',
    redirect: '/demo'
  },
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "login" */ '@/views/home/index.vue'),
    meta: { title: 'Home' }
  },
  {
    path: '/demo',
    component: () => import(/* webpackChunkName: "login" */ '@/views/demo/index.vue'),
    meta: { title: 'Demo' }
  },
  {
    path: '/demo1',
    component: () => import(/* webpackChunkName: "login" */ '@/views/demo1/index.vue'),
    meta: { title: 'Demo1' }
  }
]
