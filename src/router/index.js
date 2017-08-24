import Vue from 'vue'
import Router from 'vue-router'

// 底部导航
import NavBar from '@/view/navBar'
// 首页
import Home from '@/view/home'
// 分类
import Classify from '@/view/classify'
// 用户注册
import Register from '@/view/register'
// 用户登录
import Login from '@/view/login'
// 购物车
import Shopping from '@/view/shopping'
// 个人中心
import Personal from '@/view/personal'
// 商品详细页
import DragonDetail from '@/view/dragonDetail'


Vue.use(Router)

export default new Router({
  routes: [
    		{ path:'/home',component:Home },
        { path:'/dragonDetail',component:DragonDetail },
    		{ path:'/classify',component:Classify },
        { path:'/shopping',component:Shopping },
        { path:'/personal',component:Personal },
    		{ path:'/register',component:Register },
        { path:'/login',component:Login },
   			{ path:'/', redirect:'home' }
  ]
})
