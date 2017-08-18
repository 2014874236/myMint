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


Vue.use(Router)

export default new Router({
  routes: [
    { path:'/',component:NavBar ,
    	children:[
    		{ path:'home',component:Home },
    		{ path:'classify',component:Classify },
    		{ path:'register',component:Register },
        { path:'login',component:Login },
   			{ path:'', redirect:'home' }
    	]
	}
  ]
})
