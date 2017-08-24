<template>
	<div class="login">
		<mt-header title="账户登录">
		    <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
		  	<router-link to="/register" slot="right">
		  		<mt-button >注册</mt-button>
		  	</router-link>
		</mt-header>
		<form :model="loginForm" class="loginForm">
			<section>
				<div>
					<input type="text" placeholder="用户名" v-model="loginForm.username">
				</div>
			</section>
			<section>
				<div>
					<input type="password" placeholder="密码" v-model="loginForm.password">
				</div>
			</section>
			<section>
				<mt-button @click="loginSubmit">登录</mt-button>
			</section>	
		</form>
		<!-- 验证码 -->
		<!-- <div class="img_change_img">
            <img v-show="captchaCodeImg" :src="captchaCodeImg">
            <div class="change_img" @click="getCaptchas">
                <p>看不清</p>
                <p>换一张</p>
            </div>
        </div> -->
	</div>
</template>
<script>
	// 首页
	import Home from '@/view/home'
	import store from '../store'
	import {api} from '../global/api'
	import {MessageBox} from 'mint-ui'
	export default{
		data(){
			return {
				loginForm:store.state.loginForm,
				form:'',
				// loginStatus:store.state.loginStatus
				 // captchaCodeImg:''
			}
		},
		mounted:function(){
			this.getData();
			// this.getCaptchas();
		},
		methods:{
			goBack:function(){
				this.$router.go(-1);
			},
			getData:function(){
				this.$http.get(api.login).then((response) => {
					console.log("登录页面response的值",response);
					this.form=response.data;
				})

			},
			loginSubmit:function(){
				console.log("this.loginForm.username：",this.loginForm.username);
				console.log("this.loginForm.password：",this.loginForm.password);
				var flag=0;
				for(let i=0;i<this.form.length;i++){
					if(this.form[i].username === this.loginForm.username && this.form[i].password == this.loginForm.password){
						flag=1;
						break;
					}
				}
				if(flag === 0){
					MessageBox.alert("用户名或密码不正确", "提示");
					this.loginForm.username='';
					this.loginForm.password='';
				}
				else{
					this.$router.push({ path:'/',component:Home });
					// this.loginStatus=true;
					store.dispatch('setloginStatus',true);
					// console.log("login页面的loginStatus值",this.loginStatus);
				}
				
			}
			// getCaptchas:function(){
			// 	this.$http.get(api.captchas).then((response) => {
			// 		console.log("图片验证码",response);
			// 	},() => {
			// 		console.log("请求失败");
			// 	})
			// }
		}
	}
</script>
<style>
	/*头部*/
	.login .mint-header{
		background-color:#1b1b20;
		color: #fff;
		font-size: 0.8rem;
		z-index: 100;
		height: 2rem;
		line-height: 2.5rem;
	}
	/*返回按钮*/
	.login button,.login button label{
		cursor:pointer;
		height: 1.7rem;
	}
	.login .mintui{
		font-size: 0.8rem;
	}
	/*登录组件*/
	.login .loginForm section{
		line-height: 2rem;
		width: 100%;
		text-align: center;
		margin-top:1rem;
		margin-bottom: 1.2rem; 
	}
	.login .loginForm section:nth-child(1){
		margin-top: 2rem;
	}
	.login .loginForm section div{
		width: 80%;
		border: 1px solid #e0e0e0;
		display: inline-block;
		background: #fff;
	}
	.login .loginForm section div input{
		outline: none;
		border: 0;
		font-size: 0.7rem;
		width: 90%;
	}
	/*登录按钮*/
	.login .loginForm button{
		width: 80%;
		background: #ff3600;
		border-radius: 0px;
		color: #fff;
		text-align: center;
		margin-top: 1.2rem;
		height: 1.7rem;
		font-size: 0.7rem;
	}
</style>