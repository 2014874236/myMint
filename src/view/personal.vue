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
				<mt-button>
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
		<div class="myOrder">
			<div class="order">
				<mt-button class="btn"><i class="fa fa-file-text-o" aria-hidden="true"></i></mt-button>
				<span>我的订单</span>
				<span class="moreOrder">
					查看全部订单
					<i class="fa fa-chevron-right" aria-hidden="true"></i>
				</span>
			</div>
			<div class="orderInfo">
				<div class="wait">
					<p><i class="fa fa-file-text-o" aria-hidden="true"></i></p>
					<p class="text">待付款</p>
				</div>
				<div class="wait">
					<p><i class="fa fa-file-text-o" aria-hidden="true"></i></p>
					<p  class="text">待发货</p>
				</div>
				<div class="wait">
					<p><i class="fa fa-file-text-o" aria-hidden="true"></i></p>
					<p class="text">待收货</p>
				</div>
				<div class="wait">
					<p><i class="fa fa-file-text-o" aria-hidden="true"></i></p>
					<p class="text">待评价</p>
				</div>
				<div style="clear:left;"></div>
			</div>
		</div>
		<div class="otherInfo">
			<div class="address">
				<mt-button class="btn"><i class="fa fa-map-marker" aria-hidden="true"></i></mt-button>
				<span>地址管理</span>
				<span class="right"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
			</div>
			<div class="password">
				<mt-button class="btn"><i class="fa fa-map-marker" aria-hidden="true"></i></mt-button>
				<span>修改密码</span>
				<span class="right"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
			</div>
			<div class="phone">
				<mt-button class="btn"><i class="fa fa-mobile" aria-hidden="true"></i></mt-button>
				<span>绑定手机</span>
				<span class="right"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
			</div>
			<div class="login">
				<mt-button class="btn"><i class="fa fa-sign-in" aria-hidden="true"></i></mt-button>
				<span>退出登录</span>
				<span class="right"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
			</div>
		</div>
		<NavBar></NavBar>
	</div>
</template>
<script> 
	// 底部导航
	import NavBar from '@/view/navBar'
	import store from './../store'
	import Login from '@/view/login'
	export default{
		data(){
			return{
				loginForm:store.state.loginForm
			}
		},
		components:{
			NavBar
		},
		computed:{
			loginStatus(){
				return this.$store.state.loginStatus;
			}
		},
		mounted:function(){
			if(!this.loginStatus){
				this.$router.push({path:'/login',component:Login})
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
		font-size: 0.8rem;
		z-index: 100;
		height: 2rem;
		line-height: 2.5rem;
	}
	/*返回按钮*/
	.personal button,.personal button label{
		cursor:pointer;
		height: 1.7rem;
	}
	.personal .mintui{
		font-size: 0.8rem;
	}
	/*个人信息*/
	.personal .personalInfo{
		padding: 1.5rem 0.4rem;
		background: #ff3600;
	}
	.personal .personalInfo .Img{
		float: left;
		width: 20%;
		text-align: center;
	}
	.personal .personalInfo .Img img{
		width: 2.2rem;
		height: 2.2rem;
	}
	.personal .personalInfo .username{
		float: left;
		width: 45%;
	}
	.personal .personalInfo .username p{
		color: #fff;
		font-size: 0.7rem;
		font-weight: 500;
	}
	.personal .personalInfo .btn{
		float: left;
		margin-left: 0.5rem;
	}
	.personal .personalInfo .btn button{
		height: 1.7rem;
	}
	.personal .personalInfo .btn label{
		font-size: 0.6rem;
		color: #999;
		opacity: 0.5;
	}
	/*积分余额*/
	.personal .accountInfo{
		background: #ff3600;
	}
	.personal .accountInfo ul li{
		float: left;
		list-style: none;
		color: #fff;
		font-size: 0.7rem;
		width: 33%;
		text-align: center;
		padding: 0.5rem 0;
		background: #b22700;
		margin-left: 0.5%;
	}
	.personal .accountInfo ul li:first-child{
		margin-left: 0;
	}
	/*我的订单*/
	.personal .myOrder{
		font-size: 0.7rem;
		background: #fff;
	}
	.personal .myOrder .order{
		line-height: 3.7rem;
		border-bottom: 1px solid #ddd;
	}
	.personal .myOrder .btn{
		background: #828c98;
		color: #fff;
		border-radius: 2px;
		margin-left: 1rem;
		margin-right: 0.8rem;
		padding: 0 0.4rem;
		height: 1.5rem;
	}
	.personal .myOrder .btn i{
		font-size: 1.2rem;
	}
	.personal .myOrder .order .moreOrder{
		float: right;
		color: #c8c7cc;
		margin-right: 0.7rem;
	}
	.personal .myOrder .orderInfo .wait{
		float: left;
		width: 25%;
		text-align: center;
		margin-top: 0.8rem;
		margin-bottom: 0.8rem;
	}
	.personal .myOrder .orderInfo .wait i{
		font-size: 1.5rem;
		color: #424242;
	}
	.personal .myOrder .orderInfo .wait .text{
		color: #676767;
		padding-top: 0.5rem;
		font-size: 0.7rem;
	}
	/*收货地址等*/
	.personal .otherInfo{
		font-size: 0.7rem;
		margin-top: 1rem;
		background: #fff;
		margin-bottom: 3rem;
	}
	.personal .otherInfo .address,
	.personal .otherInfo .password,
	.personal .otherInfo .phone,
	.personal .otherInfo .login{
		line-height: 3.5rem;
		border-bottom: 1px solid #ddd;
	}
	.personal .otherInfo .login{
		border-bottom:0;
	}
	.personal .otherInfo .address .btn,
	.personal .otherInfo .password .btn,
	.personal .otherInfo .phone .btn,
	.personal .otherInfo .login .btn{
		background: #51BCE0;
		color: #FFF;
		padding: 0 0.5rem;
		margin-left: 1rem;
		margin-right: 0.8rem;
		height: 1.8rem;
	}
	.personal .otherInfo .password .btn{
		background:#ff8c43;
	}
	.personal .otherInfo .phone .btn{
		padding: 0 0.7rem;
		background:#fa6c5e;
	}
	.personal .otherInfo .login .btn{
		padding: 0 0.5rem;
		background:#fa6c5e;
	}
	.personal .otherInfo .address .btn i,
	.personal .otherInfo .password .btn i,
	.personal .otherInfo .phone .btn i{
		font-size: 1.5rem;
	}
	.personal .otherInfo .login .btn i{
		font-size: 1.2rem;
	}
	.personal .otherInfo .right{
		float: right;
		margin-right: 0.8rem;
		color: #c8c7cc;
	}
</style>