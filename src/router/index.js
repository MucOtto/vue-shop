import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage/index.vue'
import LoginPage from '@/views/LoginPage/index.vue'
import SearchPage from '@/views/SearchPage/index.vue'
import SearchList from '@/views/SearchPage/list.vue'
import ProductPage from '@/views/ProductPage/index.vue'
import PayPage from '@/views/PayPage/index.vue'
import OrderPage from '@/views/OrderPage/index.vue'
import Home from '@/views/HomePage/Home.vue'
import Category from '@/views/HomePage/Category.vue'
import Shoppingcart from '@/views/HomePage/Shoppingcart.vue'
import User from '@/views/HomePage/User.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomePage,
    redirect: '/home',
    children: [
      { path: '/home', component: Home },
      { path: '/category', component: Category },
      { path: '/shopingcart', component: Shoppingcart },
      { path: '/user', component: User }

    ]
  },
  { path: '/login', component: LoginPage },
  { path: '/search', component: SearchPage },
  { path: '/searchlist', component: SearchList },
  { path: '/product/:id', component: ProductPage },
  { path: '/pay', component: PayPage },
  { path: '/order', component: OrderPage }
]

const router = new VueRouter({
  routes
})

// 需要登陆态才能访问的url
const authUrl = ['/pay', '/order']
router.beforeEach((to, from, next) => {
  // 如果访问页面不需要登陆态直接放行
  if (!authUrl.includes(to.path)) {
    next()
    return
  }
  // 检验token 存在放行不存在跳转登陆页
  const token = store.getters.token
  if (!token) {
    next('/login')
  }
  next()
})

export default router
