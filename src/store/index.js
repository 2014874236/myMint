import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store=new Vuex.Store({
	state:{
		loginForm:{
			username:'',
			password:''
		},
		// 登录状态
		loginStatus:false
	}
})
export default store;