<template>
	<div class="register">
		<mt-header title="用户注册">
		   	<router-link to="/" slot="left">
		    	<mt-button icon="back">返回</mt-button>
		  	</router-link>
		</mt-header>
		<div class="registerContent">
			<form :model="rulesForm" :rules="rules">
				<mt-field label="用户名" placeholder="请输入用户名" v-model="rulesForm.username"></mt-field>
				<mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="rulesForm.email"></mt-field>
				<mt-field label="密码" placeholder="请输入密码" type="password" v-model="rulesForm.password"></mt-field>
				<mt-field label="重复密码" placeholder="请重复输入密码" type="password" v-model="rulesForm.dbpassword"></mt-field>
				<mt-field label="电话" placeholder="请输入电话号码" type="tel" v-model="rulesForm.phone"></mt-field>
				<mt-button type="danger">注册</mt-button>
			</form>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			var validatorPhone=function(){
				
			}
			return {
				rulesForm:{
					username:'',
					email:'',
					password:'',
					dbpassword:'',
					phone:''
				},
				rules:{
					// username:{},
					phone:[ 
						{ validator:validatorPhone,tigger:'blur' }
					]
				}
			}
		}
	}
</script>
<style>
	.register .mint-header{
		background-color:#1b1b20;
		color: #fff;
		z-index: 100;
	}
</style>