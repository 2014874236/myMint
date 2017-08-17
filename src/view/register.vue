<template>
	<div class="register">
		<mt-header title="用户注册">
		   	<router-link to="/" slot="left">
		    	<mt-button icon="back">返回</mt-button>
		  	</router-link>
		</mt-header>
		<div class="registerContent">
			<form :model="rulesForm" ref="rulesForm">
				<section>
					<div>
						<label id="username">用户名</label>
						<input type="text" id="username" v-model="rulesForm.username" placeholder="请输入用户名">
					</div>
				</section>
				<!-- <section>
					<div>
						<label id="email">邮箱</label>
						<input type="text" id="email" v-model="rulesForm.email" placeholder="请输入邮箱">
					</div>
				</section> -->
				<section>
					<div>
						<label id="phone">电话</label>
						<input type="text" id="phone" v-model="rulesForm.phone" placeholder="请输入电话号码">
					</div>
				</section>
				<section>
					<div>
						<!-- <label id="password">密码</label> -->
						<input type="text" id="password" v-model="rulesForm.password" placeholder="请输入密码">
					</div>
				</section>
				<section>
					<div>
						<!-- <label id="dbpassword">重复密码</label> -->
						<input type="text" id="dbpassword" v-model="rulesForm.dbpassword" placeholder="请重复输入密码">
					</div>
				</section>
				<section>
					<mt-button type="danger" class="btn" @click="registerSubmit">注册</mt-button>
				</section>
			</form>
		</div>
	</div>
</template>
<script>
	import { MessageBox } from 'mint-ui';
	import {api} from '../global/api';
	export default{
		data(){
			return {
				rulesForm:{
					username:'',
					email:'',
					password:'',
					dbpassword:'',
					phone:''
				},
				form:''
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
	.register{
		background: #f4f4f4;
		width: 100%;
		height: 100%;
	}
	.register .mint-header{
		background-color:#1b1b20;
		color: #fff;
		font-size: 1rem;
		z-index: 100;
	}
	.register .registerContent section{
		width: 100%;
		text-align: center;
		line-height: 2.5rem;
		margin-top: 2rem;
		margin-bottom: 0.28rem;
	}
	.register .registerContent div{
		width: 90%;
		display: inline-block;
		border: 1px solid #e0e0e0;
		background: #fff;
	}
	.register .registerContent div label{
		width: 25%;
		line-height: 2.5rem;
		float: left;
		display: block;
		text-align: center;
		font-size: 1rem;
		color: #333;
	}
	.register .registerContent div input{
		font-size: 0.9rem;
	    border: 0;
	    line-height: 2.5rem;
	    width: 75%;
	    outline: none;
	}
    
	/*.register form .btn{
		margin-top: 5%;
		margin-left: 40%;
		text-align: center;
	}*/
	@media screen and (min-width: 768px) {
		.register .mint-header{
			font-size: 1.5rem;
			height: 50px;
		}
	}
</style>