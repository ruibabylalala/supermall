// cli3中   Vue2中
import Vue from 'vue'
import VueRouter from 'vue-router'
// 懒加载
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const ShopCart = () => import('../views/shopcart/ShopCart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')
// 1. 安装插件
Vue.use(VueRouter)
// 2. 创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router

// cli4中配置路由   vue3中
/* import { createRouter, createWebHistory } from 'vue-router'

const routes = [

]

// 在cli4中使用createRouter替代了new VueRouter
const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  routes,
  mode: 'history'
})

export default router */


