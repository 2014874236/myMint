<template>
	<div class="register">
		<mt-header title="用户注册">
		    <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
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
					<div class="code">
						<input type="text" id="verification" v-model="rulesForm.verification" placeholder="4位数字">
						<mt-button type="danger" class="codeBtn" >获取验证码</mt-button>
					</div>
				</section>
				<section>
					<div>
						<!-- <label id="password">密码</label> -->
						<input type="password" id="password" v-model="rulesForm.password" placeholder="请输入密码">
					</div>
				</section>
				<section>
					<div>
						<!-- <label id="dbpassword">重复密码</label> -->
						<input type="password" id="dbpassword" v-model="rulesForm.dbpassword" placeholder="请重复输入密码">
					</div>
				</section>
				<section>
					<mt-button type="danger" class="btn" @click="registerSubmit">注册</mt-button>
				</section>
			</form>
		</div>
		<div class="footer">
			<i class="fa fa-check-circle" aria-hidden="true"></i>
            点击 立即注册 即表示您同意醉品<span>用户协议</span>和<span>隐私协议</span>
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
				form:'',
				popupVisible:false
			}
		},
		mounted:function(){
			this.getData();
		},
		methods:{
			goBack:function(){
				this.$router.go(-1);
			},
			getData:function(){
				this.$http.get(api.login).then(function(response){
					console.log("response的值",response);
					this.form=response.data;
				});
			},
			registerSubmit:function(){
				var value=true;
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
					value=false;
				}
				if(flag===1){
					MessageBox.alert("用户名已存在", "提示");
					value=false;
				}
				// 判断邮箱是否符合格式要求
				// if(!this.rulesForm.email){
				// 	MessageBox.alert("邮箱不能为空", "提示");
				// }
				// var reg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
				// if(!reg.test(this.rulesForm.email)){
				// 	MessageBox.alert("邮箱必须包含@", "提示");
				// }

				// 判断电话是否为11位数字
				if(!this.rulesForm.phone){
					MessageBox.alert("电话号码不能为空", "提示");
					value=false;
				}
				var reg=/^[0-9]{11}$/;
				if(!reg.test(this.rulesForm.phone)){
					MessageBox.alert("电话号码必须为11位数字", "提示");
					value=false;
				}
				// 判断密码是否为空
				if(!this.rulesForm.password){
					MessageBox.alert("密码不能为空", "提示");
					value=false;
				}
				// 判断两次输入密码是否一致
				if(this.rulesForm.password !== ''){
					if(!this.rulesForm.dbpassword){
						MessageBox.alert("请再次输入密码", "提示");
						value=false;
					}
					else if(this.rulesForm.password === this.rulesForm.dbpassword){
						console.log("两次密码一致");
					}
					else{
						MessageBox.alert("两次密码不一致", "提示");
						value=false;
						this.rulesForm.password='';
						this.rulesForm.dbpassword='';
					}
				}
				if(value===true){
					MessageBox.alert("注册成功", "提示")
				}
			}
		}
	}
</script>
<style>
	/*头部*/
	.register .mint-header{
		background-color:#1b1b20;
		color: #fff;
		font-size: 0.8rem;
		z-index: 100;
		height: 2rem;
		line-height: 2.5rem;
	}
	.register button,.register button label{
		cursor:pointer;
		height: 1.7rem;
	}
	.register .mintui{
		font-size: 0.8rem;
	}
	/*中间注册相关信息*/
	.register .registerContent section{
		width: 100%;
		text-align: center;
		line-height: 2rem;
		margin-top: 1rem;
		margin-bottom: 0.28rem;
	}
	.register .registerContent section:nth-child(1){
		margin-top: 2rem;
	}
	.register .registerContent div{
		width: 80%;
		display: inline-block;
		border: 1px solid #e0e0e0;
		background: #fff;
	}
	.register .registerContent div.code{
		background:#f4f4f4;
	}
	.register .registerContent div label{
		width: 25%;
		line-height: 2rem;
		float: left;
		display: block;
		text-align: center;
		font-size: 0.7rem;
		color: #333;
	}
	.register .registerContent div input{
		font-size: 0.7rem;
	    border: 0;
	    line-height: 2rem;
	    width: 75%;
	    outline: none;
	}
    .register .registerContent div input#password,.register .registerContent div input#dbpassword{
    	width: 90%;
    }
    .register .registerContent div.code{
    	border: 0;
    }
     .register .registerContent div input#verification{
     	width: 52%;
     	float: left;
     	display: block;
     	text-align: center;
     	border: 1px solid #e0e0e0;
     }
     .register .registerContent div .codeBtn{
     	display: block;
     	float: right;
     	margin-left: 5%;
     	width: 38%;
     	background: #ff3600;
     	border-radius: 0px;
     	cursor:pointer;
     	font-size: 0.7rem;
     	height: 2rem;
     }
     .register .registerContent div .codeBtn label{
     	width: 100%;
     	color: #fff;
     }
     /*注册按钮*/
     .register .registerContent .btn{
     	width:80%;
     	background: #ff3600;
     	border-radius: 0px;
     	cursor:pointer;
     	font-size: 0.7rem;
     	height: 1.7rem;
     }
     /*协议部分*/
     .register .footer{
     	line-height: 2rem;
     	color: #999;
     	font-size: 0.7rem;
     	text-align: center;
     }
     .register .footer i,.register .footer span{
     	color: #ff3600;
     	cursor:pointer;
     }
</style>