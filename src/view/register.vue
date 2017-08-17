<template>
	<div class="register">
		<mt-header title="用户注册">
		   	<router-link to="/" slot="left">
		    	<mt-button icon="back">返回</mt-button>
		  	</router-link>
		</mt-header>
		<div class="registerContent">
			<form :model="rulesForm" :rules="rules" ref="rulesForm">
				<mt-field label="用户名"  placeholder="请输入用户名" v-model="rulesForm.username"></mt-field>
				<mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="rulesForm.email"></mt-field>
				<mt-field label="电话" prop="phone" placeholder="请输入电话号码" type="tel" v-model="rulesForm.phone"></mt-field>
				<mt-field label="密码" placeholder="请输入密码" type="password" v-model="rulesForm.password"></mt-field>
				<mt-field label="重复密码" placeholder="请重复输入密码" type="password" v-model="rulesForm.dbpassword"></mt-field>
				<mt-button type="danger" class="btn" @click="registerSubmit">注册</mt-button>
			</form>
		</div>
	</div>
</template>
<script>
	import { MessageBox } from 'mint-ui';
	import {api} from '../global/api';
	export default{
		data(){
			
			// var validatorPhone=(rule,value,callback) => {
			// 	if(!value){
			// 		new Error("请输入电话号码");
			// 	}
			// 	else if(!(/^[0-9]{11}$/.test(value))){
			// 		new Error("请输入11位数字");
			// 	}
			// 	else{
			// 		callback();
			// 	}
			// };
			return {
				rulesForm:{
					username:'',
					email:'',
					password:'',
					dbpassword:'',
					phone:''
				},
				form:'',
				rules:{
				// 	// username:{},
				// 	phone:[ 
				// 		{ validator:validatorPhone,trigger:'blur' }
				// 	]
				}
			}
		},
		mounted:function(){
			this.getData();
		},
		methods:{
			getData:function(){
				this.$http.get(api.login).then(function(response){
					console.log("response的值",response);
					this.form=response.data;
				});
			},
			registerSubmit:function(){
				// 判断用户名是否为空或已存在
				var flag=0;
				for(let i=0;i<this.form.length;i++){
					if(this.rulesForm.username===this.form[i].username){
						flag=1;
						break;
					}
				}
				console.log("flag的值",flag);
				if(!this.rulesForm.username){
					MessageBox.alert("用户名不能为空", "提示");
				}
				if(flag===1){
					MessageBox.alert("用户名已存在", "提示");
				}
				// 判断邮箱是否符合格式要求
				if(!this.rulesForm.email){
					MessageBox.alert("邮箱不能为空", "提示");
				}
				// var reg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
				// if(!reg.test(this.rulesForm.email)){
				// 	MessageBox.alert("邮箱必须包含@", "提示");
				// }

				// 判断电话是否为11位数字
				if(!this.rulesForm.phone){
					MessageBox.alert("电话号码不能为空", "提示");
				}
				var reg=/^[0-9]{11}$/;
				if(!reg.test(this.rulesForm.phone)){
					MessageBox.alert("电话号码必须为11位数字", "提示");
				}
				// 判断密码是否为空
				if(!this.rulesForm.password){
					MessageBox.alert("密码不能为空", "提示");
				}
				// 判断两次输入密码是否一致
				if(this.rulesForm.password !== ''){
					if(!this.rulesForm.dbpassword){
						MessageBox.alert("请再次输入密码", "提示");
					}
					else if(this.rulesForm.password === this.rulesForm.dbpassword){
						console.log("两次密码一致");
					}
					else{
						MessageBox.alert("两次密码不一致", "提示");
						this.rulesForm.password='';
						this.rulesForm.dbpassword='';
					}
				}
			}
		}
	}
</script>
<style>
	.register .mint-header{
		background-color:#1b1b20;
		color: #fff;
		font-size: 1rem;
		z-index: 100;
	}
	.register form .btn{
		margin-top: 5%;
		margin-left: 40%;
		text-align: center;
	}
	@media screen and (min-width: 768px) {
		.register .mint-header{
			font-size: 1.5rem;
			height: 50px;
		}
	}
</style>