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
	},
	getter:{
			userLoginStatus: state => {
				console.log('入参zzzzz：',state.loginStatus);
		      	return state.loginStatus;
		    }
	},
	mutations:{
		SET_LOGINSTATUS:(state,newLoginStatus) => {
			state.loginStatus=newLoginStatus;
			console.log('入参：',state.loginStatus);
		}
	},
	actions:{
		setloginStatus({ dispatch,commit, state},newLoginStatus){
			commit('SET_LOGINSTATUS',newLoginStatus);
		}
	}
})
export default store;