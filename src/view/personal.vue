<template>
	<div class="personal">
		<mt-header title="个人中心">
		    <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
		</mt-header>
		<div class="personalInfo">
			<div class="Img">
				<img src="../assets/img/logo.png">
			</div>
			<div class="username">
				<p>{{ loginForm.username }}</p>
				<p>茶人-V0 您已累计消费0元</p>
			</div>
			<div class="btn">
				<mt-button size="small">
					<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
					签到得积分
				</mt-button>
			</div>
			<div style="clear:left;"></div>
		</div>
		<div class="accountInfo">
			<ul>
				<li>
					<p>0</p>
					<p>账户余额</p>
				</li>
				<li>
					<p>0</p>
					<p>积分余额</p>
				</li>
				<li>
					<p>0</p>
					<p>红包个数</p>
				</li>
				<div style="clear:left;"></div>
			</ul>
		</div>
		<i class="fa fa-file-text-o" aria-hidden="true"></i>
	</div>
</template>
<script> 
	import store from './../store'
	export default{
		data(){
			return{
				loginForm:store.state.loginForm
			}
		},
		methods:{
			goBack:function(){
				this.$router.go(-1);
			},
		}
	}
</script>
<style>
	/*头部*/
	.personal .mint-header{
		background-color:#1b1b20;
		color: #fff;
		font-size: 1rem;
		z-index: 100;
	}
	/*返回按钮*/
	.personal button,.personal button label{
		cursor:pointer;
	}
	.personal .personalInfo{
		padding: 1.8rem 0.5rem;
		background: #ff3600;
	}
	.personal .personalInfo .Img{
		float: left;
		width: 20%;
		text-align: center;
	}
	.personal .personalInfo .Img img{
		width: 2.5rem;
		height: 2.5rem;
	}
	.personal .personalInfo .username{
		float: left;
		width: 45%;
	}
	.personal .personalInfo .username p{
		color: #fff;
		font-size: 0.8rem;
		font-weight: 500;
	}
	.personal .personalInfo .btn{
		float: left;
	}
	.personal .personalInfo .btn label{
		font-size: 0.8rem;
		color: #999;
		opacity: 0.5;
	}
	.personal .accountInfo{
		background: #ff3600;
	}
	.personal .accountInfo ul li{
		float: left;
		list-style: none;
		color: #fff;
		font-size: 0.8rem;
		width: 33%;
		text-align: center;
		padding: 0.6rem 0;
		background: #b22700;
		margin-left: 0.5%;
	}
	.personal .accountInfo ul li:first-child{
		margin-left: 0;
	}
	@media screen and (min-width: 768px) {
		/*头部*/
		.personal .mint-header{
			font-size: 1.5rem;
			height: 50px;
		}
	}
</style>